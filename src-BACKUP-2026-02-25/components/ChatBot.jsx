import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// API Configuration - Ollama Backend
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || 'http://localhost:3334/api/chat';

// Fallback Knowledge Base (wenn API nicht verfügbar)
const fallbackResponses = {
  preis: 'Unsere Preise: Web ab €800, Automation ab €1.500, KI-Schulungen ab €800. Für Details empfehle ich ein kostenloses Erstgespräch!',
  kontakt: 'Sie erreichen uns per Email (randolf-hahn@gtsh-beyond-gaming.de), Telefon (+49 176 84940127) oder WhatsApp!',
  default: 'Für individuelle Fragen empfehle ich ein kostenloses Erstgespräch. Kontaktieren Sie uns!'
};

function getFallbackResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes('preis') || lower.includes('kosten')) return fallbackResponses.preis;
  if (lower.includes('kontakt') || lower.includes('email')) return fallbackResponses.kontakt;
  return fallbackResponses.default;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hallo! 👋 Ich bin der GTSH Assistent, powered by KI. Fragen Sie mich zu:\n\n• Services & Preise\n• Pakete & Rabatte\n• KI-Schulungen\n• Kontakt & Termine\n\nWie kann ich Ihnen helfen?'
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    
    // Add user message immediately
    const newMessages = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setIsLoading(true)

    try {
      // Call Ollama API
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.filter(m => m.role !== 'system').map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.content 
      }]);

    } catch (error) {
      console.error('Chat API error:', error);
      // Fallback to local responses
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: getFallbackResponse(userMessage)
      }]);
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuickAction = async (label) => {
    if (isLoading) return;
    setInput(label);
    
    const newMessages = [...messages, { role: 'user', content: label }]
    setMessages(newMessages)
    setIsLoading(true)
    setInput('')

    try {
      const response = await fetch(CHAT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.content || getFallbackResponse(label)
      }]);

    } catch {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: getFallbackResponse(label)
      }]);
    } finally {
      setIsLoading(false)
    }
  }

  const handleLinkClick = (url) => {
    setIsOpen(false)
    navigate(url)
  }

  // Parse response for links (e.g., "→ /contact" or "→ /pakete")
  const parseLinks = (content) => {
    const linkMatch = content.match(/→\s*(\/\w+)/);
    if (linkMatch) {
      return { url: linkMatch[1], text: 'Mehr erfahren →' };
    }
    return null;
  }

  return (
    <>
      {/* Chat Button - positioned ABOVE WhatsApp button */}
      <motion.button
        className="fixed bottom-[5.5rem] right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] text-white px-6 py-3 rounded-full shadow-glow-lg hover:shadow-[0_0_50px_rgba(20,184,166,0.5)] transition-all duration-300 hover:scale-105 group"
        style={{ animation: 'gradient-x 3s ease infinite', backgroundSize: '200% 200%' }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat öffnen"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        <span className="hidden sm:inline font-semibold">{isOpen ? 'Schließen' : 'KI-Assistent'}</span>

        {/* Pulsing Glow Indicator */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-[8.5rem] right-6 z-50 w-80 sm:w-96 h-[28rem] bg-gray-900 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-sm">GTSH KI-Assistent</h3>
                <p className="text-xs opacity-80">Powered by lokaler KI 🔒</p>
              </div>
              <span className="text-2xl">🦞</span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-md'
                      : 'bg-gray-800 text-gray-100 rounded-bl-md'
                  }`}>
                    <span className="whitespace-pre-line">{msg.content}</span>
                    {msg.role === 'assistant' && parseLinks(msg.content) && (
                      <button
                        onClick={() => handleLinkClick(parseLinks(msg.content).url)}
                        className="block mt-2 text-secondary hover:text-secondary-dark font-medium text-xs underline underline-offset-2"
                      >
                        {parseLinks(msg.content).text}
                      </button>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-100 p-3 rounded-2xl rounded-bl-md">
                    <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-3 pt-2 flex gap-1.5 flex-wrap">
              {['Preise', 'Pakete', 'KI-Schulungen', 'Kontakt'].map((label) => (
                <button
                  key={label}
                  onClick={() => handleQuickAction(label)}
                  disabled={isLoading}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-800 text-gray-300 hover:bg-primary hover:text-white transition-colors border border-gray-700 disabled:opacity-50"
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                placeholder={isLoading ? 'Denke nach...' : 'Frage eingeben...'}
                disabled={isLoading}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-full text-white text-sm focus:outline-none focus:border-primary disabled:opacity-50"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
