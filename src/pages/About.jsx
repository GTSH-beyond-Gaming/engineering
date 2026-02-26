import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function About() {
  const [showFullStory, setShowFullStory] = useState(false)
  
  return (
    <div>
      <title>Über Uns - Randolf Hahn & GTSH Engineering | Saalfeld, Thüringen</title>
      <meta name="description" content="GTSH Engineering: Gegründet von Randolf Hahn in Saalfeld. Vom Handwerk zur digitalen Transformation. KI-nativ, praxisorientiert, für KMU." />
      <link rel="canonical" href="https://gtsh-engineering.de/about" />

      {/* Header */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6">GTSH Engineering - Vom Handwerk zur digitalen Transformation</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Engineering-Excellence aus Saalfeld. Für die digitale Zukunft.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container-custom max-w-4xl">
          <div className="glass-panel">
            <h2 className="mb-6 text-white">Vom Fundament zum Code</h2>
            <div className="prose prose-lg dark:prose-invert">
            {/* Kurzversion - immer sichtbar */}
            <p className="text-lg text-white/90 mb-4">
              <strong>Bevor ich Code schrieb, lernte ich, wie man Stein bricht.</strong> Maurer, Bundeswehr, Kfz-Mechatroniker, Industriekletterer in der Windkraft, heute Medizintechnik. 20 Jahre Praxiserfahrung in harten Branchen — vom Fundament einer Baustelle bis zur Präzision der Robotik.
            </p>
            
            <p className="text-lg text-white/90 mb-4">
              <strong>Ich bin kein klassischer Entwickler — ich bin ein Schnelllerner mit Praxishärte.</strong> Seit 2022 baue ich mit GTSH Custom-PCs (11 Fünf-Sterne-Bewertungen). Ende 2025 kam der nächste Schritt: Programmieren. Nicht als Hobby, sondern als Werkzeug für echte Probleme.
            </p>

            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-transparent rounded-r-lg">
              <p className="text-lg text-white/90 italic">
                <strong>Die meisten Entwickler waren noch nie auf einer Baustelle. Ich habe den Stein gespürt, bevor ich den ersten PC gebaut habe. Heute löse ich digitale Probleme mit der Mentalität eines Handwerkers: Ehrlich. Belastbar. Ohne Ausreden.</strong>
              </p>
            </blockquote>

            <p className="text-lg text-white/90 mb-6">
              Ich arbeite KI-nativ: Mein eigener Bot läuft, mein Workflow steht. <strong>Lokale KI-Modelle und praxisnahe Agenten, zugeschnitten auf die realen Anwendungsfälle kleiner und mittelständischer Unternehmen.</strong>
            </p>

            {/* Expander Button */}
            <button
              onClick={() => setShowFullStory(!showFullStory)}
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mb-6"
            >
              {showFullStory ? 'Geschichte einklappen' : 'Die ganze Geschichte lesen'}
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${showFullStory ? 'rotate-180' : ''}`} />
            </button>

            {/* Ausklappbare Langversion */}
            {showFullStory && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <hr className="my-6 border-gray-200 dark:border-gray-700" />
                
                <p className="text-lg text-white/90 mb-4">
                  <strong>2001, Rudolstadt.</strong> Ich war 16 und stand in einer Baugrube, die das Fundament für einen Fahrstuhlschacht werden sollte. Kubikmeter um Kubikmeter – achtzig Prozent davon massiver Fels. Drei Jahre Ausbildung zum Maurer. Kurz vor dem Ziel kam der härteste Schlag – und der kam nicht vom Stein: Jemand aus meinem direkten Umfeld versuchte, mir den Abschluss zu sabotieren. Ich habe die Ausbildung trotzdem gut abgeschlossen. <strong>Ein Fundament entsteht nicht durch Glück, sondern durch Beständigkeit.</strong>
                </p>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <p className="text-lg text-white/90 mb-4">
                  <strong>2004: Bundeswehr.</strong> Krisenreaktionskraft in die Heeresfliegerblockausbildung. Bei einer Flussüberquerung in voller Ausrüstung sah ich, wie Kameraden am Limit waren. Also nahm ich ihnen das Gepäck ab und brachte es selbst durch. Die echte Belohnung waren die Tränen der Kameraden bei meinem Abschied. <strong>Auf diesen Mann ist Verlass.</strong>
                </p>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <p className="text-lg text-white/90 mb-4">
                  <strong>2012: Windkraft.</strong> Als Industriekletterer, fünf Jahre in der Höhe. Eines Tages kippte das Wetter — Gewitter, Hagel. Bei der Evakuierung erstarrte mein Kollege auf der Leiter. Todesangst. Ich habe ihn im Sturm überstiegen und uns beide Zentimeter für Zentimeter nach unten geführt. <strong>Echte Führung beweist sich, wenn der Blitz einschlägt.</strong>
                </p>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <p className="text-lg text-white/90 mb-4">
                  <strong>2015: Mira.</strong> Meine Tochter wurde geboren. Ich verließ die Windkraft und kämpfte mich in die Medizintechnik. Seit 2019 fest angestellt. Ich baue Fertigungslinien auf, trainiere Techniker und entwickle E-Learning-Strukturen. <strong>Jede Station war ein notwendiges Puzzleteil.</strong>
                </p>

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <h3 className="text-xl font-semibold mb-4 text-white">Abseits des Codes</h3>
                <p className="text-lg text-white/90">
                  Wenn ich nicht gerade digitale Systeme baue, findet man mich mit der Gitarre in der Hand oder beim Sport. Familie, Klang und Bewegung — <strong>das sind die Dinge, die mich erden.</strong>
                </p>
              </motion.div>
            )}
          </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="mb-4 text-white">Mission</h3>
              <p className="text-white/90">
                Wir helfen Unternehmen, ihre digitale Transformation konkret umzusetzen. 
                Mit moderner Technologie, transparenten Prozessen und messbaren Resultaten.
              </p>
              <ul className="mt-4 space-y-2 text-white/90">
                <li>✓ Technologie die funktioniert</li>
                <li>✓ ROI-fokussierte Lösungen</li>
                <li>✓ Ehrliche Beratung</li>
                <li>✓ Langfristige Partnerschaften</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="mb-4 text-white">Vision</h3>
              <p className="text-white/90">
                Wir wollen der führende Partner für digitale Transformation in Thüringen werden. 
                Ein Unternehmen, das für Excellence, Innovation und Verlässlichkeit steht.
              </p>
              <ul className="mt-4 space-y-2 text-white/90">
                <li>✓ KI-Integration die Sinn macht</li>
                <li>✓ Automation für alle</li>
                <li>✓ KI-Schulungen & Weiterbildung</li>
                <li>✓ Lokale Verwurzelung, globale Standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container-custom">
          <div className="glass-panel-light text-center mb-12">
            <h2 className="text-white">Unsere Werte</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-white">Qualität</h3>
              <p className="text-white/90">
                Code der läuft. Designs die konvertieren. Lösungen die halten.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-white">Effizienz</h3>
              <p className="text-white/90">
                Keine Buzzwords. Keine Spielereien. Nur Resultate die zählen.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-white">Partnerschaft</h3>
              <p className="text-white/90">
                Wir sind nicht nur Dienstleister – wir sind Partner für Ihren Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-transparent">
        <div className="container-custom max-w-6xl">
          <div className="glass-panel-light text-center mb-12">
            <h2 className="text-white">Das Team</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Randy */}
            <div className="card flex flex-col items-center text-center">
              {/* Photo */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary shadow-glow">
                <img 
                  src="/portrait-randy.webp" 
                  alt="Randolf Hahn - Founder & Lead Engineer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="192"
                  height="192"
                />
              </div>
              
              <h3 className="mb-2 text-white">Randolf Hahn</h3>
              <p className="text-primary font-semibold mb-4">Founder & Lead Engineer</p>
              <p className="text-white/90 mb-4">
                IT-Consultant mit jahrelanger Erfahrung in Web-Engineering,
                Business Automation und KI-Schulungen. Spezialisiert auf KI-Integration
                und digitale Transformation für KMUs.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mb-6">
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">Python</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">PowerShell</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">KI-Integration</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">Automation</span>
              </div>
              
              {/* CDLP Certification */}
              <div className="border-t border-gray-600 pt-4 w-full">
                <p className="text-xs text-white/60 mb-2">Zertifizierung:</p>
                <div className="flex items-center justify-center gap-3">
                  <img 
                    src="/cdlp-certificate.jpg" 
                    alt="CDLP Certificate - Instructional Design"
                    className="w-16 h-16 object-cover rounded border border-primary/30"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-white">CDLP</p>
                    <p className="text-xs text-white/70">Certified Digital Learning Professional</p>
                    <p className="text-xs text-primary">Instructional Design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clawdius - Digitaler Geschäftspartner */}
            <div className="card flex flex-col items-center text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              {/* Avatar */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-secondary shadow-glow">
                <img 
                  src="/clawdius-avatar.jpg" 
                  alt="Clawdius - KI-Assistent"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="192"
                  height="192"
                />
              </div>
              
              <h3 className="mb-2 text-white">Clawdius</h3>
              <p className="text-white/80 font-semibold mb-4">Digitaler Geschäftspartner & KI-Assistent</p>
              <p className="text-white/90 mb-4">
                Powered by Claude (Anthropic). Unterstützt bei Coding, 
                Automation, Research und Dokumentation. Arbeitet 24/7 und 
                lernt kontinuierlich dazu.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">Claude AI</span>
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">Automation</span>
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">24/7 Verfügbar</span>
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">Continuous Learning</span>
              </div>

              {/* Tagline */}
              <div className="mt-6 p-4 bg-transparent rounded-lg border border-secondary/20">
                <p className="text-sm text-white/90 italic">
                  Ihr digitaler Partner für effiziente Projektarbeit.
                </p>
              </div>
            </div>
          </div>

          {/* Team Philosophy */}
          <div className="mt-12 card bg-gradient-to-r from-primary to-secondary text-white text-center">
            <h3 className="mb-4">Mensch + KI = Optimale Resultate</h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Wir kombinieren menschliche Kreativität und Erfahrung mit KI-Power. 
              Das Ergebnis: Schnellere Entwicklung, höhere Qualität, innovative Lösungen.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container-custom">
          <div className="glass-panel-light text-center mb-12">
            <h2 className="text-white">Unsere Technologien</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              "React", "Vite", "Node.js", "Python", 
              "PowerShell", "Tailwind CSS", "PostgreSQL", "Git",
              "Claude", "Ollama"
            ].map((tech, i) => (
              <div key={i} className="card text-center hover:scale-110 transition-transform">
                <p className="font-semibold text-white/90">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Lassen Sie uns sprechen!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Bereit für Ihre digitale Transformation? Buchen Sie ein kostenloses Erstgespräch.
          </p>
          <Link to="/contact" className="btn-secondary text-lg">
            Termin vereinbaren
          </Link>
        </div>
      </section>
    </div>
  )
}



