import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <title>Über Uns - Randolf Hahn & GTSH Engineering | Saalfeld, Thüringen</title>
      <meta name="description" content="GTSH Engineering: Gegründet von Randolf Hahn in Saalfeld. Vom Handwerk zur digitalen Transformation. KI-nativ, praxisorientiert, für KMU." />
      <link rel="canonical" href="https://gtsh-engineering.de/about" />

      {/* Header */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
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
          <h2 className="mb-6 text-white">Vom Fundament zum Code</h2>
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg text-white/90 text-white/90 mb-4">
              <strong>Bevor ich Code schrieb, lernte ich, wie man Stein bricht.</strong> 2001, Rudolstadt. Ich war 16 und stand in einer Baugrube, die das Fundament für einen Fahrstuhlschacht werden sollte. Kubikmeter um Kubikmeter – achtzig Prozent davon massiver Fels. Drei Jahre Ausbildung zum Maurer, drei Jahre Kampf gegen das Material. Kurz vor dem Ziel kam der härteste Schlag – und der kam nicht vom Stein: Jemand aus meinem direkten Umfeld versuchte, mir den Abschluss zu sabotieren. Systematisches Gerede hinter meinem Rücken. Das Ziel war klar: Ich sollte scheitern. Ich habe die Ausbildung trotzdem gut abgeschlossen. <strong>Ein Fundament entsteht nicht durch Glück, sondern durch Beständigkeit – besonders wenn der Boden hart ist wie Eisen.</strong>
            </p>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <p className="text-lg text-white/90 text-white/90 mb-4">
              <strong>Disziplin ist keine Frage der Situation, sondern des Charakters.</strong> 2004 ging ich zur Bundeswehr – als Krisenreaktionskraft in die Heeresfliegerblockausbildung. Eine erweiterte Grundausbildung, die dich an deine Grenzen bringt. Bei einer Flussüberquerung in voller Ausrüstung sah ich, wie Kameraden am Limit waren. Also nahm ich ihnen das Gepäck ab und brachte es selbst durch – damit alle sicher ans andere Ufer kamen. Sportliche Leistungen und Schießergebnisse auf sehr gutem Niveau. Aber die echte Belohnung war nicht der LKW-Führerschein oder der Flug im Helikopter über die verschneiten Pyrenäen – es waren die Tränen der Kameraden bei meinem Abschied. <strong>Auf diesen Mann ist Verlass. Das war der Ruf, den ich mir verdient habe.</strong>
            </p>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <p className="text-lg text-white/90 text-white/90 mb-4">
              <strong>Nicht jeder Arbeitgeber verdient deinen vollen Einsatz – aber du gibst ihn trotzdem.</strong> Parallel zur Bundeswehr machte ich meine zweite Ausbildung: Kfz-Mechatroniker. Danach anderthalb Jahre im Beruf. Ich habe schnell gelernt, dass Einsatz nicht automatisch belohnt wird. Chefs, die sich teure Autos gönnten, während Lehrlinge auf ihre Vergütung warten mussten. Unternehmen, die insolvent gingen. Werkstätten, in denen du die Arbeit von drei Leuten erledigst und bei der Frage nach fairer Bezahlung ein trockenes Nein bekommst. Ich habe keine Szene gemacht. Ich habe die Konsequenz gezogen und gewechselt. <strong>Wer seinen eigenen Wert kennt, bleibt nicht dort, wo er nicht gesehen wird.</strong>
            </p>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <p className="text-lg text-white/90 text-white/90 mb-4">
              <strong>160 Meter über dem Abgrund lernst du, wer du wirklich bist.</strong> 2012 wechselte ich in die Windkraft – als Industriekletterer. Fünf Jahre in der Höhe. Eines Tages waren wir oben in der Gondel einer Windkraftanlage, als das Wetter kippte. Ein Gewitter, das in Minuten von Regen zu Hagel eskalierte. Die Luft knisterte, das Metall summte, und Eis hämmerte gegen das Gehäuse. Wir mussten evakuieren – sofort. Auf der Leiter geschah es: Mein Kollege erstarrte. Todesangst. Seine Hände wie mit dem Stahl verschmolzen. In diesem Moment gab es kein Handbuch. Ich habe ihn im Sturm überstiegen und uns beide Zentimeter für Zentimeter nach unten geführt. <strong>Echte Führung beweist sich nicht im Meetingraum – sondern wenn der Blitz einschlägt und der Boden unter dir verschwindet.</strong>
            </p>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <p className="text-lg text-white/90 text-white/90 mb-4">
              <strong>Verantwortung ist der stärkste Kompass der Welt.</strong> 2015 wurde meine Tochter Mira geboren – und mein Leben bekam eine neue Gravitation. Ich verließ die Windkraft und kämpfte mich über die Leiharbeit mit einer entschlossenen internen Bewerbung in die Medizintechnik. Seit 2019 fest angestellt. Ich baue Fertigungslinien auf, trainiere Techniker an hochkomplexen Systemen und entwickle E-Learning-Strukturen. <strong>Vom Lehm an den Stiefeln bis zur Präzision der Robotik – jede Station war ein notwendiges Puzzleteil für das, was heute daraus wächst.</strong>
            </p>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-transparent rounded-r-lg">
              <p className="text-lg text-white/90 text-white/90 italic">
                <strong>Die meisten Entwickler waren noch nie auf einer Baustelle. Ich habe den Stein gespürt, bevor ich den ersten PC gebaut habe. Heute löse ich digitale Probleme mit der Mentalität eines Handwerkers: Ehrlich. Belastbar. Ohne Ausreden.</strong>
              </p>
            </blockquote>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <p className="text-lg text-white/90 text-white/90 mb-4">
              <strong>Ich bin kein klassischer Entwickler – ich bin ein Schnelllerner mit 20 Jahren Praxishärte.</strong> Seit 2022 baue ich mit GTSH Custom-PCs – 11 Fünf-Sterne-Bewertungen sprechen für sich. Ende 2025 kam der nächste logische Schritt: Programmieren. Nicht als Hobby, sondern als Werkzeug. Mein Vorteil ist nicht, dass ich seit zehn Jahren Code schreibe. Mein Vorteil ist, dass ich verstehe, wie reale Arbeit funktioniert – und dass ich mir Dinge in einem Tempo aneigne, das andere überrascht. Ich arbeite KI-nativ: Mein eigener Bot läuft, mein Workflow steht, und mein Ziel ist klar. <strong>Lokale KI-Modelle und praxisnahe Agenten, zugeschnitten auf die realen Anwendungsfälle kleiner und mittelständischer Unternehmen.</strong> Keine Buzzwords. Lösungen, die funktionieren – gebaut von jemandem, der weiß, wie der Alltag in einem KMU wirklich aussieht.
            </p>
            <p className="text-lg text-white/90 text-white/90 mb-4">
              <strong>Wir machen weiter. Auch wenn es hart wird. Besonders dann.</strong>
            </p>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            <h3 className="text-xl font-semibold mb-4 text-white">Abseits des Codes</h3>
            <p className="text-lg text-white/90 text-white/90">
              Wenn ich nicht gerade digitale Systeme baue, findet man mich mit der Gitarre in der Hand oder beim Sport. Musik und Bewegung sind für mich kein Zeitvertreib – sie sind Training für den Fokus. Familie, Klang und Bewegung. <strong>Das sind die Dinge, die mich erden und mich daran erinnern, warum ich für jedes Projekt alles gebe.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="mb-4 text-white">Mission</h3>
              <p className="text-white/90 text-white/90">
                Wir helfen Unternehmen, ihre digitale Transformation konkret umzusetzen. 
                Mit moderner Technologie, transparenten Prozessen und messbaren Resultaten.
              </p>
              <ul className="mt-4 space-y-2 text-white/90 text-white/90">
                <li>✓ Technologie die funktioniert</li>
                <li>✓ ROI-fokussierte Lösungen</li>
                <li>✓ Ehrliche Beratung</li>
                <li>✓ Langfristige Partnerschaften</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="mb-4 text-white">Vision</h3>
              <p className="text-white/90 text-white/90">
                Wir wollen der führende Partner für digitale Transformation in Thüringen werden. 
                Ein Unternehmen, das für Excellence, Innovation und Verlässlichkeit steht.
              </p>
              <ul className="mt-4 space-y-2 text-white/90 text-white/90">
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
          <h2 className="text-center mb-12 text-white">Unsere Werte</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-white">Qualität</h3>
              <p className="text-white/80 text-white/90">
                Code der läuft. Designs die konvertieren. Lösungen die halten.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 text-white">Effizienz</h3>
              <p className="text-white/80 text-white/90">
                Keine Buzzwords. Keine Spielereien. Nur Resultate die zählen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-white">Partnerschaft</h3>
              <p className="text-white/80 text-white/90">
                Wir sind nicht nur Dienstleister – wir sind Partner für Ihren Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-transparent">
        <div className="container-custom max-w-6xl">
          <h2 className="text-center mb-12 text-white">Das Team</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Randy */}
            <div className="card flex flex-col items-center text-center">
              {/* Photo */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary shadow-glow">
                <img 
                  src="/portrait-randy.png" 
                  alt="Randolf Hahn - Founder & Lead Engineer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="192"
                  height="192"
                />
              </div>
              
              <h3 className="mb-2 text-white">Randolf Hahn</h3>
              <p className="text-primary font-semibold mb-4">Founder & Lead Engineer</p>
              <p className="text-white/90 text-white/90 mb-4">
                IT-Consultant mit jahrelanger Erfahrung in Web-Engineering,
                Business Automation und KI-Schulungen. Spezialisiert auf KI-Integration
                und digitale Transformation für KMUs.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">Python</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">PowerShell</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">KI-Integration</span>
                <span className="text-xs bg-primary text-white px-3 py-1 rounded-full">Automation</span>
              </div>
            </div>

            {/* Clawdius (Der Überhummer) */}
            <div className="card flex flex-col items-center text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary/20">
              {/* Lobster Avatar */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-secondary shadow-glow-teal bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <span className="text-8xl">🦞</span>
              </div>
              
              <h3 className="mb-2 text-white">Clawdius</h3>
              <p className="text-white/80 font-semibold mb-4">KI-Assistent & Co-Engineer ("Der Überhummer")</p>
              <p className="text-white/90 text-white/90 mb-4">
                Powered by Claude (Anthropic). Unterstützt Randy bei Coding, 
                Automation, Research und Dokumentation. Arbeitet 24/7 und 
                lernt kontinuierlich dazu.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">Claude AI</span>
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">Automation</span>
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">24/7 Verfügbar</span>
                <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full">Continuous Learning</span>
              </div>

              {/* Fun Fact */}
              <div className="mt-6 p-4 bg-transparent rounded-lg border border-secondary/20">
                <p className="text-sm text-white/90 text-white/90 italic">
                  "Randy's Hummer-Bruder" 🦞💪 - Gemeinsam bauen wir die Zukunft!
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
          <h2 className="text-center mb-12 text-white">Unsere Technologien</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React", "Next.js", "Node.js", "Python", 
              "PowerShell", "Tailwind CSS", "PostgreSQL", "MongoDB",
              "AWS", "Docker", "Git", "OpenAI"
            ].map((tech, i) => (
              <div key={i} className="card text-center hover:scale-110 transition-transform">
                <p className="font-semibold text-white/90 text-white/90">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
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



