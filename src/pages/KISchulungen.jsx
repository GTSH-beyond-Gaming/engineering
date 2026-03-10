import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Brain, Users, Target, ShieldCheck, TrendingUp, CheckCircle, MessageSquare, ArrowRight, Clock, ChevronDown, Briefcase, UserCheck, Lightbulb, Wrench, FileText, Mail, Check, X } from 'lucide-react'
import FAQ from '../components/FAQ'
import AIDemo from '../components/AIDemo'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

// Workshop Comparison Data
const workshopComparison = [
  { label: 'Dauer', basics: '4 Stunden', integration: '8 Stunden', individual: '2 Tage (16h)' },
  { label: 'Teilnehmer', basics: 'bis 10', integration: '5-15', individual: 'flexibel' },
  { label: 'Voraussetzungen', basics: 'Keine', integration: 'Basics', individual: 'Keine' },
  { label: 'ChatGPT & Claude Basics', basics: true, integration: true, individual: true },
  { label: 'Prompting-Strategien', basics: true, integration: true, individual: true },
  { label: 'Workflow-Integration', basics: false, integration: true, individual: true },
  { label: 'Branchen-Anpassung', basics: false, integration: true, individual: true },
  { label: 'Lokale KI-Modelle', basics: false, integration: false, individual: true },
  { label: 'KI-Strategie', basics: false, integration: false, individual: true },
  { label: 'Follow-Up-Call', basics: false, integration: '1x', individual: '3x' },
  { label: 'Handout & Checklisten', basics: true, integration: true, individual: true },
  { label: 'Zertifikat', basics: true, integration: true, individual: true },
]

