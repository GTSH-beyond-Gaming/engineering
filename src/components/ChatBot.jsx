import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

// ============================================
// KNOWLEDGE BASE — Alle Infos über GTSH Engineering
// ============================================
const knowledgeBase = [
  {
    keywords: ['preis', 'kosten', 'was kostet', 'teuer', 'günstig', 'budget', 'euro', 'geld'],
    response: `Unsere Preise im Überblick:

🌐 **Web-Engineering**
• Landing Page: ab €800
• Custom Website: ab €2.500
• Wartung: €200/Monat

⚡ **Business Automation**
• Prozess-Analyse: €800
• Automation: ab €1.500
• Email-Automation: €2.000

🤖 **KI & Beratung**
• KI-Schulung: ab €800
• Private AI Setup: ab €3.000
• Stunden-Beratung: €150/h

Alle Preise sind Festpreise — keine versteckten Kosten.`,
    links: [{ url: '/leistungen', text: 'Alle Leistungen & Preise →' }]
  },
  {
    keywords: ['paket', 'bundle', 'starter', 'growth', 'scale', 'komplett'],
    response: `Wir bieten drei Service-Pakete:

🚀 **Starter — €2.400**
Landing Page + KI-Basics Workshop + Basic Automation + 3 Monate Wartung gratis
→ Ideal für Gründer & Freelancer

📈 **Growth — €5.500** (Beliebt!)
Custom Website + KI-Workshop (8h) + AI Chatbot + 6 Monate Wartung gratis
→ Ideal für wachsende KMU

🏢 **Scale — €9.000**
Custom Website + Private AI Setup + Business Automation + 12 Monate Wartung gratis
→ Ideal für etablierte Unternehmen

Pakete sind günstiger als Einzelbuchung, weil wir Synergien nutzen können.`,
    links: [{ url: '/leistungen#pakete', text: 'Pakete vergleichen →' }]
  },
  {
    keywords: ['website', 'web', 'homepage', 'seite', 'react', 'landing', 'webseite', 'internetseite'],
    response: `Wir bauen moderne, schnelle Websites mit React & Tailwind CSS:

• **Landing Page** (ab €800, 1-2 Wochen) — Conversion-optimiert, A/B-Testing-ready
• **Custom Website** (ab €2.500, 4-6 Wochen) — Maßgeschneidert, SEO-optimiert, CMS möglich

Jede Website ist: Mobile-First, DSGVO-konform, Performance-optimiert (90+ Lighthouse Score).

Kein WordPress, kein Baukasten — handgeschriebener Code für maximale Performance.`,
    links: [{ url: '/leistungen#web', text: 'Web-Engineering Details →' }]
  },
  {
    keywords: ['ki', 'ai', 'künstliche intelligenz', 'schulung', 'workshop', 'lernen', 'kurs', 'training'],
    response: `Unsere KI-Schulungen machen Ihr Team fit für die Zukunft:

• **KI-Basics Workshop** (4h, €800) — Was kann KI? Was nicht? Hands-on mit echten Tools
• **Team-Workshop** (8h, €1.200) — Ganztag mit Ihrem Team, maßgeschneidert
• **Private AI Setup** (ab €3.000) — Lokale KI auf Ihrer eigenen Hardware

Alle Schulungen sind praxisnah — kein PowerPoint-Marathon, sondern echtes Arbeiten mit KI-Tools.`,
    links: [{ url: '/ki-schulungen', text: 'KI-Schulungen Details →' }]
  },
  {
    keywords: ['automation', 'automatisierung', 'automatisch', 'prozess', 'workflow', 'zeit sparen', 'effizienz'],
    response: `Business Automation spart Ihnen bis zu 80% manuelle Arbeit:

• **Prozess-Analyse** (€800) — Wo verschwenden Sie Zeit? Wir finden es raus
• **Automation** (ab €1.500) — PowerShell, Python, API-Integrationen
• **Email-Automation** (€2.000) — KI sortiert, priorisiert, antwortet
• **Custom Integrations** (ab €3.000) — CRM, ERP, alles verbunden

Die Prozess-Analyse wird bei Projekt-Buchung angerechnet — Sie zahlen also nur einmal.`,
    links: [{ url: '/leistungen#automation', text: 'Automation Details →' }]
  },
  {
    keywords: ['kontakt', 'email', 'telefon', 'anruf', 'termin', 'gespräch', 'erreichen', 'melden', 'whatsapp'],
    response: `So erreichen Sie uns:

📧 info@gtsh-engineering.de
📞 +49 176 84940127 (auch WhatsApp)

Das Erstgespräch ist **kostenlos** (ca. 15 Minuten). Kein Verkaufsgespräch — wir hören zu und sagen ehrlich, ob und wie wir helfen können.`,
    links: [{ url: '/contact', text: 'Kontaktformular öffnen →' }]
  },
  {
    keywords: ['ablauf', 'prozess', 'wie läuft', 'schritte', 'dauer', 'zeitplan', 'wie funktioniert', 'wie geht'],
    response: `So läuft ein Projekt bei uns — 5 klare Schritte:

1️⃣ **Kennenlernen** (kostenlos, 15 Min) — Sie erzählen, wir hören zu
2️⃣ **Klares Angebot** (innerhalb 48h) — Festpreis, schwarz auf weiß
3️⃣ **Umsetzung** (1-6 Wochen) — Regelmäßige Zwischenstände, Ihr Feedback zählt
4️⃣ **Abnahme & Go-Live** — Erst wenn Sie sagen: Passt! (50/50 Zahlung)
5️⃣ **Danach** (optional) — Wartung, Support — kein Abo-Zwang

Keine Überraschungen. Kein Kleingedrucktes. Keine Knebelverträge.`,
    links: [{ url: '/leistungen', text: 'Leistungen ansehen →' }]
  },
  {
    keywords: ['dsgvo', 'datenschutz', 'privat', 'lokal', 'cloud', 'sicher', 'sicherheit', 'daten'],
    response: `Datenschutz ist bei uns nicht optional, sondern Standard:

🔒 **100% DSGVO-konform** — Alle Websites, alle Lösungen
🏠 **Lokale KI** — Ihre Daten bleiben auf Ihrer Hardware
🚫 **Keine US-Cloud** — Kein Google Cloud, kein AWS, kein OpenAI
🇩🇪 **Made in Germany** — Hosting auf deutschen Servern

Besonders bei unseren Private AI Solutions: Die KI läuft komplett auf Ihrer eigenen GPU. Null Daten verlassen Ihr Netzwerk.`,
    links: [{ url: '/leistungen#private-ai', text: 'Private AI Details →' }]
  },
  {
    keywords: ['wer', 'team', 'firma', 'über', 'randy', 'randolf', 'gründer', 'erfahrung', 'hintergrund'],
    response: `GTSH Engineering — das bin ich: Randolf Hahn, Gründer & Entwickler aus Saalfeld, Thüringen.

Kein großes Büro, kein Overhead. Sie arbeiten direkt mit dem Entwickler. Das spart Ihnen 30-50% gegenüber klassischen Agenturen.

Schwerpunkte: Web-Engineering, KI-Integration, Business Automation. Alles aus einer Hand, von der Beratung bis zum fertigen Produkt.`,
    links: [{ url: '/about', text: 'Mehr über uns →' }]
  },
  {
    keywords: ['referenz', 'portfolio', 'projekt', 'beispiel', 'kunde', 'review', 'bewertung'],
    response: `Unser Showcase-Projekt: GTSH Beyond Gaming (gtsh-beyond-gaming.de)

⭐ 5,0 / 5,0 bei 12 Google Reviews
🚀 90+ Lighthouse Score
📱 Responsive Design
🔒 DSGVO-konform

Gebaut mit React + Tailwind CSS — die gleiche Technologie und Qualität, die auch Ihr Projekt bekommt.`,
    links: [{ url: '/portfolio', text: 'Portfolio ansehen →' }]
  },
  {
    keywords: ['wartung', 'support', 'pflege', 'update', 'nach', 'betreuung'],
    response: `Nach dem Launch lassen wir Sie nicht allein:

• **Wartung** (€200/Monat) — Updates, Security, Performance-Monitoring, Content-Updates (2h/Monat)
• **Jahresvertrag** (€2.000/Jahr) — 2 Monate gratis
• **Notfall-Support** — 24h Response-Time

Aber: Kein Zwang! Sie können Ihre Website auch selbst pflegen. Wir übergeben alles sauber mit Dokumentation.`,
    links: [{ url: '/leistungen#web', text: 'Support-Optionen →' }]
  },
  {
    keywords: ['design', 'grafik', 'logo', 'bild', 'visual', 'branding'],
    response: `Ja, wir bieten auch Grafikdesign:

• **Logo-Design** (€500) — Professionelles Logo für Ihr Business
• **KI-Bildgenerierung** — Einzigartige Visuals mit ComfyUI (lokal, nicht Midjourney)
• **Web-Design** — Ist bei jeder Website inklusive

Unser Ansatz: Modern, clean, funktional. Kein überladenes Design, sondern Klarheit die konvertiert.`,
    links: [{ url: '/grafikdesign', text: 'Grafikdesign ansehen →' }]
  },
]

