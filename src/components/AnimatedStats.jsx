import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function AnimatedStats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })
  
  const stats = [
    {
      value: 61,
      suffix: ' tok/s',
      label: 'Lokale KI-Power',
      description: 'qwen3:32b auf eigener Hardware',
      color: 'text-white/80'
    },
    {
      value: 0,
      prefix: '€',
      suffix: '',
      label: 'API-Kosten',
      description: 'Keine Cloud, keine laufenden Kosten',
      color: 'text-primary'
    },
    {
      value: 100,
      suffix: '%',
      label: 'DSGVO-konform',
      description: 'Keine Daten in US-Clouds',
      color: 'text-white/80'
    },
    {
      value: 95,
      suffix: '+',
      label: 'Lighthouse Score',
      description: 'Performance-optimiert',
      color: 'text-primary'
    }
  ]
  
  return (
    <section className="section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 text-white">Warum GTSH Engineering?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Zahlen die für sich sprechen. Performance, Transparenz und Qualität.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2`}
              >
                {stat.prefix}
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    suffix={stat.suffix}
                  />
                )}
              </motion.div>
              <p className="text-lg md:text-xl text-gray-300 mb-2 font-semibold">
                {stat.label}
              </p>
              <p className="text-xs md:text-sm text-white/60">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



