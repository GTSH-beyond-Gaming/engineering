import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FAQ from '../components/FAQ'

export default function Services() {
  const faqItems = [
    {
      question: 'Wie lange dauert die Entwicklung einer Website?',
      answer: 'Eine Standard-Website dauert 4-6 Wochen von Konzept bis Launch. Landing Pages können bereits nach 1-2 Wochen live sein. E-Commerce-Projekte benötigen 8-12 Wochen.'
    },
    {
      question: 'Welche Zahlungsmodelle bieten Sie an?',
      answer: 'Wir bieten flexible Zahlungsmodelle: 50% Anzahlung bei Projektstart, 50% bei Abnahme. Für größere Projekte sind auch Ratenzahlungen möglich.'
    },
    {
      question: 'Kann ich meine Website selbst pflegen?',
      answer: 'Ja! Wir integrieren auf Wunsch ein CMS (Content Management System), mit dem Sie Inhalte selbst aktualisieren können. Alternativ bieten wir einen Pflege-Service ab €150/Monat.'
    },
    {
      question: 'Bieten Sie auch Wartung & Support?',
      answer: 'Ja! Nach dem Launch bieten wir verschiedene Support-Pakete an: Basis (€150/Monat), Business (€300/Monat), Enterprise (€500/Monat). Notfall-Support ist 24/7 verfügbar.'
    },
    {
      question: 'Wie läuft ein Projekt typischerweise ab?',
      answer: '1) Erstgespräch (kostenlos) → 2) Angebot & Vertrag → 3) Konzept-Phase (1 Woche) → 4) Design-Phase (2 Wochen) → 5) Entwicklung (2-4 Wochen) → 6) Testing & Launch (1 Woche) → 7) Support & Wartung (laufend)'
    },
    {
      question: 'Können Sie auch bestehende Websites überarbeiten?',
      answer: 'Absolut! Wir analysieren Ihre bestehende Website und erstellen einen Optimierungs-Plan. Je nach Umfang kann ein Relaunch sinnvoller sein als eine Überarbeitung.'
    },
    {
      question: 'Was kostet eine KI-Integration?',
      answer: 'Das hängt vom Use-Case ab. Ein einfacher ChatBot startet bei €1.500. Komplexe Automation-Lösungen ab €5.000. Wir erstellen nach einem kostenlosen Audit ein individuelles Angebot.'
    },
    {
      question: 'Bieten Sie auch SEO-Services an?',
      answer: 'Ja! Basis-SEO ist in allen Website-Projekten enthalten. Für erweiterte SEO-Optimierung bieten wir monatliche Pakete ab €300/Monat (inkl. Content-Erstellung, Backlink-Building, etc.)'
    }
  ]

  return (
    <div>
      <title>Leistungen - Web, KI, Automation & Grafik | GTSH Engineering</title>
      <meta name="description" content="Web-Development, KI-Schulungen, Business Automation & Grafikdesign. Transparente Preise, messbare Resultate. Services für KMU in Thüringen." />
      <link rel="canonical" href="https://gtsh-engineering.de/services" />

      {/* Header */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6">Web-Development, KI-Schulungen & Automation Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Websites. Automation. Grafik. KI. Alles aus einer Hand.
            Transparente Preise, messbare Resultate.
          </p>
        </div>
      </section>

      {/* Web-Engineering */}
      <section className="section dark:bg-gray-900" id="web">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-primary dark:text-white">Web-Engineering</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Moderne Websites die nicht nur gut aussehen, sondern auch konvertieren.
              Wir nutzen cutting-edge Technologien wie React, Next.js und Tailwind CSS.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="mb-3">Custom Websites</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Maßgeschneiderte Websites mit React/Next.js. SEO-optimiert, schnell, modern.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Responsive Design (Mobile-First)</li>
                  <li>✓ SEO-Optimierung</li>
                  <li>✓ Performance-optimiert (90+ Lighthouse Score)</li>
                  <li>✓ DSGVO-konform</li>
                  <li>✓ CMS-Integration (wenn gewünscht)</li>
                </ul>
                <p className="text-2xl font-bold text-primary">Ab €2.500</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Timeline: 4-6 Wochen</p>
              </div>

              <div className="card">
                <h3 className="mb-3">E-Commerce</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Online-Shops die verkaufen. Von Produktkatalog bis Checkout.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Produktverwaltung</li>
                  <li>✓ Payment-Integration (Stripe, PayPal)</li>
                  <li>✓ Warenwirtschaft-Anbindung</li>
                  <li>✓ Analytics & Tracking</li>
                  <li>✓ Conversion-Optimierung</li>
                </ul>
                <p className="text-2xl font-bold text-primary">Ab €5.000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Timeline: 8-12 Wochen</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Landing Pages</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Conversion-optimierte Landing Pages für Ihre Kampagnen.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ A/B-Testing-ready</li>
                  <li>✓ Analytics-Integration</li>
                  <li>✓ Lead-Formulare</li>
                  <li>✓ 1-3 Sektionen</li>
                  <li>✓ Schnelle Delivery (1-2 Wochen)</li>
                </ul>
                <p className="text-2xl font-bold text-primary">Ab €800</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Timeline: 1-2 Wochen</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Wartung + Support</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Laufende Betreuung Ihrer Website. Updates, Backups, Support.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Monatliche Updates</li>
                  <li>✓ Security-Patches</li>
                  <li>✓ Performance-Monitoring</li>
                  <li>✓ Content-Updates (bis 2h/Monat)</li>
                  <li>✓ Email-Support (24h Response)</li>
                </ul>
                <p className="text-2xl font-bold text-primary">€200/Monat</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Oder €2.000/Jahr (2 Monate gratis)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Automation */}
      <section className="section bg-gray-50 dark:bg-gray-800" id="automation">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-secondary dark:text-white">Business Automation</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Sparen Sie bis zu 80% Ihrer Zeit durch intelligente Prozess-Automation.
              Von PowerShell-Scripts bis Python-Anwendungen.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="mb-3">Prozess-Analyse</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Wo verschwenden Sie Zeit? Wir analysieren Ihre Prozesse und finden Optimierungs-Potenzial.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Workshop (2-4 Stunden)</li>
                  <li>✓ Prozess-Mapping</li>
                  <li>✓ Automation-Potential-Report</li>
                  <li>✓ ROI-Kalkulation</li>
                  <li>✓ Priorisierte Roadmap</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">€800</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Wird bei Projekt-Buchung angerechnet</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Automation-Implementation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Wir bauen die Automation für Sie. Von einfachen Scripts bis komplexen Workflows.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ PowerShell, Python, Node.js</li>
                  <li>✓ API-Integrationen</li>
                  <li>✓ Workflow-Automation (Zapier, n8n)</li>
                  <li>✓ Dokumentation</li>
                  <li>✓ Training (2h)</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">Ab €1.500</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Je nach Komplexität</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Custom Integrations</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Verbinden Sie Ihre Tools. CRM, ERP, Accounting - alles automatisch synchronisiert.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ API-Entwicklung</li>
                  <li>✓ Daten-Synchronisation</li>
                  <li>✓ Fehlerbehandlung</li>
                  <li>✓ Monitoring</li>
                  <li>✓ Wartung (3 Monate inkl.)</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">Ab €3.000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Timeline: 4-8 Wochen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital-Beratung */}
      <section className="section bg-gray-50 dark:bg-gray-800" id="consulting">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-secondary dark:text-white">Digital-Beratung</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Strategische Beratung für Ihre digitale Transformation.
              KI-Integration, Prozess-Optimierung, Digitalisierungs-Strategie.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="mb-3">Stunden-Beratung</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Flexible Beratung zu allen Digital-Themen. KI, Automation, Tech-Stack.
                </p>
                <p className="text-3xl font-bold text-secondary mb-2">€150/Stunde</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Min. 2 Stunden</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Workshop (Ganztag)</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Intensiv-Workshop mit Ihrem Team. Digitalisierung, KI-Strategie, Prozess-Optimierung.
                </p>
                <p className="text-3xl font-bold text-secondary mb-2">€1.200/Tag</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Inkl. Follow-Up-Call</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Private AI Solutions - NEU! */}
      <section className="section dark:bg-gray-900" id="private-ai">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-secondary dark:text-white">Private AI Solutions</h2>
              <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold">NEU!</span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              KI-Modelle die 100% lokal auf IHRER Hardware laufen. Keine Cloud. Keine API-Kosten. Maximale Privatsphäre.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="card border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-primary/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="mb-3">Lokale LLM-Installation</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Wir richten leistungsstarke KI-Modelle auf Ihrer eigenen Hardware ein. Bis zu 70B Parameter, lokal und sicher.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Lokale LLMs (bis 70B Parameter)</li>
                  <li>✓ Hardware-Beratung & Setup</li>
                  <li>✓ Keine Daten verlassen Ihr Netzwerk</li>
                  <li>✓ 61 tok/s auf eigener Hardware</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">Ab €3.000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Einmaliges Setup</p>
              </motion.div>

              <motion.div
                className="card border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-primary/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="mb-3">Discord / WhatsApp Bots</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Intelligente Bots die lokal laufen. Kundenservice, interne Kommunikation, Automation.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Discord-Bot mit lokalem LLM</li>
                  <li>✓ WhatsApp Business Integration</li>
                  <li>✓ Custom Training auf Ihre Daten</li>
                  <li>✓ €0 laufende API-Kosten</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">Ab €2.000</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">+ optional: Wartung €200/Monat</p>
              </motion.div>
            </div>

            <div className="card bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary/30 text-center">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
                <strong>100% DSGVO-konform</strong> - Keine Daten verlassen Deutschland.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Eigene RTX 5090 Infrastruktur. Keine US-Cloud. Keine laufenden API-Kosten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KI-Schulungen */}
      <section className="section bg-gray-50 dark:bg-gray-800" id="ki-schulungen">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-primary dark:text-white">KI-Schulungen</h2>
              <span className="bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">NEU!</span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Machen Sie Ihr Team KI-ready. Praxisnahe Workshops mit sofort umsetzbaren Ergebnissen.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="card">
                <h3 className="mb-3">KI-Basics Workshop</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Halbtägiger Einstieg in KI-Tools für den Arbeitsalltag. ChatGPT, Claude, Prompting-Strategien.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ 4 Stunden Workshop</li>
                  <li>✓ Bis zu 10 Teilnehmer</li>
                  <li>✓ Praxis-Übungen</li>
                  <li>✓ Handout & Checklisten</li>
                </ul>
                <p className="text-2xl font-bold text-primary">€800</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Halbtags (4h)</p>
              </div>

              <div className="card border-2 border-primary/50 relative">
                <span className="absolute -top-3 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold">BELIEBT</span>
                <h3 className="mb-3">KI-Integration für Teams</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Ganztags-Workshop: KI-Tools in bestehende Workflows integrieren. Automation, Textgenerierung, Bildbearbeitung.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ 8 Stunden Workshop</li>
                  <li>✓ Workflow-Analyse</li>
                  <li>✓ Tool-Empfehlungen</li>
                  <li>✓ Follow-Up-Call (1h)</li>
                </ul>
                <p className="text-2xl font-bold text-primary">€1.500</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ganztags (8h)</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Individuelles KI-Training</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  2-tägiges Intensiv-Training: KI-Strategie, lokale Modelle, Custom Solutions für Ihr Unternehmen.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ 2 Tage (16 Stunden)</li>
                  <li>✓ Individuelle Inhalte</li>
                  <li>✓ Strategie-Entwicklung</li>
                  <li>✓ 3 Follow-Up-Calls</li>
                </ul>
                <p className="text-2xl font-bold text-primary">€2.500</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2 Tage (16h)</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/ki-schulungen" className="btn-primary">
                Alle KI-Schulungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Assets & Grafikdesign */}
      <section className="section dark:bg-gray-900" id="grafikdesign">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-secondary dark:text-white">Grafikdesign & Digital Assets</h2>
              <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold">NEU!</span>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Von Social Media bis Corporate Identity – visuelles Design das Ihre Marke stärkt.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="card">
                <h3 className="mb-3">Social Media Bundle</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  10 individuell designte Posts für Ihre Social-Media-Kanäle.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ 10 Post-Designs</li>
                  <li>✓ Instagram, LinkedIn, Facebook</li>
                  <li>✓ Brand-konform</li>
                  <li>✓ Editierbare Templates</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">€300</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Logo Design</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Professionelles Logo mit 3 Entwürfen und 2 Korrekturrunden.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ 3 Entwürfe</li>
                  <li>✓ 2 Korrekturrunden</li>
                  <li>✓ Alle Formate (SVG, PNG, PDF)</li>
                  <li>✓ Nutzungsrechte inklusive</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">€800</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Brand Identity Premium</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Komplettes Corporate Design: Logo, Farben, Typografie, Visitenkarten, Briefpapier.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Logo + Varianten</li>
                  <li>✓ Farbpalette & Typografie</li>
                  <li>✓ Visitenkarten & Briefpapier</li>
                  <li>✓ Brand Guidelines (PDF)</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">€2.500</p>
              </div>

              <div className="card">
                <h3 className="mb-3">Grafik-Flatrate</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Monatliche Grafik-Betreuung: Social Media, Banner, Flyer – alles was Sie brauchen.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                  <li>✓ Bis zu 20 Designs/Monat</li>
                  <li>✓ Alle Formate</li>
                  <li>✓ 48h Turnaround</li>
                  <li>✓ Monatlich kündbar</li>
                </ul>
                <p className="text-2xl font-bold text-secondary">€500/Monat</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/grafikdesign" className="btn-secondary">
                Alle Grafikdesign-Services ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Paket-Bundles */}
      <section className="section bg-gray-50 dark:bg-gray-800" id="pakete">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-center mb-4 text-gray-900 dark:text-white">
              Service-Pakete – Bis zu 36% sparen
            </h2>
            <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12">
              Kombinieren Sie unsere Services und sparen Sie. Alles aus einer Hand.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="card border-2 border-gray-200 dark:border-gray-600">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">STARTER-PAKET</h3>
                  <p className="text-sm text-gray-500 line-through">€4.100</p>
                  <p className="text-4xl font-bold text-primary">€3.500</p>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-semibold px-3 py-1 rounded-full mt-2">
                    15% Ersparnis
                  </span>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  <li>✓ Landing Page (€800)</li>
                  <li>✓ Logo Design (€800)</li>
                  <li>✓ Social Media Bundle (€300)</li>
                  <li>✓ KI-Basics Workshop (€800)</li>
                  <li>✓ 3 Monate Wartung gratis</li>
                </ul>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Starter-Paket anfragen
                </Link>
              </div>

              {/* Growth - Highlighted */}
              <div className="card border-2 border-secondary bg-gradient-to-br from-secondary/5 to-primary/5 relative">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs px-4 py-1 rounded-full font-semibold">
                  BELIEBT
                </span>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">GROWTH-PAKET</h3>
                  <p className="text-sm text-gray-500 line-through">€8.000</p>
                  <p className="text-4xl font-bold text-secondary">€6.500</p>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-semibold px-3 py-1 rounded-full mt-2">
                    30% Ersparnis
                  </span>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  <li>✓ Custom Website (€2.500)</li>
                  <li>✓ Brand Identity Premium (€2.500)</li>
                  <li>✓ AI Chatbot (€2.000)</li>
                  <li>✓ KI-Workshop für Team (€1.500)</li>
                  <li>✓ 6 Monate Wartung gratis</li>
                </ul>
                <Link to="/contact" className="btn-secondary w-full text-center">
                  Growth-Paket anfragen
                </Link>
              </div>

              {/* Scale */}
              <div className="card border-2 border-gray-200 dark:border-gray-600">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">SCALE-PAKET</h3>
                  <p className="text-sm text-gray-500 line-through">€15.000</p>
                  <p className="text-4xl font-bold text-primary">€12.000</p>
                  <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-semibold px-3 py-1 rounded-full mt-2">
                    36% Ersparnis
                  </span>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                  <li>✓ E-Commerce Shop (€5.000)</li>
                  <li>✓ Automation-Paket (€3.000)</li>
                  <li>✓ Private AI Setup (€3.000)</li>
                  <li>✓ Brand Identity Premium (€2.500)</li>
                  <li>✓ 3 Monate Grafik-Flatrate</li>
                  <li>✓ 12 Monate Wartung gratis</li>
                </ul>
                <Link to="/contact" className="btn-primary w-full text-center">
                  Scale-Paket anfragen
                </Link>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link to="/pakete" className="text-primary hover:text-primary-dark dark:text-secondary font-semibold underline">
                Alle Pakete im Detail ansehen →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-4 text-gray-900 dark:text-white">
              Häufige Fragen
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
              Alles was Sie über unsere Leistungen wissen müssen
            </p>
            <FAQ items={faqItems} />
            <div className="text-center mt-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Haben Sie weitere Fragen?
              </p>
              <Link to="/contact" className="btn-primary">
                Jetzt persönlich beraten lassen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Bereit loszulegen?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Buchen Sie ein kostenloses Erstgespräch und erfahren Sie, welche Leistung am besten zu Ihnen passt.
          </p>
          <Link to="/contact" className="btn-secondary text-lg">
            Jetzt Termin vereinbaren
          </Link>
        </div>
      </section>
    </div>
  )
}