// ============================================
// MATCHING ENGINE
// ============================================
function findBestMatch(input) {
  const lower = input.toLowerCase().trim()

  const scored = knowledgeBase.map(entry => {
    let score = 0
    for (const keyword of entry.keywords) {
      if (lower.includes(keyword)) {
        score += keyword.length
      }
    }
    return { ...entry, score }
  })

  scored.sort((a, b) => b.score - a.score)

  if (scored[0].score > 0) {
    return scored[0]
  }

  return null
}

const fallbackResponse = {
  response: `Das kann ich leider nicht genau beantworten — ich bin ein FAQ-Assistent und kenne mich am besten mit unseren Services, Preisen und Abläufen aus.

Für individuelle Fragen empfehle ich ein **kostenloses Erstgespräch** (15 Min). Randy berät Sie persönlich und ehrlich.`,
  links: [{ url: '/contact', text: 'Erstgespräch buchen →' }]
}

const greetingMessage = `Hallo! 👋 Ich bin der GTSH Assistent.

Ich kann Ihnen helfen mit:
• **Preise & Pakete** — Was kostet was?
• **Leistungen** — Web, KI, Automation
• **Ablauf** — Wie läuft ein Projekt?
• **Kontakt** — Wie erreichen Sie uns?

Fragen Sie einfach los, oder nutzen Sie die Buttons unten!`

