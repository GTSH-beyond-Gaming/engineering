import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Palette, PenTool, Layers, RefreshCcw, MessageSquare, CheckCircle, ArrowRight, Star, Sparkles } from 'lucide-react'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
}

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Briefing',
    description: 'Wir lernen Ihre Marke, Zielgruppe und Wünsche kennen. Klare Ziele, klare Richtung.'
  },
  {
    icon: PenTool,
    title: 'Entwurf',
    description: 'Kreative Konzepte und erste Designs werden entwickelt – basierend auf Ihrem Briefing.'
  },
  {
    icon: RefreshCcw,
    title: 'Feedback',
    description: 'Sie geben Rückmeldung, wir verfeinern. Korrekturrunden sind inklusive.'
  },
  {
    icon: CheckCircle,
    title: 'Finalisierung',
    description: 'Finale Daten in allen benötigten Formaten. Druckfertig und digital einsatzbereit.'
  }
]

const services = [
  {
    title: 'AI-Bildgenerierung',
    price: 'Ab €50/Bild',
    description: 'Photorealistische Bilder mit lokaler KI – für Marketing, Produktfotos und Content.',
    features: [
      'Photorealistische Qualität',
      'Lokale Generierung (keine Cloud)',
      'Unbegrenzte Revisionen',
      'Alle Auflösungen bis 4K',
      'Lieferzeit: 24-48h',
      '10er Pack: €400 (20% Rabatt)'
    ],
    icon: Sparkles,
    color: 'secondary',
    isNew: true
  },
  {
    title: 'Social Media Bundle',
    price: '€300',
    description: '10 individuell designte Posts für Ihre Social-Media-Kanäle.',
    features: [
      '10 individuell designte Posts',
      'Instagram, LinkedIn, Facebook',
      'Brand-konform gestaltet',
      'Editierbare Templates',
      'Lieferzeit: 5 Werktage'
    ],
    icon: Layers,
    color: 'secondary'
  },
  {
    title: 'Logo Design',
    price: '€800',
    description: 'Professionelles Logo-Design mit mehreren Entwürfen und Korrekturrunden.',
    features: [
      '3 Entwürfe',
      '2 Korrekturrunden',
      'Alle Formate (SVG, PNG, PDF)',
      'Nutzungsrechte inklusive',
      'Lieferzeit: 7-10 Werktage'
    ],
    icon: PenTool,
    color: 'primary'
  },
  {
    title: 'Brand Identity Premium',
    price: '€2.500',
    description: 'Komplettes Corporate Design: Logo, Farben, Typografie, Geschäftsausstattung.',
    features: [
      'Logo + Varianten',
      'Farbpalette & Typografie',
      'Visitenkarten & Briefpapier',
      'Social Media Templates',
      'Brand Guidelines (PDF)',
      'Lieferzeit: 3-4 Wochen'
    ],
    icon: Star,
    color: 'secondary',
    highlighted: true
  },
  {
    title: 'Grafik-Flatrate',
    price: '€500/Monat',
    description: 'Monatliche Grafik-Betreuung für laufenden Content-Bedarf.',
    features: [
      'Bis zu 20 Designs pro Monat',
      'Alle Formate & Kanäle',
      '48h Turnaround',
      'Monatlich kündbar',
      'Ideal für: Laufender Content-Bedarf'
    ],
    icon: Palette,
    color: 'primary'
  }
]

export default function Grafikdesign() {
  return (
    <div>
      <title>Grafikdesign - Logo, Corporate Design & Social Media | GTSH Engineering</title>
      <meta name="description" content="Professionelles Grafikdesign: Logo Design ab €800, Social Media Bundle ab €300, Brand Identity ab €2.500, Grafik-Flatrate ab €500/Monat. GTSH Engineering – visuelles Design das Ihre Marke stärkt." />
      <link rel="canonical" href="https://gtsh-engineering.de/grafikdesign" />

      {/* Hero Section */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Grafikdesign & Visuelle Identität
          </motion.h1>
          <motion.p
            className="text-xl max-w-3xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Von Logo bis Corporate Design – visuelles Design das Ihre Marke stärkt
          </motion.p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="glass-panel-light text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-white">
                Unsere Grafikdesign-Services
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Ob einzelnes Logo oder komplette Markenidentität – wir gestalten visuell, was Ihr Business ausmacht.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                const colorClass = service.color === 'primary' ? 'text-primary' : 'text-white/80'
                const bgGradient = service.color === 'primary'
                  ? 'from-primary to-brand-blue'
                  : 'from-secondary to-secondary-dark'

                return (
                  <motion.div
                    key={service.title}
                    className={`card group hover:shadow-lg transition-all duration-300 ${
                      service.highlighted
                        ? 'border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-primary/5 relative'
                        : service.isNew
                        ? 'border-2 border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5 relative'
                        : ''
                    }`}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    {service.highlighted && (
                      <span className="absolute -top-3 left-4 bg-secondary text-white text-xs px-3 py-1 rounded-full font-semibold">
                        EMPFOHLEN
                      </span>
                    )}
                    {service.isNew && (
                      <span className="absolute -top-3 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full font-semibold animate-pulse">
                        NEU!
                      </span>
                    )}

                    <div className={`w-12 h-12 bg-gradient-to-br ${bgGradient} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-white/90 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2 text-sm text-white/90 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">&#10003;</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className={`text-2xl font-bold ${colorClass}`}>{service.price}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Design-Prozess */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-center mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Unser Design-Prozess
            </motion.h2>
            <motion.p
              className="text-center text-lg text-white/90 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              In vier klaren Schritten von der Idee zum fertigen Design.
            </motion.p>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.title}
                    className="text-center relative"
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    {/* Connector arrow between steps (hidden on mobile, hidden after last) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-4 z-10">
                        <ArrowRight className="w-8 h-8 text-primary/30 text-white/80" />
                      </div>
                    )}

                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-primary mb-2">
                      Schritt {index + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* AI Gallery Showcase */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="glass-panel-light text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 text-white">
                AI-Generierte Beispiele
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Alle Bilder wurden mit unserer lokalen KI-Infrastruktur generiert. 
                Photorealistisch, hochauflösend, sofort einsatzbereit.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { src: '/gallery/workspace.webp', title: 'Modern Workspace', desc: 'Professionelle Office-Szene' },
                { src: '/gallery/serverroom.webp', title: 'Server Room', desc: 'Tech-Infrastruktur Visual' },
                { src: '/gallery/gaming-pc.webp', title: 'Gaming PC Build', desc: 'Produkt-Fotografie Style' },
                { src: '/gallery/ai-abstract.webp', title: 'AI Visualization', desc: 'Abstrakte Tech-Grafik' },
                { src: '/gallery/team-collab.webp', title: 'Team Collaboration', desc: 'Business-Stock-Ersatz' },
                { src: '/gallery/circuitboard.webp', title: 'Circuit Board', desc: 'Makro Tech-Fotografie' },
              ].map((item, index) => (
                <motion.div
                  key={item.src}
                  className="group relative overflow-hidden rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h4 className="text-white font-semibold">{item.title}</h4>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
                      AI Generated
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-white/60 mb-4">
                Generiert mit SDXL auf RTX 5090 • Keine Stock-Fotos • 100% lokal
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <motion.h2
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bereit, Ihre Marke visuell zu stärken?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lassen Sie uns gemeinsam ein Design entwickeln, das Ihre Marke unverwechselbar macht.
            Kostenloses Erstgespräch inklusive.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary text-lg">
              Design-Projekt starten
            </Link>
            <Link to="/leistungen" className="btn-secondary text-lg">
              Alle Leistungen ansehen
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



