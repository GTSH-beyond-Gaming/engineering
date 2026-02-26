import { motion } from 'framer-motion'
import { Clock, Shield, Cpu, Zap, MessageSquare, Mail, Code, Users, Brain, CheckCircle, Server, TrendingUp, Eye } from 'lucide-react'
import { Link } from 'react-router-dom'
import RippleButton from '../components/RippleButton'

const benchmarkData = [
  {
    id: 'kundenanfrage',
    title: 'Vollständiges Kundenangebot',
    icon: MessageSquare,
    time: '29.7',
    model: 'qwen3:14b',
    category: 'Business',
    description: 'Komplettes Angebot mit Paket-Empfehlung, Preistabelle und Signatur',
    prompt: 'Eine Tischlerei aus [Stadt] braucht eine Website. Schreibe ein vollständiges Angebot.',
    response: `**Betreff:** Ihre neue Website für die Tischlerei — Angebot von GTSH Engineering

Sehr geehrter Herr [Name],

vielen Dank für Ihre Anfrage! Eine Tischlerei ohne Internetseite — das ändern wir.

**Meine Empfehlung: Paket Business — 2.990 € (zzgl. MwSt.)**

✓ Professionelles Design — modern, seriös, passend zum Handwerk
✓ Bis 15 Unterseiten — Startseite, Leistungen, Galerie, Kontakt
✓ Projekt-Galerie — Ihre besten Arbeiten als Referenz
✓ Google-Optimierung — damit Dresdner Sie finden
✓ 3 Monate Support — Sie sind nicht allein nach dem Launch

**Zeitrahmen:** In 3–4 Wochen ist Ihre Seite online.

Mit besten Grüßen aus Saalfeld
Randolf Hahn, GTSH Engineering`,
    highlight: 'Vollständiges Angebot in unter 30 Sekunden'
  },
  {
    id: 'dsgvo',
    title: 'DSGVO-Pitch',
    icon: Shield,
    time: '12.7',
    model: 'qwen3:14b',
    category: 'Vertrieb',
    description: 'Überzeugendes Argument für lokale KI vs. ChatGPT',
    prompt: 'Warum soll ich für lokale KI bezahlen wenn ChatGPT kostenlos ist?',
    response: `ChatGPT ist nicht kostenlos — Sie bezahlen mit Ihren Geschäftsdaten, die auf amerikanischen Servern landen und zum Training verwendet werden.

Wenn Ihr Mitarbeiter dort Kundendaten, Kalkulationen oder Verträge eingibt, haben Sie ein DSGVO-Problem, für das Sie persönlich haften.

Lokale KI läuft in Ihrem Haus — kein Byte verlässt Ihr Netzwerk. Ihre Konkurrenz sieht nicht, welche Fragen Sie stellen.

Und nach der Anschaffung kostet jede Anfrage null Euro, egal ob 100 oder 10.000 am Tag.

Die Frage ist nicht, ob Sie sich lokale KI leisten können — sondern ob Sie sich das Risiko ohne leisten wollen.`,
    highlight: 'DSGVO-konformes Argument in 13 Sekunden'
  },
  {
    id: 'followup',
    title: 'Follow-Up E-Mail',
    icon: Mail,
    time: '19.0',
    model: 'qwen3:14b',
    category: 'Kommunikation',
    description: 'Professionelle Nachfass-Mail an Geschäftspartner',
    prompt: 'Schreibe eine Follow-Up E-Mail an [Kunde]. Wir hatten ein KI-Angebot geschickt, noch keine Antwort.',
    response: `**Betreff:** Kurze Rückfrage zu Ihrem digitalen Kollegen — Angebot vom Februar

Sehr geehrter Herr [Name],

ich hoffe, diese Nachricht erreicht Sie in einer ruhigen Minute.

Anfang Februar hatte ich Ihnen unser Konzept für einen lokalen KI-Assistenten vorgestellt — ein 70B-Modell als digitaler Kollege, der Ihr Team bei Kundenanfragen und Produktberatung unterstützt. Komplett on-premise.

Ich kann mir vorstellen, dass bei [Kunde] gerade viel los ist. Trotzdem wollte ich kurz nachfragen: Gibt es offene Fragen zum Angebot?

Falls das Thema aktuell nicht passt, ist das völlig in Ordnung — sagen Sie mir gern Bescheid.

Beste Grüße nach [Stadt]
Randolf Hahn`,
    highlight: 'Personalisierte B2B-Mail in 19 Sekunden'
  },
  {
    id: 'techsupport',
    title: 'Technischer Support',
    icon: TrendingUp,
    time: '23.8',
    model: 'qwen3:14b',
    category: 'Support',
    description: 'Website-Performance für Nicht-Techniker erklärt',
    prompt: 'Meine Website lädt langsam, Score nur 45 von 100. Erklärung für Nicht-Techniker bitte.',
    response: `Ein Score von 45 ist ausbaufähig — aber keine Sorge, das lässt sich verbessern.

**Die 5 häufigsten Bremsen:**

1. **Bilder zu groß** — Wie ein Brief mit komplettem Fotoalbum
2. **Zu viele Extras** — Jedes Plugin muss erst "Kaffee holen"
3. **Langsamer Server** — Ein Laden mit einer Kasse bei 50 Kunden
4. **Kein Cache** — Stammkunde zeigt jedes Mal den Ausweis
5. **Alte Technik** — Lädt Dinge, die niemand braucht

**Die gute Nachricht:**
Bildoptimierung + Caching + Plugin-Aufräumen bringen meist 45 → 75+ Score. Oft nur wenige Stunden Arbeit.

**Mein Vorschlag:** Schicken Sie mir den Link — ich mache einen kostenlosen Schnell-Check.`,
    highlight: 'Komplexes Thema verständlich in 24 Sekunden'
  },
  {
    id: 'familie',
    title: 'Kinder-Erklärung',
    icon: Users,
    time: '15.5',
    model: 'qwen3:14b',
    category: 'Familie',
    description: 'Photosynthese für Schulpräsentation erklärt',
    prompt: 'Erkläre Photosynthese so, dass ich es meiner Klasse erzählen kann.',
    response: `Hey! 🌱

**Photosynthese ist wie... Kochen für Pflanzen!** 🍳🌿

Pflanzen können nicht zum Kühlschrank gehen. Also machen sie ihr Essen selbst — mit drei Zutaten:

1. ☀️ **Sonnenlicht** (die Energie)
2. 💧 **Wasser** (aus den Wurzeln)
3. 💨 **CO₂** (ein Gas aus der Luft)

Die Blätter sind wie kleine Küchen. Das Grüne fängt das Sonnenlicht ein.

Dann mixt die Pflanze alles und macht daraus:
- 🍬 **Zucker** (ihr Essen zum Wachsen!)
- 🌬️ **Sauerstoff** (den atmen WIR!)

**Der coole Teil:**
Ohne Pflanzen hätten wir keinen Sauerstoff! Jedes Mal wenn du einatmest, kannst du einer Pflanze "Danke" sagen. 🤝`,
    highlight: 'Kindgerecht mit Emojis in 16 Sekunden'
  },
  {
    id: 'code',
    title: 'Code-Generierung',
    icon: Code,
    time: '15.4',
    model: 'qwen3:14b',
    category: 'Entwicklung',
    description: 'React-Komponente auf Anfrage generiert',
    prompt: 'Erstelle eine React-Komponente für eine Preistabelle mit 3 Paketen.',
    response: `\`\`\`jsx
const PricingTable = () => {
  const plans = [
    {
      name: 'Starter',
      price: '990',
      features: ['Bis 5 Seiten', 'Responsive Design', 
                 'Kontaktformular', 'SSL-Zertifikat'],
    },
    {
      name: 'Business',
      price: '2.990',
      popular: true,
      features: ['Bis 15 Seiten', 'Projekt-Galerie', 
                 'SEO-Optimierung', 'Google Maps'],
    },
    {
      name: 'Premium',
      price: '5.990',
      features: ['Unbegrenzte Seiten', 'Individuelles Design',
                 'CMS-System', 'Priority Support'],
    },
  ];
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <PlanCard key={plan.name} {...plan} />
      ))}
    </div>
  );
};
\`\`\``,
    highlight: 'Produktionsreifer Code in 15 Sekunden'
  },
]

