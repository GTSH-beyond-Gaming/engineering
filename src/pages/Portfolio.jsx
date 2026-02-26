import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Star, Globe, Zap } from 'lucide-react'

const projects = [
  {
    id: 'gtsh-gaming',
    title: 'GTSH Beyond Gaming',
    subtitle: 'Gaming & Hardware Platform',
    url: 'https://gtsh-beyond-gaming.de',
    status: 'LIVE',
    statusColor: 'green',
    description: 'Unsere eigene Gaming & Hardware-Plattform. Cyber-Neon Design, interaktive Features, E-Commerce-ready. 5.0 Google Reviews.',
    screenshot: '/gtsh-gaming-screenshot.png',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    highlights: [
      'Cyber-Neon Design mit Custom Animations',
      'Easter Egg: Konami Code startet CYBER ASSAULT 2.0',
      'Integrierter Audio-Player mit eigenen Tracks',
      'Calendly-Integration für Terminbuchung',
      'Service-Grid mit Neon-Glow-Effekten',
      'Gallery mit 140+ Wallpapers & Builds',
      'DSGVO-konform mit Cookie-Banner',
    ],
    results: [
      { label: 'Google Reviews', value: '5.0/5', icon: Star },
      { label: 'Performance', value: '90+', icon: Zap },
      { label: 'Bewertungen', value: '12', icon: Star },
    ],
  },
]

export default function Portfolio() {
  return (
    <div>
      <title>Portfolio - Echte Projekte & Referenzen | GTSH Engineering</title>
      <meta name="description" content="Unsere Referenzen: Live-Websites und aktuelle Projekte. GTSH Beyond Gaming, Randolf Hoppe und mehr. Echte Resultate aus Thüringen." />
      <link rel="canonical" href="https://gtsh-engineering.de/portfolio" />

      {/* Header */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6">Unsere Projekte & Referenzen</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Echte Projekte. Messbare Qualität. Von Gaming-Plattformen bis Handwerker-Websites.
          </p>
        </div>
      </section>

      {/* Projects */}
      {projects.map((project, index) => (
        <section
          key={project.id}
          className={`section ${index % 2 === 0 ? '' : 'bg-transparent'}`}
        >
          <div className="container-custom max-w-5xl">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                project.statusColor === 'green'
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  project.statusColor === 'green' ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'
                }`} />
                {project.status}
              </span>
            </motion.div>

            {/* Browser Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-2xl bg-transparent mb-8"
            >
              {/* Browser Bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-transparent">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-transparent rounded-md px-3 py-1.5 text-xs text-white/70 text-white/90 text-center font-mono max-w-md mx-auto">
                    {project.url.replace('https://', '')}
                  </div>
                </div>
                {project.status === 'LIVE' && (
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-green-100 dark:bg-green-900">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-green-600 dark:text-green-300">Live</span>
                  </div>
                )}
              </div>

              {/* Screenshot Area */}
              <div className="relative bg-transparent overflow-hidden" style={{ minHeight: '300px' }}>
                {project.screenshot ? (
                  <img
                    src={project.screenshot}
                    alt={`${project.title} Website Screenshot`}
                    className="w-full h-auto"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextElementSibling.style.display = 'flex'
                    }}
                  />
                ) : null}
                {/* Fallback Gradient - shows when no screenshot or on error */}
                <div className={`${project.screenshot ? 'hidden' : 'flex'} items-center justify-center h-64 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20`}>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Globe className="w-10 h-10 text-primary/60" />
                    </div>
                    <p className="text-white/80 font-semibold mb-1">Coming Soon</p>
                    <p className="text-white/50 text-sm">Screenshot folgt nach Launch</p>
                  </div>
                </div>

                {/* Hover Overlay */}
                {project.status === 'LIVE' && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-transparent text-primary font-semibold px-6 py-3 rounded-lg hover:bg-transparent transition-colors shadow-2xl"
                    >
                      Website live ansehen
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-1 text-white">{project.title}</h2>
                <p className="text-primary font-medium mb-4">{project.subtitle}</p>
                <p className="text-white/90 mb-6">{project.description}</p>

                <h4 className="font-semibold mb-3 text-white">Highlights:</h4>
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/90">
                      <span className="text-green-500 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-3 text-white">Tech-Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-transparent text-white/90 text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right: Results + CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Results */}
                <div className="card bg-gradient-to-br from-primary/5 dark:from-primary/10 to-secondary/5 dark:to-secondary/10 border border-primary/20 dark:border-primary/30">
                  <h4 className="font-semibold mb-4 text-white">Ergebnisse:</h4>
                  <div className="space-y-4">
                    {project.results.map((result, i) => {
                      const Icon = result.icon
                      return (
                        <div key={i} className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <div>
                            <div className="text-2xl font-bold text-white">{result.value}</div>
                            <p className="text-sm text-white/60">{result.label}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* CTA */}
                {project.status === 'LIVE' ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center flex items-center justify-center gap-2"
                  >
                    Website live ansehen
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="card border-2 border-dashed border-yellow-400/50 text-center">
                    <p className="text-white/90">
                      Launch geplant: <strong>März 2026</strong>
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* AI-Bildgenerierung Showcase */}
      <section className="section bg-transparent">
        <div className="container-custom max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-panel-light mb-8">
              <h2 className="mb-4 text-white">KI-Bildgenerierung</h2>
              <p className="text-lg text-white/90">
                Photorealistische Bilder für Marketing, Produktfotos und Content – 
                generiert mit unserer lokalen KI-Infrastruktur. Keine Cloud, keine Wartezeiten.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card hover:shadow-glow transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📸</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Produktfotos</h3>
                <p className="text-sm text-white/60">Hochwertige Produktbilder ohne Fotoshooting</p>
              </div>
              <div className="card hover:shadow-glow transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Marketing-Visuals</h3>
                <p className="text-sm text-white/60">Social Media, Ads, Banner – alles aus einer Hand</p>
              </div>
              <div className="card hover:shadow-glow transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🖼️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">Custom Content</h3>
                <p className="text-sm text-white/60">Einzigartige Bilder nach Ihren Vorgaben</p>
              </div>
            </div>
            <div className="mt-8">
              <Link to="/grafikdesign" className="btn-primary">
                Mehr über AI-Bildgenerierung →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Ihr Projekt könnte das nächste sein!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Lassen Sie uns gemeinsam etwas bauen, das Ergebnisse liefert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg">
              15-Min Strategy Call buchen
            </Link>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-lg transition-all text-lg">
              Alle Services ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}



