import { motion } from 'framer-motion'
import NumberCounter from './NumberCounter'
import { TrendingUp, Users, Mail, Clock } from 'lucide-react'

const stats = [
  {
    icon: Mail,
    number: 4000,
    suffix: '+',
    label: 'E-Mails automatisch sortiert',
    sublabel: 'Letzte Woche',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Users,
    number: 5,
    suffix: '',
    label: 'Unternehmen nutzen unsere KI',
    sublabel: 'Aus der Region',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Clock,
    number: 80,
    suffix: '%',
    label: 'Weniger Zeit im Posteingang',
    sublabel: 'Durchschnittliche Ersparnis',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TrendingUp,
    number: 40,
    suffix: 'km',
    label: 'Einzugsgebiet ohne Konkurrenz',
    sublabel: 'Einziger Anbieter in der Region',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function TrustStats() {
  return (
    <section className="section bg-black/50 backdrop-blur-md border-y border-primary/30 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-primary/20 text-primary text-sm px-4 py-2 rounded-full font-semibold mb-4">
            Fakten statt Versprechen
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Zahlen, die für sich sprechen
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Konkrete Ergebnisse aus realen Projekten in der Region.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 hover:border-primary/50 rounded-2xl p-6 text-center transition-all duration-300 hover:transform hover:scale-105">
                  
                  {/* Gradient Top Bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${stat.color}`} />
                  
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 mx-auto`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Number */}
                  <div className="mb-2">
                    <span className="text-5xl font-bold gradient-text-animated">
                      <NumberCounter end={stat.number} duration={2000} />
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-white font-semibold mb-1">
                    {stat.label}
                  </p>
                  
                  {/* Sublabel */}
                  <p className="text-sm text-gray-400">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm">
            * Zahlen basieren auf realen Projekten aus Q1 2026. Ergebnisse können variieren.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
