import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Palette, PenTool, Layers, RefreshCcw, MessageSquare, CheckCircle, ArrowRight, Star } from 'lucide-react'

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
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
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
      <section className="section dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Unsere Grafikdesign-Services
            </motion.h2>
            <motion.p
              className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ob einzelnes Logo oder komplette Markenidentität – wir gestalten visuell, was Ihr Business ausmacht.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                const colorClass = service.color === 'primary' ? 'text-primary' : 'text-secondary'
                const bgGradient = service.color === 'primary'
                  ? 'from-primary to-brand-blue'
                  : 'from-secondary to-secondary-dark'

                return (
                  <motion.div
                    key={service.title}
                    className={`card group hover:shadow-lg transition-all duration-300 ${
                      service.highlighted
                        ? 'border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-primary/5 relative'
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

                    <div className={`w-12 h-12 bg-gradient-to-br ${bgGradient} rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
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
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-center mb-4 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Unser Design-Prozess
            </motion.h2>
            <motion.p
              className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
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
                        <ArrowRight className="w-8 h-8 text-primary/30 dark:text-gray-600" />
                      </div>
                    )}

                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-semibold text-primary dark:text-secondary mb-2">
                      Schritt {index + 1}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
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
            <Link to="/services" className="btn-secondary text-lg">
              Alle Leistungen ansehen
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
