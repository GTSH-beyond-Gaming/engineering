import { motion } from 'framer-motion'
import { Phone, FileText, Code, CheckCircle, Heart } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    title: 'Kennenlernen',
    subtitle: 'Kostenlos, 15 Minuten',
    description: 'Sie erzählen, was Sie brauchen. Wir hören zu und sagen ehrlich, ob und wie wir helfen können. Kein Verkaufsgespräch.',
    fear: 'Kostet mich das was? → Nein.',
  },
  {
    icon: FileText,
    title: 'Klares Angebot',
    subtitle: 'Innerhalb von 48 Stunden',
    description: 'Festpreis, kein Kleingedrucktes. Was drin ist, was es kostet, wie lange es dauert. Alles schwarz auf weiß.',
    fear: 'Wird das teurer als besprochen? → Nein. Festpreis.',
  },
  {
    icon: Code,
    title: 'Umsetzung',
    subtitle: 'Je nach Projekt 1-6 Wochen',
    description: 'Sie sehen regelmäßig Zwischenstände und können jederzeit Feedback geben. Keine Überraschungen nach 3 Monaten Funkstille.',
    fear: 'Muss ich technisch was verstehen? → Nein.',
  },
  {
    icon: CheckCircle,
    title: 'Abnahme & Go-Live',
    subtitle: 'Erst wenn Sie sagen: Passt!',
    description: 'Sie testen alles, wir optimieren. Bezahlung: 50% bei Start, 50% bei Abnahme. Fair für beide Seiten.',
    fear: 'Was wenn es mir nicht gefällt? → Wir ändern es.',
  },
  {
    icon: Heart,
    title: 'Danach',
    subtitle: 'Optional, kein Zwang',
    description: 'Wartung, Support, Weiterentwicklung — alles möglich, nichts muss. Kein Abo-Zwang, keine Knebelverträge.',
    fear: 'Bin ich danach gebunden? → Nein.',
  },
]

export default function ProcessSteps() {
  return (
    <section className="section bg-transparent" id="prozess">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 max-w-lg mx-auto"
        >
          <h2 className="mb-2 text-white">So läuft's bei uns</h2>
          <p className="text-lg text-white/70">
            Keine Überraschungen. Kein Fachchinesisch.
            Fünf klare Schritte von der Idee bis zum Ergebnis.
          </p>
        </motion.div>

        <div className="space-y-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-glow">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                    <h3 className="text-lg font-bold text-white">
                      {index + 1}. {step.title}
                    </h3>
                    <span className="text-sm text-primary font-medium">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-white/80 mb-2">{step.description}</p>
                  <p className="text-sm text-secondary/80 italic">
                    {step.fear}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
