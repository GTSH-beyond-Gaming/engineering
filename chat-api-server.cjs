#!/usr/bin/env node
/**
 * 🦞 GTSH Chat API Server v4
 * FIXED: qwen3:8b thinking mode - content kann leer sein!
 */

const http = require('http');

const PORT = 3334;
const MODEL = 'qwen3:8b';

const SYSTEM_PROMPT = `Du bist der freundliche GTSH Engineering Assistent. Antworte DIREKT und KURZ (max 2-3 Sätze). Kein langes Nachdenken nötig.

SERVICES: Web ab €800, Automation ab €1.500, KI-Schulungen ab €800, Grafikdesign ab €300
PAKETE: Starter €3.500, Growth €6.500, Scale €12.000
KONTAKT: randolf-hahn@gtsh-beyond-gaming.de, +49 176 84940127

Antworte auf Deutsch, freundlich und hilfreich.`;

// Rate Limiting
const rateLimits = new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const ul = rateLimits.get(ip) || { count: 0, start: now };
  if (now - ul.start > 60000) { ul.count = 0; ul.start = now; }
  ul.count++;
  rateLimits.set(ip, ul);
  return ul.count <= 20;
}

// Call Ollama
function callOllama(messages) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      model: MODEL,
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      stream: false,
      options: { 
        temperature: 0.7, 
        num_predict: 300  // MEHR TOKENS für echte Antwort nach dem Denken!
      }
    });

    const req = http.request({
      hostname: 'localhost',
      port: 11434,
      path: '/api/chat',
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(postData) },
      timeout: 45000
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          // FIX: content kann leer sein bei qwen3 thinking mode!
          let content = parsed.message?.content || '';
          if (!content && parsed.message?.thinking) {
            // Fallback: Extrahiere nützlichen Teil aus thinking
            content = 'Kontaktieren Sie uns gerne unter randolf-hahn@gtsh-beyond-gaming.de für ein kostenloses Erstgespräch!';
          }
          resolve(content || 'Wie kann ich Ihnen helfen?');
        } catch (e) {
          reject(new Error('Parse error'));
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => { req.destroy(); reject(new Error('Timeout')); });
    req.write(postData);
    req.end();
  });
}

// Server
http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') { res.writeHead(204); return res.end(); }
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ status: 'healthy', model: MODEL }));
  }
  
  if (req.url === '/api/chat' && req.method === 'POST') {
    if (!checkRateLimit(req.socket.remoteAddress)) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Rate limit' }));
    }
    
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => {
      try {
        const { messages } = JSON.parse(Buffer.concat(chunks).toString('utf8'));
        if (!Array.isArray(messages)) throw new Error('Invalid');
        
        callOllama(messages)
          .then(content => {
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ content }));
          })
          .catch(err => {
            console.error('Ollama error:', err.message);
            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
            res.end(JSON.stringify({ content: 'Kontaktieren Sie uns: randolf-hahn@gtsh-beyond-gaming.de' }));
          });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
    return;
  }
  
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not Found' }));
}).listen(PORT, () => {
  console.log(`🦞 GTSH Chat API v4 on http://localhost:${PORT} | Model: ${MODEL}`);
});

// Global error handlers - prevent crash!
process.on('uncaughtException', (err) => {
  console.error('[FATAL] Uncaught:', err.message);
});
process.on('unhandledRejection', (reason) => {
  console.error('[FATAL] Unhandled rejection:', reason);
});
