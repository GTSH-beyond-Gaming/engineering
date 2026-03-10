/**
 * AI Demo API Server
 * 
 * Proxy für Ollama auf CrackMachine (192.168.178.98:11434)
 * Rate-Limiting: 3 Prompts pro IP/Tag
 */

import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'

const app = express()
const PORT = 3001

// Rate Limiting Store (In-Memory - für Production: Redis verwenden)
const rateLimits = new Map()

// Middleware
app.use(cors())
app.use(express.json())

// Rate Limiter
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
  
  if (limit.count >= 3) {
    return { allowed: false, remaining: 0 }
  }
  
  limit.count++
  return { allowed: true, remaining: 3 - limit.count }
}

// AI Demo Endpoint
app.post('/api/ai-demo', async (req, res) => {
  try {
    const { prompt } = req.body
    
    if (!prompt || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'Prompt ist erforderlich' })
    }
    
    if (prompt.length > 500) {
      return res.status(400).json({ error: 'Prompt zu lang (max 500 Zeichen)' })
    }
    
    // Rate Limiting
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
    const rateLimit = checkRateLimit(ip)
    
    if (!rateLimit.allowed) {
      return res.status(429).json({
        error: 'Demo-Limit erreicht (3 Prompts/Tag)',
        remaining: 0
      })
    }
    
    // Content Filter (Basic)
    const blockedWords = ['hack', 'exploit', 'password', 'angriff', 'spam']
    if (blockedWords.some(word => prompt.toLowerCase().includes(word))) {
      return res.status(400).json({ error: 'Unangemessener Inhalt' })
    }
    
    console.log(`[${new Date().toISOString()}] Demo Request from ${ip}: "${prompt.substring(0, 50)}..."`)
    
    // Ollama auf CrackMachine (192.168.178.98)
    const ollamaResponse = await fetch('http://192.168.178.98:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'qwen3:14b',
        prompt: prompt,
        stream: false,
        options: {
          temperature: 0.7,
          max_tokens: 500,
          top_p: 0.9
        }
      }),
      timeout: 30000 // 30 Sekunden Timeout
    })
    
    if (!ollamaResponse.ok) {
      throw new Error(`Ollama Error: ${ollamaResponse.status}`)
    }
    
    const data = await ollamaResponse.json()
    
    res.json({
      response: data.response,
      remaining: rateLimit.remaining,
      model: 'qwen3:14b',
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('AI Demo Error:', error)
    res.status(500).json({
      error: 'Verbindung zum KI-Modell fehlgeschlagen',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
})

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'ai-demo-api'
  })
})

// Rate Limit Status (Development Only)
if (process.env.NODE_ENV === 'development') {
  app.get('/api/rate-limits', (req, res) => {
    const limits = Array.from(rateLimits.entries()).map(([ip, data]) => ({
      ip: ip.substring(0, 10) + '...', // Privacy
      count: data.count,
      reset: new Date(data.reset).toISOString()
    }))
    res.json({ limits })
  })
}

app.listen(PORT, () => {
  console.log(`🚀 AI Demo API running on http://localhost:${PORT}`)
  console.log(`📡 Ollama: http://192.168.178.98:11434 (CrackMachine)`)
  console.log(`🔒 Rate Limit: 3 prompts/IP/day`)
})