export default function KISchulungen() {
  const [showComparison, setShowComparison] = useState(false)
  
  const faqItems = [
    {
      question: 'Welche Voraussetzungen brauchen die Teilnehmer?',
      answer: 'Keine! Unsere Workshops sind so aufgebaut, dass auch komplette KI-Einsteiger sofort mitarbeiten können. Grundlegende PC-Kenntnisse reichen aus. Für den KI-Integration-Workshop empfehlen wir Grundkenntnisse im Umgang mit digitalen Tools.'
    },
    {
      question: 'Sind die Schulungen auch remote möglich?',
      answer: 'Ja, alle Workshops sind auch remote via Zoom oder Microsoft Teams durchführbar. Wir empfehlen jedoch den Vor-Ort-Workshop in Thüringen, da die Praxis-Übungen und der direkte Austausch persönlich am effektivsten sind.'
    },
    {
      question: 'Wie viele Teilnehmer können an einem Workshop teilnehmen?',
      answer: 'Der KI-Basics Workshop ist für bis zu 10 Teilnehmer ausgelegt. Beim KI-Integration Workshop empfehlen wir 5-15 Teilnehmer für optimale Interaktion. Das individuelle Training kann flexibel auf Ihre Teamgröße angepasst werden. Bei größeren Gruppen erstellen wir gerne ein individuelles Angebot.'
    },
    {
      question: 'Was brauchen wir für den Workshop?',
      answer: 'Jeder Teilnehmer sollte einen eigenen Laptop mitbringen. Wir stellen alle nötigen Accounts, Zugänge und Materialien bereit. Für Vor-Ort-Workshops benötigen wir einen Raum mit Beamer/Bildschirm und WLAN. Alles weitere besprechen wir im Vorgespräch.'
    },
    {
      question: 'Gibt es ein Zertifikat nach der Schulung?',
      answer: 'Ja, jeder Teilnehmer erhält ein Teilnahmezertifikat von GTSH Engineering mit den behandelten Themen und dem Umfang der Schulung. Das Zertifikat eignet sich auch als Nachweis für Weiterbildungsmaßnahmen.'
    }
  ]

  // FAQ Schema JSON-LD
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(schema)
    script.id = 'faq-schema-ki-schulungen'
    document.head.appendChild(script)
    return () => {
      const existing = document.getElementById('faq-schema-ki-schulungen')
      if (existing) existing.remove()
    }
  }, [])

  return (
    <div>
      <title>KI-Schulungen - Workshops & Training für Teams | GTSH Engineering</title>
      <meta name="description" content="Praxisnahe KI-Schulungen für Teams in Thüringen. ChatGPT, Claude, Automation & KI-Strategie. Workshops ab €800. Sofort umsetzbar, DSGVO-konform." />
      <link rel="canonical" href="https://gtsh-engineering.de/ki-schulungen" />

      {/* Hero Section */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 text-white text-sm px-4 py-2 rounded-full font-semibold mb-6">
              Praxisnahe KI-Workshops in Thüringen
            </span>
            <h1 className="mb-6">KI-Schulungen für Ihr Team</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Praxisnahe Workshops – sofort umsetzbar, lokal in Thüringen
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Live Demo Section */}
      <section className="section bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">🤖 Sehen Sie KI live in Aktion</h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto mb-8">
                Diese KI läuft <strong>JETZT</strong> auf unserer Hardware in Saalfeld (RTX 5070, 12GB VRAM).
                Keine Cloud. Ihre Prompts werden nicht gespeichert. Probieren Sie es aus!
              </p>
            </motion.div>
            
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <AIDemo />
            </motion.div>

            <motion.div
              className="mt-12 text-center"
              {...fadeInUp}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-400 text-sm mb-4">
                💡 In unseren Schulungen lernen Sie, wie Sie solche Modelle selbst einsetzen können
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="#workshops"
                  className="bg-primary hover:bg-primary-light text-gray-900 font-bold px-8 py-3 rounded-xl transition-all transform hover:scale-105"
                >
                  Zu den Workshops
                </a>
                <a
                  href="/contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3 rounded-xl transition-all border border-white/20"
                >
                  Erstgespräch buchen
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Cards */}
      <section className="section" id="workshops">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="glass-panel-light text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">Unsere KI-Workshops</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Drei Formate, ein Ziel: Ihr Team wird KI-ready. Wählen Sie den Workshop, der am besten zu Ihnen passt.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* KI-Basics Workshop */}
              <motion.div
                className="card flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-white/60 font-medium">Halbtags, 4h</span>
                </div>
                <h3 className="mb-3 text-white">KI-Basics Workshop</h3>
                <p className="text-white/90 mb-4">
                  Der perfekte Einstieg in die Welt der KI-Tools für Ihren Arbeitsalltag.
                </p>
                <ul className="space-y-2 text-sm text-white/90 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Bis zu 10 Teilnehmer
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    ChatGPT, Claude, Prompting-Strategien
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Praxis-Übungen am eigenen Laptop
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Handout & Checklisten
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="text-sm text-white/60 mb-2">
                    Ideal für: Einsteiger & Teams ohne KI-Erfahrung
                  </p>
                  <p className="text-3xl font-bold text-primary mb-4">€800</p>
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Workshop anfragen
                  </Link>
                </div>
              </motion.div>

              {/* KI-Integration für Teams - BELIEBT */}
              <motion.div
                className="card flex flex-col border-2 border-primary/50 relative bg-gradient-to-br from-primary/5 to-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="absolute -top-3 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">
                  BELIEBT
                </span>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-white/60 font-medium">Ganztags, 8h</span>
                </div>
                <h3 className="mb-3 text-white">KI-Integration für Teams</h3>
                <p className="text-white/90 mb-4">
                  KI-Tools in Ihre bestehenden Workflows integrieren – für messbare Produktivitätssteigerung.
                </p>
                <ul className="space-y-2 text-sm text-white/90 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Workflow-Analyse Ihres Teams
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    KI-Tools in bestehende Prozesse integrieren
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Textgenerierung, Bildbearbeitung, Automation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Tool-Empfehlungen & Setup-Hilfe
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Follow-Up-Call (1h) inklusive
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="text-sm text-white/60 mb-2">
                    Ideal für: Teams die KI produktiv nutzen wollen
                  </p>
                  <p className="text-3xl font-bold text-primary mb-4">€1.500</p>
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Workshop anfragen
                  </Link>
                </div>
              </motion.div>

              {/* Individuelles KI-Training */}
              <motion.div
                className="card flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-white/60 font-medium">2 Tage, 16h</span>
                </div>
                <h3 className="mb-3 text-white">Individuelles KI-Training</h3>
                <p className="text-white/90 mb-4">
                  Maßgeschneidertes Intensiv-Training für Ihre spezifischen Anforderungen und Ziele.
                </p>
                <ul className="space-y-2 text-sm text-white/90 mb-6 flex-grow">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Komplett individuell zugeschnitten
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    KI-Strategie für Ihr Unternehmen
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    Lokale KI-Modelle & Custom Solutions
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    3 Follow-Up-Calls inklusive
                  </li>
                </ul>
                <div className="mt-auto">
                  <p className="text-sm text-white/60 mb-2">
                    Ideal für: Unternehmen mit spezifischen KI-Zielen
                  </p>
                  <p className="text-3xl font-bold text-primary mb-4">€2.500</p>
                  <Link to="/contact" className="btn-primary w-full text-center">
                    Training anfragen
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop-Vergleichstabelle */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-8"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">Workshop-Vergleich</h2>
              <p className="text-lg text-white/90 mb-6">
                Alle Workshops im direkten Vergleich.
              </p>
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                {showComparison ? 'Vergleich ausblenden' : 'Vergleichstabelle anzeigen'}
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`} />
              </button>
            </motion.div>

            {showComparison && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4 }}
                className="overflow-x-auto"
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-4 px-4 text-white/90 font-semibold">Feature</th>
                      <th className="text-center py-4 px-4 font-bold text-white">
                        <div>KI-Basics</div>
                        <div className="text-primary">€800</div>
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-primary">
                        <div>Integration</div>
                        <div className="text-primary">€1.500</div>
                      </th>
                      <th className="text-center py-4 px-4 font-bold text-white">
                        <div>Individuell</div>
                        <div className="text-primary">€2.500</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {workshopComparison.map((row, i) => (
                      <tr key={row.label} className={`border-b border-gray-100 dark:border-gray-700`}>
                        <td className="py-3 px-4 text-white/90 font-medium">{row.label}</td>
                        <td className="py-3 px-4 text-center">
                          {row.basics === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : 
                           row.basics === false ? <X className="w-5 h-5 text-gray-300 mx-auto" /> :
                           <span className="text-sm font-medium text-white/90">{row.basics}</span>}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.integration === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : 
                           row.integration === false ? <X className="w-5 h-5 text-gray-300 mx-auto" /> :
                           <span className="text-sm font-medium text-white/90">{row.integration}</span>}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {row.individual === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : 
                           row.individual === false ? <X className="w-5 h-5 text-gray-300 mx-auto" /> :
                           <span className="text-sm font-medium text-white/90">{row.individual}</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Beispiel-Agenda: KI-Integration Workshop */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-panel-light text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">Beispiel-Agenda: KI-Integration Workshop</h2>
              <p className="text-lg text-white/90">
                So sieht ein typischer Workshop-Tag aus (8h Ganztags).
              </p>
            </motion.div>

            <motion.div
              className="card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-4">
                {[
                  { time: '09:00 – 09:30', title: 'Einführung & Vorstellung', desc: 'Kennenlernen, Erwartungen, aktuelle KI-Nutzung im Team' },
                  { time: '09:30 – 10:30', title: 'KI-Grundlagen & Tool-Überblick', desc: 'ChatGPT, Claude, Gemini – Stärken, Schwächen, Anwendungsfälle' },
                  { time: '10:30 – 10:45', title: 'Kaffeepause', desc: '' },
                  { time: '10:45 – 12:00', title: 'Hands-on: Prompting-Strategien', desc: 'Die 5 Prompting-Frameworks für perfekte Ergebnisse. Übungen am eigenen Laptop.' },
                  { time: '12:00 – 13:00', title: 'Mittagspause', desc: '' },
                  { time: '13:00 – 14:30', title: 'Workflow-Integration I', desc: 'E-Mails automatisieren, Texte generieren, Dokumente zusammenfassen' },
                  { time: '14:30 – 14:45', title: 'Kaffeepause', desc: '' },
                  { time: '14:45 – 16:00', title: 'Workflow-Integration II', desc: 'Branchenspezifische Use-Cases, KI in Ihren Alltag integrieren' },
                  { time: '16:00 – 17:00', title: 'Praxis-Projekt & Q&A', desc: 'Mini-Projekt: Eine echte Aufgabe aus Ihrem Alltag mit KI lösen' },
                ].map((item, index) => (
                  <div key={index} className={`flex gap-4 ${item.desc === '' ? 'opacity-60' : ''}`}>
                    <div className="w-32 flex-shrink-0">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm font-mono text-white/80">{item.time}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="font-semibold text-white">{item.title}</p>
                      {item.desc && <p className="text-sm text-white/60">{item.desc}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Branchenspezifische Beispiele */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">KI für Ihre Branche</h2>
              <p className="text-lg text-white/90">
                Wir passen jeden Workshop auf Ihre Branche an. Hier einige Beispiele.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg mb-3 text-white">Handwerk & Bau</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Angebote mit KI in 5 Minuten erstellen</li>
                  <li>• Bautagebücher automatisch zusammenfassen</li>
                  <li>• Kundenanfragen per Spracheingabe beantworten</li>
                  <li>• Materialbestellungen automatisieren</li>
                </ul>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg mb-3 text-white">Büro & Verwaltung</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• E-Mails automatisch vorformulieren</li>
                  <li>• Protokolle aus Meetings generieren</li>
                  <li>• Berichte und Präsentationen erstellen</li>
                  <li>• Daten analysieren und visualisieren</li>
                </ul>
              </motion.div>

              <motion.div
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg mb-3 text-white">Dienstleistung & Beratung</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Kundenberichte automatisieren</li>
                  <li>• Recherchen in Minuten statt Stunden</li>
                  <li>• Vertragsentwürfe erstellen lassen</li>
                  <li>• Kundenkommunikation personalisieren</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen ist das? - 3 Personas */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="glass-panel-light text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">Für wen ist das?</h2>
              <p className="text-lg text-white/90">
                Unsere Workshops sind für alle, die KI produktiv nutzen wollen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-white">Geschäftsführer</h3>
                <p className="text-white/80 mb-4">
                  Sie wollen verstehen, wie KI Ihr Unternehmen voranbringt — ohne selbst Experte werden zu müssen.
                </p>
                <p className="text-sm text-primary font-semibold">
                  → KI-Basics oder Individuelles Training
                </p>
              </motion.div>

              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-white">Teamleiter</h3>
                <p className="text-white/80 mb-4">
                  Sie wollen Ihr Team effizienter machen und KI in bestehende Workflows integrieren.
                </p>
                <p className="text-sm text-primary font-semibold">
                  → KI-Integration für Teams
                </p>
              </motion.div>

              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-white">Einzelunternehmer</h3>
                <p className="text-white/80 mb-4">
                  Sie arbeiten allein und wollen mit KI-Tools Zeit sparen und mehr schaffen.
                </p>
                <p className="text-sm text-primary font-semibold">
                  → KI-Basics Workshop
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Fördermöglichkeiten */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="card bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl mb-3 text-white">Fördermöglichkeiten</h3>
              <p className="text-white/80 mb-4">
                KI-Schulungen können unter bestimmten Voraussetzungen gefördert werden. 
                Mögliche Programme: <strong>BAFA-Förderung</strong>, <strong>Bildungsprämie</strong>, 
                <strong>Weiterbildungsförderung</strong> der Länder.
              </p>
              <p className="text-sm text-white/60">
                Wir beraten Sie gerne zu Ihren individuellen Fördermöglichkeiten. 
                Sprechen Sie uns einfach im Vorgespräch darauf an.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warum KI-Schulungen? */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="glass-panel-light text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">Warum KI-Schulungen?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                KI verändert die Arbeitswelt – wer jetzt handelt, sichert sich entscheidende Vorteile.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2 text-white">Messbarer ROI</h3>
                <p className="text-sm text-white/60">
                  Teams sparen durchschnittlich 5-10 Stunden pro Woche durch effektiven KI-Einsatz. Die Investition zahlt sich innerhalb weniger Wochen aus.
                </p>
              </motion.div>

              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2 text-white">Wettbewerbsvorteil</h3>
                <p className="text-sm text-white/60">
                  Unternehmen die KI nutzen, arbeiten schneller und effizienter. Sichern Sie sich den Vorsprung gegenüber Ihren Mitbewerbern.
                </p>
              </motion.div>

              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2 text-white">DSGVO-konform</h3>
                <p className="text-sm text-white/60">
                  Wir zeigen, welche KI-Tools DSGVO-konform einsetzbar sind und wie Sie Datenschutz und Produktivität vereinen.
                </p>
              </motion.div>

              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-primary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg mb-2 text-white">100% Praxisnah</h3>
                <p className="text-sm text-white/60">
                  Keine Theorie-Vorträge. Ihre Teilnehmer arbeiten am eigenen Laptop mit echten Aufgaben aus ihrem Arbeitsalltag.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* So läuft eine Schulung ab */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="glass-panel-light text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">So läuft eine Schulung ab</h2>
              <p className="text-lg text-white/90">
                Von der Anfrage bis zum Follow-Up – ein klarer, strukturierter Prozess.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Vorgespräch',
                  description: 'Kostenloser Call (30 Min.) – Wir lernen Ihr Team, Ihre Tools und Ihre Ziele kennen.',
                  icon: MessageSquare
                },
                {
                  step: '02',
                  title: 'Anpassung',
                  description: 'Wir passen den Workshop-Inhalt individuell auf Ihre Branche und Anforderungen an.',
                  icon: Target
                },
                {
                  step: '03',
                  title: 'Workshop',
                  description: 'Praxisnaher Workshop vor Ort oder remote. Hands-on Übungen, keine langweilige Theorie.',
                  icon: Users
                },
                {
                  step: '04',
                  title: 'Follow-Up',
                  description: 'Nach dem Workshop: Follow-Up-Call, Materialien und Support bei der Umsetzung.',
                  icon: CheckCircle
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Connector Line */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                  )}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <span className="text-xs text-primary font-bold uppercase tracking-wider">Schritt {item.step}</span>
                    <h3 className="text-lg mt-2 mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-white/60">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Badge */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="card bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/30 flex flex-col md:flex-row items-center gap-6 p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/cdlp-certificate.jpg" 
                alt="CDLP Certificate"
                className="w-32 h-auto rounded-lg border border-primary/30 shadow-lg"
                loading="lazy"
              />
              <div className="text-center md:text-left">
                <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-1">Zertifizierter Trainer</p>
                <h3 className="text-xl font-bold text-white mb-2">Certified Digital Learning Professional (CDLP)</h3>
                <p className="text-white/70 text-sm mb-2">
                  Spezialisierung: <span className="text-white font-medium">Instructional Design</span>
                </p>
                <p className="text-white/60 text-xs">
                  Digital Learning Institute • Akkreditiert von Glasgow Caledonian University
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              {...fadeInUp}
            >
              <h2 className="mb-4 text-white">Häufige Fragen zu KI-Schulungen</h2>
              <p className="text-white/60">
                Alles was Sie vor der Buchung wissen sollten
              </p>
            </motion.div>
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">KI-Workshop anfragen</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Kostenloses Vorgespräch vereinbaren und erfahren, welcher Workshop am besten zu Ihrem Team passt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary text-lg inline-flex items-center justify-center gap-2">
                Jetzt Workshop anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/leistungen" className="btn-primary bg-white/10 border-2 border-white/30 hover:bg-white/20 text-lg">
                Alle Leistungen ansehen
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



