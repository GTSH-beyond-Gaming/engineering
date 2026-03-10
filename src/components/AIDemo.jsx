import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Cpu, Zap, Shield, Loader2 } from 'lucide-react'

/**
 * AIDemo - Live 14b KI-Modell Demo
 * 
 * Verbindet sich mit lokalem Ollama (CrackMachine, qwen3:14b)
 * Rate-Limited: 3 Prompts pro IP/Tag
 */

const DEMO_EXAMPLES = [
  "Schreibe einen professionellen Geschäftsbrief an einen Kunden",
  "Erkläre mir KI in 3 einfachen Sätzen",
  "Was sind die Vorteile von lokaler KI?",
  "Wie automatisiere ich E-Mail-Antworten?"
]

export default function AIDemo() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '👋 Hallo! Ich bin ein 14b-Sprachmodell, das gerade LIVE auf unserer Hardware in Saalfeld läuft. Stell mir eine Frage!'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [remainingPrompts, setRemainingPrompts] = useState(3)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!input.trim() || isLoading) return
    
    if (remainingPrompts <= 0) {
      setError('Demo-Limit erreicht (3 Prompts/Tag). Für mehr → Schulung buchen!')
      return
    }

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)
    setError(null)

    try {
      // API-Endpoint für Ollama-Proxy
      const response = await fetch('/api/ai-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMessage })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Fehler bei der Anfrage')
      }

      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.response
      }])
      
      setRemainingPrompts(data.remaining || 0)

    } catch (err) {
      console.error('AI Demo Error:', err)
      setError(err.message || 'Verbindung fehlgeschlagen. Bitte später versuchen.')
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '⚠️ Entschuldigung, da ist etwas schiefgelaufen. Bitte versuche es gleich nochmal.'
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleExampleClick = (example) => {
    setInput(example)
  }

  return (
    <div className="ai-demo-container bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Cpu className="w-8 h-8 text-[#00ffc8]" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">14b-Modell Live-Demo</h3>
            <p className="text-sm text-gray-400 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Läuft auf CrackMachine (RTX 5070, 12GB)
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400">Verbleibend:</div>
          <div className="text-xl font-bold text-[#00ffc8]">{remainingPrompts}/3</div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-blue-900/30 border border-blue-700/50 rounded-lg p-4 mb-4 flex items-start gap-3">
        <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-200">
          <strong>100% lokal:</strong> Diese KI läuft auf unserer Hardware in Saalfeld.
          Keine Cloud. Ihre Prompts werden nicht gespeichert.
        </div>
      </div>

      {/* Example Prompts */}
      {messages.length === 1 && (
        <div className="mb-4">
          <p className="text-sm text-gray-400 mb-2">💡 Beispiel-Fragen:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {DEMO_EXAMPLES.map((example, idx) => (
              <button
                key={idx}
                onClick={() => handleExampleClick(example)}
                className="text-left text-sm p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors border border-gray-700"
              >
                "{example}"
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="messages-container h-96 overflow-y-auto mb-4 space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-[#00ffc8] text-gray-900'
                    : 'bg-gray-800 text-gray-100 border border-gray-700'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-800 p-4 rounded-2xl border border-gray-700">
              <Loader2 className="w-5 h-5 text-[#00ffc8] animate-spin" />
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={remainingPrompts > 0 ? "Deine Frage..." : "Limit erreicht"}
          disabled={isLoading || remainingPrompts <= 0}
          className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00ffc8] disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim() || remainingPrompts <= 0}
          className="bg-[#00ffc8] hover:bg-[#00e6b3] disabled:bg-gray-700 disabled:cursor-not-allowed text-gray-900 font-bold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Send className="w-5 h-5" />
          )}
        </button>
      </form>

      {/* CTA */}
      {remainingPrompts === 0 && (
        <div className="mt-4 p-4 bg-gradient-to-r from-[#00ffc8]/20 to-blue-500/20 border border-[#00ffc8]/30 rounded-lg text-center">
          <p className="text-white font-bold mb-2">🎓 Mehr als 3 Fragen?</p>
          <p className="text-gray-300 text-sm mb-3">
            In unseren KI-Schulungen lernen Sie, wie Sie solche Modelle selbst einsetzen
          </p>
          <a
            href="/ki-schulungen"
            className="inline-block bg-[#00ffc8] hover:bg-[#00e6b3] text-gray-900 font-bold px-6 py-2 rounded-lg transition-colors"
          >
            Schulungen ansehen
          </a>
        </div>
      )}
    </div>
  )
}
