function Impressum() {
  return (
    <div className="min-h-screen bg-transparent transition-colors duration-500">
      <title>Impressum | GTSH Engineering - Saalfeld, Thüringen</title>
      <meta name="description" content="Impressum der GTSH Engineering / GTSH Digital Solutions. Betreiber: Randolf Hahn, Kircherstraße 26, 07318 Saalfeld/Saale." />
      <link rel="canonical" href="https://gtsh-engineering.de/impressum" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Impressum
        </h1>
        
        <p className="text-white/60 mb-12">
          Angaben gemäß § 5 TMG
        </p>

        {/* Betreiber */}
        <section className="bg-transparent rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Betreiber
          </h2>
          <div className="space-y-2 text-white/90">
            <p className="font-medium text-white">Randolf Hahn</p>
            <p>GTSH Engineering</p>
            <p>Kircherstraße 26</p>
            <p>07318 Saalfeld/Saale</p>
            <p className="text-sm text-white/60 mt-2">
              Kleinunternehmer gemäß § 19 UStG
            </p>
          </div>
        </section>

        {/* Kontakt */}
        <section className="bg-transparent rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Kontakt
          </h2>
          <div className="space-y-3">
            <a 
              href="tel:+4917684940127" 
              className="flex items-center gap-3 text-white/90 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+49 176 84940127</span>
            </a>
            <a 
              href="mailto:info@gtsh-engineering.de" 
              className="flex items-center gap-3 text-white/90 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@gtsh-engineering.de</span>
            </a>
            <div className="flex items-center gap-3 text-white/90">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Saalfeld, Thüringen</span>
            </div>
          </div>
        </section>

        {/* Verantwortlich */}
        <section className="bg-transparent rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
          </h2>
          <p className="text-white/90">Randolf Hahn</p>
          <p className="text-white/60 text-sm mt-1">
            (Anschrift wie oben)
          </p>
        </section>

        {/* Streitschlichtung */}
        <section className="bg-transparent rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Streitschlichtung
          </h2>
          <p className="text-white/90 mb-3">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <a 
              href="https://ec.europa.eu/consumers/odr/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="text-white/60 text-sm">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        {/* Haftung für Inhalte */}
        <section className="bg-transparent rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Haftung für Inhalte
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen 
            zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </section>

        {/* Haftung für Links */}
        <section className="bg-transparent rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Haftung für Links
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten 
            ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortig.
          </p>
          <p className="text-white/60 text-sm mt-3 leading-relaxed">
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
        </section>

        {/* Urheberrecht */}
        <section className="bg-transparent rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Urheberrecht
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <p className="text-xs text-white/60 text-white/70 mt-8">
          Quelle: Erstellt mit Unterstützung von{" "}
          <a 
            href="https://www.e-recht24.de" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 hover:underline"
          >
            e-recht24.de
          </a>
        </p>
      </div>
    </div>
  );
}

export default Impressum;


