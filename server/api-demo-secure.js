/**
 * AI Demo API Server (SECURED)
 * 
 * Proxy für Ollama auf CrackMachine
 * Rate-Limiting: 3 Prompts pro IP/Tag
 * 
 * SECURITY IMPROVEMENTS:
 * - CORS restricted to gtsh-engineering.de
 * - Prompt sanitization & injection protection
 * - IP validation (no x-forwarded-for spoofing)
 * - Content filtering enhanced
 * - Error messages sanitized
 * - Internal IP hidden via ENV
 */

import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
const PORT = process.env.PORT || 3001
const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434'

// Rate Limiting Store (TODO: Use Redis for production)
const rateLimits = new Map()

// CORS: Only allow gtsh-engineering.de
const corsOptions = {
  origin: [
    'https://gtsh-engineering.de',
    'https://www.gtsh-engineering.de',
    'http://localhost:5173', // Vite Dev
    'http://localhost:3000'  // Local Dev
  ],
  optionsSuccessStatus: 200
}

// Middleware
app.use(cors(corsOptions))
app.use(express.json({ limit: '10kb' })) // Max 10KB Body

// Prompt Sanitization
function sanitizePrompt(prompt) {
  // Remove control characters
  let cleaned = prompt.replace(/[\x00-\x1F\x7F-\x9F]/g, '')
  
  // Limit length
  cleaned = cleaned.substring(0, 500)
  
  // Check for prompt injection patterns
  const injectionPatterns = [
    /ignore (previous|all) instructions/i,
    /you are now/i,
    /system:/i,
    /\[INST\]/i,
    /\<\|im_start\|\>/i,
    /forget everything/i
  ]
  
  for (const pattern of injectionPatterns) {
    if (pattern.test(cleaned)) {
      throw new Error('Unangemessener Inhalt erkannt')
    }
  }
  
  return cleaned.trim()
}

// Enhanced Content Filter
function checkContent(prompt) {
  const blockedPatterns = [
    // Hacking/Security
    /hack|exploit|vulnerability|injection|xss|csrf/i,
    // Passwords/Credentials
    /password|passwort|credentials|api[_\s]?key/i,
    // Attacks
    /angriff|attack|ddos|malware|virus/i,
    // Spam/Abuse
    /spam|phishing|scam|fraud/i,
    // Inappropriate
    /porn|xxx|sex|drugs/i
  ]
  
  for (const pattern of blockedPatterns) {
    if (pattern.test(prompt)) {
      return false
    }
  }
  
  return true
}

// Rate Limiter (IP-based, no x-forwarded-for spoofing)
function checkRateLimit(ip) {
  const now = Date.now()
  const dayStart = new Date().setHours(0, 0, 0, 0)
  
  if (!rateLimits.has(ip)) {
    rateLimits.set(ip, { count: 0, reset: dayStart })
  }
  
  const limit = rateLimits.get(ip)
  
  // Reset wenn neuer Tag
  if (limit.reset < dayStart) {
    limit.count = 0
    limit.reset = dayStart
  }
  
  // PRÜFE ZUERST: Haben wir schon 3 Requests gehabt?
  if (limit.count >= 3) {
    return { allowed: false, remaining: 0, used: 3 }
  }
  
  // DANN zähle hoch
  limit.count++
  const remaining = 3 - limit.count
  
  return { 
    allowed: true, 
    remaining: remaining,
    used: limit.count,
    total: 3
  }
}

// Manual Reset Endpoint (Development Only)
function resetRateLimit(ip) {
  rateLimits.delete(ip)
  console.log(`[RESET] Rate limit cleared for ${ip.substring(0, 10)}...`)
}

// AI Demo Endpoint
app.post('/api/ai-demo', async (req, res) => {
  try {
    const { prompt } = req.body
    
    // Validation
    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Ungültige Anfrage' })
    }
    
    if (prompt.trim().length === 0) {
      return res.status(400).json({ error: 'Prompt ist erforderlich' })
    }
    
    if (prompt.length > 500) {
      return res.status(400).json({ error: 'Prompt zu lang (max 500 Zeichen)' })
    }
    
    // Sanitize Prompt
    let cleanPrompt
    try {
      cleanPrompt = sanitizePrompt(prompt)
    } catch (err) {
      return res.status(400).json({ error: err.message })
    }
    
    // Content Filter
    if (!checkContent(cleanPrompt)) {
      return res.status(400).json({ error: 'Unangemessener Inhalt' })
    }
    
    // Rate Limiting (ONLY use socket IP, no x-forwarded-for)
    const ip = req.socket.remoteAddress
    const rateLimit = checkRateLimit(ip)
    
    if (!rateLimit.allowed) {
      return res.status(429).json({
        error: 'Demo-Limit erreicht (3 Prompts/Tag). Für mehr → Schulung buchen!',
        remaining: 0
      })
    }
    
    // Log (anonymized)
    const shortIp = ip.substring(0, 10) + '...'
    console.log(`[${new Date().toISOString()}] Demo Request from ${shortIp}: "${cleanPrompt.substring(0, 50)}..."`)
    
    // System Prefix (anti prompt-injection)
    const systemPrompt = `Du bist ein hilfreicher KI-Assistent für GTSH Engineering. Beantworte die folgende Frage kurz und präzise (max. 200 Wörter):\n\n`
    
    // Ollama Request
    const ollamaResponse = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'qwen3:14b',
        prompt: systemPrompt + cleanPrompt,
        stream: false,
        options: {
          temperature: 0.7,
          num_predict: 800, // Max 800 Tokens (ca. 600 Wörter)
          top_p: 0.9
        }
      }),
      timeout: 60000 // 60 Sekunden Timeout (längere Antworten brauchen Zeit)
    })
    
    if (!ollamaResponse.ok) {
      console.error(`Ollama Error: ${ollamaResponse.status}`)
      throw new Error('KI-Modell nicht verfügbar')
    }
    
    const data = await ollamaResponse.json()
    
    // Success Response
    res.json({
      response: data.response.trim(),
      remaining: rateLimit.remaining,
      used: rateLimit.used,
      total: rateLimit.total,
      model: 'qwen3:14b',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('AI Demo Error:', error.message)
    
    // NEVER leak internal errors
    res.status(500).json({
      error: 'Verbindung zum KI-Modell fehlgeschlagen. Bitte später versuchen.'
    })
  }
})

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString()
  })
})

// Reset Rate Limit (Development Only!)
app.post('/api/reset-limit', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    return res.status(403).json({ error: 'Not available in production' })
  }
  
  const ip = req.socket.remoteAddress
  resetRateLimit(ip)
  
  res.json({
    success: true,
    message: 'Rate limit reset',
    ip: ip.substring(0, 10) + '...'
  })
})

// Cleanup old rate limits (every hour)
setInterval(() => {
  const now = Date.now()
  const yesterday = now - (24 * 60 * 60 * 1000)
  
  for (const [ip, data] of rateLimits.entries()) {
    if (data.reset < yesterday) {
      rateLimits.delete(ip)
    }
  }
}, 60 * 60 * 1000)

app.listen(PORT, () => {
  console.log(`🚀 AI Demo API (SECURED) running on http://localhost:${PORT}`)
  console.log(`📡 Ollama: ${OLLAMA_URL}`)
  console.log(`🔒 Rate Limit: 3 prompts/IP/day`)
  console.log(`🛡️ CORS: gtsh-engineering.de only`)
})
