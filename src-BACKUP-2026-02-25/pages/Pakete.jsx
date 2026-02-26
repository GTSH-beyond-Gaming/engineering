import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, X, ChevronDown, Rocket, TrendingUp, Building2, Phone } from 'lucide-react'
import FAQ from '../components/FAQ'

const packages = [
  {
    name: 'STARTER-PAKET',
    price: '3.500',
    originalPrice: '4.100',
    savings: '15%',
    color: 'primary',
    popular: false,
    idealFor: 'Gründer & Freelancer',
    items: [
      { name: 'Landing Page', value: '€800' },
      { name: 'Logo Design', value: '€800' },
      { name: 'Social Media Bundle', value: '€300' },
      { name: 'KI-Basics Workshop', value: '€800' },
    ],
    extras: ['3 Monate Wartung gratis'],
    icon: Rocket,
    features: {
      landingPage: true,
      customWebsite: false,
      ecommerce: false,
      logoDesign: true,
      brandIdentity: false,
      socialMedia: true,
      kiWorkshop: 'Basics (4h)',
      aiChatbot: false,
      automationPaket: false,
      privateAi: false,
      grafikFlatrate: false,
      wartung: '3 Monate',
    },
  },
  {
    name: 'GROWTH-PAKET',
    price: '6.500',
    originalPrice: '8.000',
    savings: '30%',
    color: 'secondary',
    popular: true,
    idealFor: 'Wachsende KMU',
    items: [
      { name: 'Custom Website', value: '€2.500' },
      { name: 'Brand Identity Premium', value: '€2.500' },
      { name: 'AI Chatbot', value: '€2.000' },
      { name: 'KI-Workshop für Team', value: '€1.500' },
    ],
    extras: ['6 Monate Wartung gratis'],
    icon: TrendingUp,
    features: {
      landingPage: false,
      customWebsite: true,
      ecommerce: false,
      logoDesign: true,
      brandIdentity: true,
      socialMedia: false,
      kiWorkshop: 'Team (8h)',
      aiChatbot: true,
      automationPaket: false,
      privateAi: false,
      grafikFlatrate: false,
      wartung: '6 Monate',
    },
  },
  {
    name: 'SCALE-PAKET',
    price: '12.000',
    originalPrice: '15.000',
    savings: '36%',
    color: 'primary',
    popular: false,
    idealFor: 'Etablierte Unternehmen',
    items: [
      { name: 'E-Commerce Shop', value: '€5.000' },
      { name: 'Automation-Paket', value: '€3.000' },
      { name: 'Private AI Setup', value: '€3.000' },
      { name: 'Brand Identity Premium', value: '€2.500' },
    ],
    extras: ['3 Monate Grafik-Flatrate', '12 Monate Wartung gratis'],
    icon: Building2,
    features: {
      landingPage: false,
      customWebsite: false,
      ecommerce: true,
      logoDesign: true,
      brandIdentity: true,
      socialMedia: false,
      kiWorkshop: false,
      aiChatbot: false,
      automationPaket: true,
      privateAi: true,
      grafikFlatrate: '3 Monate',
      wartung: '12 Monate',
    },
  },
]

const comparisonRows = [
  { label: 'Landing Page', key: 'landingPage' },
  { label: 'Custom Website', key: 'customWebsite' },
  { label: 'E-Commerce Shop', key: 'ecommerce' },
  { label: 'Logo Design', key: 'logoDesign' },
  { label: 'Brand Identity Premium', key: 'brandIdentity' },
  { label: 'Social Media Bundle', key: 'socialMedia' },
  { label: 'KI-Workshop', key: 'kiWorkshop' },
  { label: 'AI Chatbot', key: 'aiChatbot' },
  { label: 'Automation-Paket', key: 'automationPaket' },
  { label: 'Private AI Setup', key: 'privateAi' },
  { label: 'Grafik-Flatrate', key: 'grafikFlatrate' },
  { label: 'Wartung gratis', key: 'wartung' },
]

