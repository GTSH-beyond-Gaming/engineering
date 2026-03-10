import { motion } from 'framer-motion'
import { GraduationCap, Mail, FileSearch, ArrowRight, Check } from 'lucide-react'

const products = [
  {
    icon: GraduationCap,
    title: 'KI-Workshop für Teams',
    tagline: 'Praxisnahe Schulung für produktive KI-Nutzung',
    description: 'Ihr Team lernt ChatGPT & Claude effektiv zu nutzen – ohne Vorkenntnisse.',
    features: [
      'Kompakt: 4 oder 8 Stunden',
      'Sofort anwendbar im Arbeitsalltag',
      'Für Teams bis 15 Personen',
      'Vor Ort oder remote'
    ],
    result: 'Team nutzt KI produktiv ab Tag 1',
    price: 'Ab 800€',
    cta: 'Workshop anfragen',
    link: '/ki-schulungen',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mail,
    title: 'E-Mail-Assistent Agent',
    tagline: '80% weniger Zeit im Posteingang',
    description: 'KI liest, sortiert und fasst Ihre E-Mails zusammen – lokal und DSGVO-konform.',
    features: [
      'Automatische Inbox-Sortierung',
      'Intelligente Zusammenfassungen',
      'Prioritäten-Erkennung',
      'Läuft auf Ihrer Hardware'
    ],
    result: 'Von 2h täglich auf 20 Minuten',
    price: 'Ab 1.500€ + 200€/Monat',
    cta: 'Demo buchen',
    link: '/contact',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: FileSearch,
    title: 'Dokumenten-Analyse Agent',
    tagline: 'Durchsuchen Sie tausende Dokumente in Sekunden',
    description: 'KI durchforstet Ihre PDFs, Verträge & Akten – und liefert präzise Antworten.',
    features: [
      'Alle Dokumente durchsuchbar',
      'Antworten in Sekunden',
      'Läuft komplett lokal',
      'Keine Cloud-Uploads nötig'
    ],
    result: 'Informationen finden statt suchen',
    price: 'Ab 2.500€',
    cta: 'Kostenlos testen',
    link: '/contact',
    color: 'from-green-500 to-emerald-500'
  }
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 }
}

export default function FeaturedProducts() {
  return (
    <section className="section bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-primary text-sm px-4 py-2 rounded-full font-semibold mb-4">
            Unsere Lösungen
          </span>
          <h2 className="mb-4">Wie wir Ihnen helfen</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Drei konkrete Produkte, die Ihren Arbeitsalltag sofort vereinfachen.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Card - Glasmorphism */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:bg-white/10">
                  
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${product.color}`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} text-white mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                  
                  {/* Tagline */}
                  <p className="text-primary font-semibold mb-4">{product.tagline}</p>
                  
                  {/* Description */}
                  <p className="text-gray-300 mb-6">{product.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Result Badge */}
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-400 mb-1">Ergebnis:</p>
                    <p className="font-semibold text-white">{product.result}</p>
                  </div>

                  {/* Price */}
                  <p className="text-2xl font-bold mb-6 gradient-text-animated">{product.price}</p>

                  {/* CTA Button */}
                  <a
                    href={product.link}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/50"
                  >
                    {product.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Nicht sicher, was Sie brauchen?
          </p>
          <a
            href="/contact"
            className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3 rounded-lg transition-all duration-200"
          >
            Jetzt kostenlos beraten lassen
          </a>
        </motion.div>
      </div>
    </section>
  )
}