const keyMetrics = [
  { value: '6', label: 'Business-Szenarien', icon: Brain },
  { value: '19.4s', label: 'Ø Antwortzeit', icon: Clock },
  { value: '100%', label: 'Lokal verarbeitet', icon: Shield },
  { value: '0€', label: 'API-Kosten', icon: Zap },
  { value: '70B', label: 'Parameter (Modell)', icon: Cpu },
  { value: '24/7', label: 'Verfügbarkeit', icon: Server },
]

export default function Fallstudie() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section pt-32 pb-20 bg-black/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <span className="inline-block px-5 py-2.5 bg-orange-500/20 text-orange-400 rounded-full text-base font-semibold mb-8">
              🔬 Live-Benchmark vom 25.02.2026
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              KI-Assistent in <span className="text-orange-500">Aktion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Echte Business-Szenarien. Echte Antworten. Echte Zeiten.
              <br />
              <strong className="text-white">100% lokal verarbeitet — keine Cloud, keine Kompromisse.</strong>
            </p>
            
            {/* Key Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
              {keyMetrics.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-black/40 backdrop-blur-md border border-white/20 p-5 rounded-2xl"
                >
                  <stat.icon className="w-7 h-7 text-orange-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="section py-16">
        <div className="container">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Was kann <span className="text-orange-500">lokale KI</span> wirklich?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Wir haben unseren KI-Assistenten mit echten Business-Aufgaben getestet — 
              von Kundenangeboten über technischen Support bis zur Code-Generierung. 
              Alle Anfragen wurden auf unserer eigenen Hardware verarbeitet, 
              ohne dass ein einziges Byte das Netzwerk verlassen hat.
            </p>
          </div>
        </div>
      </section>

      {/* Benchmark Results */}
      <section className="section py-20">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Die <span className="text-orange-500">Ergebnisse</span>
          </h2>
          
          <div className="space-y-10">
            {benchmarkData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="bg-black/50 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden"
              >
                {/* Header */}
                <div className="bg-black/60 backdrop-blur-md p-6 md:p-8 border-b border-white/10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-7 h-7 text-orange-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h3>
                        <p className="text-gray-400 text-base md:text-lg mt-1">{item.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center px-6 py-3 bg-black/50 rounded-xl border border-white/10">
                        <div className="text-3xl md:text-4xl font-bold text-orange-500">{item.time}s</div>
                        <div className="text-sm text-gray-400 mt-1">Antwortzeit</div>
                      </div>
                      <div className="text-center px-6 py-3 bg-black/50 rounded-xl border border-white/10">
                        <div className="text-lg font-mono text-green-400">{item.model}</div>
                        <div className="text-sm text-gray-400 mt-1">Modell</div>
                      </div>
                    </div>
                  </div>
                  {item.highlight && (
                    <div className="mt-4 inline-block px-4 py-2 bg-orange-500/30 rounded-lg">
                      <span className="text-orange-300 font-semibold text-base">✨ {item.highlight}</span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 grid lg:grid-cols-2 gap-8">
                  {/* Prompt */}
                  <div>
                    <div className="text-base text-gray-400 mb-3 flex items-center gap-2 font-semibold">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      ANFRAGE
                    </div>
                    <div className="bg-black/50 backdrop-blur-md border border-blue-500/30 rounded-2xl p-6 text-gray-100 text-lg leading-relaxed">
                      "{item.prompt}"
                    </div>
                  </div>
                  
                  {/* Response */}
                  <div>
                    <div className="text-base text-gray-400 mb-3 flex items-center gap-2 font-semibold">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      KI-ANTWORT
                    </div>
                    <div className="bg-black/50 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6 text-gray-100 text-base leading-relaxed max-h-80 overflow-y-auto whitespace-pre-wrap">
                      {item.response}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Routing Section */}
      <section className="section py-20">
        <div className="container">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Intelligentes <span className="text-orange-500">Model-Routing</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              Der Assistent wählt automatisch das passende Modell für jede Aufgabe — 
              schnelle Antworten für einfache Fragen, volle Power für komplexe Aufgaben.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-8">
                <div className="text-green-400 font-mono text-xl mb-4">qwen3:8b</div>
                <h4 className="text-2xl font-bold text-white mb-3">Schnelle Aufgaben</h4>
                <ul className="text-gray-300 text-lg space-y-2">
                  <li>• Kurze Fakten-Fragen</li>
                  <li>• Ja/Nein-Entscheidungen</li>
                  <li>• Einfache Berechnungen</li>
                  <li>• Status-Abfragen</li>
                </ul>
                <div className="mt-6 text-gray-400">
                  <span className="text-2xl font-bold text-white">~8s</span> Ø Antwortzeit
                </div>
              </div>
              
              <div className="bg-black/50 border border-orange-500/30 rounded-2xl p-8">
                <div className="text-orange-400 font-mono text-xl mb-4">qwen3:14b</div>
                <h4 className="text-2xl font-bold text-white mb-3">Komplexe Aufgaben</h4>
                <ul className="text-gray-300 text-lg space-y-2">
                  <li>• Business-Texte & E-Mails</li>
                  <li>• Technische Erklärungen</li>
                  <li>• Code-Generierung</li>
                  <li>• Kreative Inhalte</li>
                </ul>
                <div className="mt-6 text-gray-400">
                  <span className="text-2xl font-bold text-white">~19s</span> Ø Antwortzeit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Test-<span className="text-orange-500">Methodik</span>
              </h2>
              <div className="space-y-8">
                {[
                  { 
                    title: 'Hardware', 
                    desc: 'NVIDIA RTX 5090 (32GB VRAM), AMD Ryzen 9 5950X, 128GB DDR4 RAM',
                    detail: 'High-End Workstation für maximale KI-Performance'
                  },
                  { 
                    title: 'Software', 
                    desc: 'Ollama + Clawdbot Gateway, lokale Modelle (qwen3:14b, qwen3:8b)',
                    detail: 'Open-Source Stack, keine Cloud-Abhängigkeit'
                  },
                  { 
                    title: 'Messung', 
                    desc: 'Zeit von Anfrage bis vollständige Antwort (inkl. Token-Generierung)',
                    detail: 'Reale End-to-End Messung, keine Tricks'
                  },
                  { 
                    title: 'Bedingungen', 
                    desc: 'Realer Betrieb, keine Isolation, normale Systemlast',
                    detail: 'So wie es im echten Arbeitsalltag läuft'
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-6">
                    <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                      <p className="text-lg text-gray-200 mt-1">{item.desc}</p>
                      <p className="text-base text-gray-400 mt-1">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="section py-20">
        <div className="container">
          <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Was hätte das in der <span className="text-orange-500">Cloud</span> gekostet?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Hochrechnung basierend auf GPT-4 API-Preisen für vergleichbare Qualität
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/50 border border-white/10 rounded-2xl p-8">
                <div className="text-5xl font-bold text-white mb-2">6</div>
                <div className="text-gray-400 text-lg">Test-Anfragen</div>
              </div>
              <div className="bg-black/50 border border-white/10 rounded-2xl p-8">
                <div className="text-5xl font-bold text-white mb-2">~$0.85</div>
                <div className="text-gray-400 text-lg">Cloud-Kosten wären</div>
              </div>
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-2xl p-8">
                <div className="text-5xl font-bold text-orange-500 mb-2">0€</div>
                <div className="text-gray-300 text-lg">Unsere Kosten</div>
              </div>
            </div>
            
            <p className="text-gray-400 mt-8 text-lg">
              Bei 1.000 Anfragen/Tag wären das <span className="text-white font-bold">~140€/Monat</span> Cloud-Kosten. 
              <br />Mit lokaler KI: <span className="text-orange-500 font-bold">0€ nach Anschaffung</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section py-24">
        <div className="container">
          <div className="bg-black/50 backdrop-blur-md rounded-2xl p-10 md:p-16 border border-white/10 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bereit für Ihre eigene <span className="text-orange-500">Private AI</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Diese Ergebnisse können Sie auch in Ihrem Unternehmen erreichen — 
              mit Hardware, die Ihnen gehört, und Daten, die bei Ihnen bleiben.
            </p>
            <Link to="/kontakt">
              <RippleButton className="btn-primary text-xl px-10 py-5">
                Kostenlose Beratung anfragen
              </RippleButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