const faqItems = [
  {
    question: 'Kann ich ein Paket individuell anpassen?',
    answer:
      'Ja! Unsere Pakete sind Ausgangspunkte. Sie können einzelne Leistungen hinzufügen oder austauschen. Im kostenlosen Erstgespräch erstellen wir ein maßgeschneidertes Angebot für Sie.',
  },
  {
    question: 'Wie läuft die Zahlung ab?',
    answer:
      'Wir bieten flexible Zahlungsmodelle: 50% Anzahlung bei Projektstart, 50% bei Abnahme. Für das SCALE-PAKET sind auch Ratenzahlungen in 3-6 Monatsraten möglich. Alle Preise verstehen sich netto zzgl. MwSt.',
  },
  {
    question: 'Wie lange dauert die Umsetzung eines Pakets?',
    answer:
      'Das STARTER-PAKET ist in 3-4 Wochen umsetzbar. Das GROWTH-PAKET benötigt 6-8 Wochen. Für das SCALE-PAKET planen wir 10-14 Wochen ein. Genaue Timelines besprechen wir im Kick-off.',
  },
  {
    question: 'Was passiert nach Ablauf der kostenlosen Wartung?',
    answer:
      'Nach der Gratis-Wartungsphase können Sie unseren regulären Support buchen: Basis (€150/Monat), Business (€300/Monat) oder Enterprise (€500/Monat). Paket-Kunden erhalten 15% Rabatt auf alle Support-Pakete.',
  },
  {
    question: 'Sind die Preise verhandelbar?',
    answer:
      'Die Paket-Preise sind bereits stark reduziert (bis zu 36% Ersparnis). Für Non-Profits und Startups in der Gründungsphase bieten wir jedoch zusätzliche Sonderkonditionen. Sprechen Sie uns an!',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Pakete() {
  const [showComparison, setShowComparison] = useState(false)

  const renderFeatureValue = (value) => {
    if (value === true) {
      return <Check className="w-5 h-5 text-green-500 mx-auto" />
    }
    if (value === false) {
      return <X className="w-5 h-5 text-gray-300 dark:text-gray-600 mx-auto" />
    }
    return (
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {value}
      </span>
    )
  }

  return (
    <div>
      <title>Pakete &amp; Preise - Bis zu 36% sparen | GTSH Engineering</title>
      <meta
        name="description"
        content="Service-Pakete von GTSH Engineering: Starter ab €3.500, Growth ab €6.500, Scale ab €12.000. Bis zu 36% sparen mit gebündelten Leistungen. Web, KI, Automation & Design."
      />
      <link rel="canonical" href="https://gtsh-engineering.de/pakete" />

      {/* Hero / Header */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              Bis zu 36% Ersparnis gegenueber Einzelbuchung
            </span>
            <h1 className="mb-6">Service-Pakete mit bis zu 36% Ersparnis</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Kombinieren Sie Web-Development, KI-Integration, Automation und Design
              in einem Paket - und sparen Sie dabei bares Geld.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Package Cards */}
      <section className="section dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-4 text-gray-900 dark:text-white">
                Drei Pakete. Ein Ziel: Ihr digitaler Erfolg.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Jedes Paket ist auf eine bestimmte Unternehmensphase zugeschnitten.
                Alle Preise netto zzgl. MwSt.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => {
                const Icon = pkg.icon
                return (
                  <motion.div
                    key={pkg.name}
                    className={`card relative flex flex-col ${
                      pkg.popular
                        ? 'border-2 border-secondary bg-gradient-to-br from-secondary/5 to-primary/5 md:-mt-4 md:mb-0 md:pb-10'
                        : 'border-2 border-gray-200 dark:border-gray-600'
                    }`}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={cardVariants}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs px-4 py-1 rounded-full font-semibold">
                        BELIEBT
                      </span>
                    )}

                    {/* Header */}
                    <div className="text-center mb-6">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                          pkg.popular
                            ? 'bg-gradient-to-br from-secondary to-primary'
                            : 'bg-gradient-to-br from-primary to-primary-dark'
                        }`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 dark:text-white">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-gray-500 line-through">
                        &euro;{pkg.originalPrice}
                      </p>
                      <p
                        className={`text-4xl font-bold ${
                          pkg.popular ? 'text-secondary' : 'text-primary'
                        }`}
                      >
                        &euro;{pkg.price}
                      </p>
                      <span className="inline-block bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm font-semibold px-3 py-1 rounded-full mt-2">
                        {pkg.savings} Ersparnis
                      </span>
                    </div>

                    {/* Included Items */}
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                      {pkg.items.map((item) => (
                        <li key={item.name} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>
                            {item.name}{' '}
                            <span className="text-sm text-gray-400">
                              ({item.value})
                            </span>
                          </span>
                        </li>
                      ))}
                      {pkg.extras.map((extra) => (
                        <li key={extra} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{extra}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Ideal for */}
                    <div className="border-t border-gray-200 dark:border-gray-600 pt-4 mb-6">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Ideal für:{' '}
                        <span className="font-semibold text-gray-700 dark:text-gray-200">
                          {pkg.idealFor}
                        </span>
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      to="/contact"
                      className={`${
                        pkg.popular ? 'btn-secondary' : 'btn-primary'
                      } w-full text-center`}
                    >
                      {pkg.name.replace('-PAKET', '')}-Paket anfragen
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="mb-4 text-gray-900 dark:text-white">
                Was ist enthalten?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Detaillierter Vergleich aller Pakete auf einen Blick.
              </p>
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="inline-flex items-center gap-2 text-primary dark:text-secondary font-semibold hover:underline"
              >
                {showComparison
                  ? 'Vergleich ausblenden'
                  : 'Vergleichstabelle anzeigen'}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    showComparison ? 'rotate-180' : ''
                  }`}
                />
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
                      <th className="text-left py-4 px-4 text-gray-700 dark:text-gray-300 font-semibold">
                        Leistung
                      </th>
                      {packages.map((pkg) => (
                        <th
                          key={pkg.name}
                          className={`text-center py-4 px-4 font-bold ${
                            pkg.popular
                              ? 'text-secondary'
                              : 'text-gray-900 dark:text-white'
                          }`}
                        >
                          <div>{pkg.name.replace('-PAKET', '')}</div>
                          <div
                            className={`text-lg ${
                              pkg.popular ? 'text-secondary' : 'text-primary'
                            }`}
                          >
                            &euro;{pkg.price}
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr
                        key={row.key}
                        className={`border-b border-gray-100 dark:border-gray-700 ${
                          i % 2 === 0
                            ? 'bg-white dark:bg-gray-800'
                            : 'bg-gray-50 dark:bg-gray-750'
                        }`}
                      >
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">
                          {row.label}
                        </td>
                        {packages.map((pkg) => (
                          <td
                            key={`${pkg.name}-${row.key}`}
                            className="py-3 px-4 text-center"
                          >
                            {renderFeatureValue(pkg.features[row.key])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Why Packages */}
      <section className="section dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="mb-4 text-gray-900 dark:text-white">
                Warum ein Paket statt Einzelbuchung?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                    %
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  Bis zu 36% sparen
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Gebündelte Leistungen bedeuten weniger Overhead und bessere Preise
                  für Sie. Je größer das Paket, desto höher die Ersparnis.
                </p>
              </motion.div>

              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    1
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  Ein Ansprechpartner
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Kein Abstimmungs-Chaos zwischen Agenturen. Alles aus einer Hand,
                  alles perfekt aufeinander abgestimmt.
                </p>
              </motion.div>

              <motion.div
                className="card text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    &infin;
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 dark:text-white">
                  Konsistentes Ergebnis
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Website, Branding und KI-Integration greifen nahtlos ineinander.
                  Das Ergebnis ist ein stimmiges Gesamtbild.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="mb-4 text-gray-900 dark:text-white">
                Häufige Fragen zu unseren Paketen
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Alles was Sie über unsere Service-Pakete wissen müssen
              </p>
            </motion.div>

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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Phone className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="mb-6">15-Min Strategy Call buchen</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              In 15 Minuten finden wir heraus, welches Paket am besten zu Ihnen passt.
              Kostenlos und unverbindlich.
            </p>
            <Link to="/contact" className="btn-secondary text-lg">
              Jetzt Termin vereinbaren
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