// ============================================
// COMPONENT
// ============================================
export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: greetingMessage, links: [] }
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = (text) => {
    const userText = (text || input).trim()
    if (!userText) return

    setInput('')

    const userMsg = { role: 'user', content: userText, links: [] }
    const match = findBestMatch(userText)
    const answer = match || fallbackResponse

    const botMsg = {
      role: 'assistant',
      content: answer.response,
      links: answer.links || []
    }

    setMessages(prev => [...prev, userMsg, botMsg])
  }

  const handleLinkClick = (url) => {
    setIsOpen(false)
    navigate(url)
  }

  const quickActions = [
    { label: '💰 Preise', query: 'Was kosten eure Services?' },
    { label: '📦 Pakete', query: 'Welche Pakete gibt es?' },
    { label: '🔄 Ablauf', query: 'Wie läuft ein Projekt ab?' },
    { label: '📞 Kontakt', query: 'Wie kann ich euch erreichen?' },
  ]

  const renderText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/)
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>
      }
      return <span key={i}>{part}</span>
    })
  }

  return (
    <>
      {/* Chat Toggle Button — positioned ABOVE WhatsApp button */}
      <motion.button
        className="fixed bottom-[5.5rem] right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-5 py-3 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 group"
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Chat schließen' : 'Chat öffnen'}
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        <span className="hidden sm:inline font-semibold text-sm">
          {isOpen ? 'Schließen' : 'Fragen?'}
        </span>

        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary" />
          </span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-[8.5rem] right-6 z-50 w-80 sm:w-96 h-[30rem] bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 flex items-center justify-between flex-shrink-0">
              <div>
                <h3 className="font-semibold text-sm">GTSH Assistent</h3>
                <p className="text-xs opacity-80">Schnelle Antworten zu Services & Preisen</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Chat schließen"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary text-white rounded-br-sm'
                      : 'bg-white/10 text-white/90 rounded-bl-sm'
                  }`}>
                    <span className="whitespace-pre-line">{renderText(msg.content)}</span>

                    {msg.links && msg.links.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {msg.links.map((link, j) => (
                          <button
                            key={j}
                            onClick={() => handleLinkClick(link.url)}
                            className="block text-xs text-secondary hover:text-secondary/80 font-medium underline underline-offset-2 transition-colors"
                          >
                            {link.text}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-3 pt-2 flex gap-1.5 flex-wrap flex-shrink-0">
              {quickActions.map((action) => (
                <button
                  key={action.label}
                  onClick={() => handleSend(action.query)}
                  className="text-xs px-2.5 py-1.5 rounded-full bg-white/5 text-white/70 hover:bg-primary/20 hover:text-white transition-colors border border-white/10"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Frage eingeben..."
                className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder-white/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim()}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary/80 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Senden"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
