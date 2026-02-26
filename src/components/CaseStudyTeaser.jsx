import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, Shield, Zap, ArrowRight, MessageSquare, Mail, Code } from 'lucide-react'

const scenarios = [
  { icon: MessageSquare, label: 'Kundenanfrage', time: '12.6s' },
  { icon: Mail, label: 'Business E-Mail', time: '10.5s' },
  { icon: Code, label: 'Code-Generierung', time: '15.4s' },
]

export default function CaseStudyTeaser() {
  return (
    <section className="section py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-8 lg:p-12">
              <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium mb-4">
                🔬 Fallstudie
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                KI-Assistent in <span className="text-orange-500">Aktion</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Echte Business-Szenarien, echte Antwortzeiten. 
                Sehen Sie, was lokale KI für Ihr Unternehmen leisten kann.
              </p>
              
              {/* Mini Stats */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  { icon: Clock, value: '~11s', label: 'Ø Antwortzeit' },
                  { icon: Shield, value: '100%', label: 'Lokal' },
                  { icon: Zap, value: '0€', label: 'API-Kosten' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-2 bg-black/40 border border-white/10 px-4 py-2 rounded-lg">
                    <stat.icon className="w-4 h-4 text-orange-500" />
                    <span className="font-bold text-white">{stat.value}</span>
                    <span className="text-gray-500 text-sm">{stat.label}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                to="/fallstudie" 
                className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-semibold transition-colors group"
              >
                Vollständige Fallstudie ansehen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Right: Scenario Cards */}
            <div className="bg-black/30 p-8 lg:p-12 flex items-center">
              <div className="space-y-4 w-full">
                {scenarios.map((scenario, i) => (
                  <motion.div
                    key={scenario.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                        <scenario.icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <span className="text-white font-medium">{scenario.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-orange-500">{scenario.time}</div>
                      <div className="text-xs text-gray-500">lokal</div>
                    </div>
                  </motion.div>
                ))}
                
                <div className="text-center pt-4">
                  <span className="text-gray-500 text-sm">+ 3 weitere Szenarien</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
