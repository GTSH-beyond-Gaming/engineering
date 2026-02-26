function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <title>Datenschutzerklärung | GTSH Engineering</title>
      <meta name="description" content="Datenschutzerklärung der GTSH Engineering. Informationen zur Datenverarbeitung gemäß DSGVO." />
      <link rel="canonical" href="https://gtsh-engineering.de/datenschutz" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
          Datenschutzerklärung
        </h1>
        
        <p className="text-gray-500 dark:text-gray-400 mb-12">
          Transparenz über die Verarbeitung Ihrer Daten
        </p>

        {/* Überblick */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Überblick
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung 
            von personenbezogenen Daten (nachfolgend kurz „Daten") auf dieser Website auf. 
            Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung" oder 
            „Verantwortlicher" verweisen wir auf die Definitionen im Art. 4 der 
            Datenschutzgrundverordnung (DSGVO).
          </p>
        </section>

        {/* Verantwortlicher */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Verantwortlicher
          </h2>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <p className="font-medium text-gray-900 dark:text-white">Randolf Hahn</p>
            <p>GTSH Engineering</p>
            <p>Kircherstraße 26</p>
            <p>07318 Saalfeld/Saale</p>
            <div className="pt-3 space-y-2">
              <a 
                href="tel:+4917684940127" 
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span>Telefon:</span>
                <span className="underline">+49 176 84940127</span>
              </a>
              <a 
                href="mailto:randolf-hahn@gtsh-beyond-gaming.de" 
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                <span>E-Mail:</span>
                <span className="underline">randolf-hahn@gtsh-beyond-gaming.de</span>
              </a>
            </div>
          </div>
        </section>

        {/* Hosting & Server-Logs */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Hosting & Server-Logs
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Diese Website wird bei IONOS by 1&1 gehostet. Der Anbieter erhebt in sog. Server-Logfiles 
            folgende Daten, die Ihr Browser übermittelt:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Zeitzonendifferenz zur Greenwich Mean Time</li>
            <li>Inhalt der Anforderung (konkrete Seite)</li>
            <li>HTTP-Statuscode</li>
            <li>Übertragene Datenmenge</li>
            <li>Website, von der die Anforderung kommt</li>
            <li>Browser und Betriebssystem</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Die Speicherung erfolgt zur Sicherstellung eines stabilen und sicheren Betriebs der Website 
            sowie zur Optimierung unseres Angebotes und basiert auf Art. 6 Abs. 1 lit. f DSGVO. 
            Die Server-Logfiles werden nach spätestens 7 Tagen automatisch gelöscht.
          </p>
        </section>

        {/* Cookies & Google Consent Mode */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Cookies & Google Consent Mode V2
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Unsere Website nutzt Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät 
            gespeichert werden. Wir setzen ausschließlich technisch notwendige Cookies ein, 
            die für die Funktionsfähigkeit der Website erforderlich sind (z.B. Cookie-Consent-Status, 
            Dark Mode Präferenz).
          </p>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            Google Consent Mode V2
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Wir haben Google Consent Mode V2 implementiert. Dies bedeutet: Google Analytics wird{" "}
            <strong>nur nach Ihrer ausdrücklichen Zustimmung</strong> aktiviert. Standardmäßig sind 
            alle Analytics-Funktionen deaktiviert und werden erst nach Ihrer Einwilligung über das 
            Cookie-Banner geladen. Sie können Ihre Einwilligung jederzeit über das Cookie-Banner 
            (erneut aufrufbar am unteren Bildschirmrand) widerrufen.
          </p>
        </section>

        {/* Kontaktformular & Formspree */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Kontaktformular (Formspree)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
            Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
            der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Für die technische Verarbeitung der Formulardaten nutzen wir den Dienst <strong>Formspree, Inc.</strong> (USA).
            Formspree verarbeitet Ihre eingegebenen Daten ausschließlich zum Zweck der Weiterleitung an uns.
            Weitere Informationen finden Sie in der{" "}
            <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Datenschutzerklärung von Formspree
            </a>.
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
            bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
            Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen bleiben unberührt.
          </p>
        </section>

        {/* Calendly */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Terminbuchung (Calendly)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Für die Online-Terminbuchung nutzen wir den Dienst <strong>Calendly LLC</strong> (USA).
            Beim Buchen eines Termins werden Ihr Name, Ihre E-Mail-Adresse und ggf. weitere von Ihnen
            eingegebene Daten an Calendly übermittelt. Calendly verarbeitet diese Daten zur
            Terminverwaltung und -bestätigung.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Die Nutzung von Calendly erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO
            (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
            einer effizienten Terminplanung). Weitere Informationen finden Sie in der{" "}
            <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Datenschutzerklärung von Calendly
            </a>.
          </p>
        </section>

        {/* Microsoft Clarity */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Webanalyse (Microsoft Clarity)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Nach Ihrer ausdrücklichen Einwilligung über das Cookie-Banner nutzen wir <strong>Microsoft Clarity</strong>,
            einen Webanalysedienst der Microsoft Corporation (USA). Clarity erfasst anonymisierte Nutzungsdaten
            wie Mausbewegungen, Klicks und Scrollverhalten, um die Benutzerfreundlichkeit unserer Website zu verbessern.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Microsoft Clarity wird <strong>erst nach Ihrer Zustimmung</strong> geladen und setzt Cookies zur
            Wiedererkennung. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
            (Einwilligung). Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen im Footer widerrufen.
            Weitere Informationen finden Sie in der{" "}
            <a href="https://privacy.microsoft.com/de-de/privacystatement" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Datenschutzerklärung von Microsoft
            </a>.
          </p>
        </section>

        {/* Google Analytics */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Webanalyse (Google Analytics 4)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Nach Ihrer ausdrücklichen Einwilligung über das Cookie-Banner nutzen wir <strong>Google Analytics 4</strong>,
            einen Webanalysedienst der Google Ireland Limited. Google Analytics verwendet Cookies, die eine Analyse
            der Nutzung unserer Website ermöglichen. IP-Adressen werden anonymisiert (<code>anonymize_ip</code>).
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Wir haben <strong>Google Consent Mode V2</strong> implementiert. Google Analytics wird erst nach Ihrer
            ausdrücklichen Zustimmung aktiviert. Ohne Ihre Einwilligung werden keine Analysedaten erfasst.
            Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
            Sie können Ihre Einwilligung jederzeit über die Cookie-Einstellungen im Footer widerrufen.
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Weitere Informationen finden Sie in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Datenschutzerklärung von Google
            </a>.
          </p>
        </section>

        {/* WhatsApp */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            WhatsApp-Kontakt
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Unsere Website enthält einen Link zur Kontaktaufnahme über <strong>WhatsApp</strong> (Meta Platforms Ireland Limited).
            Beim Klick auf den WhatsApp-Button werden Sie auf die WhatsApp-Plattform weitergeleitet.
            Es werden keine Daten von unserer Website an WhatsApp übertragen, bevor Sie den Link aktiv anklicken.
            Die weitere Datenverarbeitung erfolgt durch WhatsApp gemäß deren{" "}
            <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:underline">
              Datenschutzerklärung
            </a>.
          </p>
        </section>

        {/* Ihre Rechte */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Ihre Rechte (DSGVO)
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
            Sie haben jederzeit das Recht:
          </p>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <li className="flex gap-2">
              <strong className="text-gray-900 dark:text-white shrink-0">Auskunft</strong>
              <span>über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)</span>
            </li>
            <li className="flex gap-2">
              <strong className="text-gray-900 dark:text-white shrink-0">Berichtigung</strong>
              <span>unrichtiger oder unvollständiger Daten zu verlangen (Art. 16 DSGVO)</span>
            </li>
            <li className="flex gap-2">
              <strong className="text-gray-900 dark:text-white shrink-0">Löschung</strong>
              <span>Ihrer gespeicherten Daten zu fordern (Art. 17 DSGVO)</span>
            </li>
            <li className="flex gap-2">
              <strong className="text-gray-900 dark:text-white shrink-0">Einschränkung</strong>
              <span>der Verarbeitung Ihrer Daten zu verlangen (Art. 18 DSGVO)</span>
            </li>
            <li className="flex gap-2">
              <strong className="text-gray-900 dark:text-white shrink-0">Datenübertragbarkeit</strong>
              <span>zu fordern (Art. 20 DSGVO)</span>
            </li>
            <li className="flex gap-2">
              <strong className="text-gray-900 dark:text-white shrink-0">Widerspruch</strong>
              <span>gegen die Verarbeitung Ihrer Daten einzulegen (Art. 21 DSGVO)</span>
            </li>
            <li className="flex gap-2">
              <strong className="text-gray-900 dark:text-white shrink-0">Beschwerde</strong>
              <span>bei einer Aufsichtsbehörde einzureichen (Art. 77 DSGVO)</span>
            </li>
          </ul>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            <strong>Widerruf Ihrer Einwilligung:</strong> Sofern die Verarbeitung auf Ihrer Einwilligung 
            beruht, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. 
            Die Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung 
            bleibt davon unberührt.
          </p>
        </section>

        {/* SSL-Verschlüsselung */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            SSL/TLS-Verschlüsselung
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
            Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
            daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an 
            dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </section>

        {/* Änderungen */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Änderungen dieser Datenschutzerklärung
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
            rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
            Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue 
            Datenschutzerklärung.
          </p>
        </section>

        {/* Stand */}
        <section className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 mb-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-500">
          <h2 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
            Stand
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            13. Februar 2026
          </p>
        </section>

        <p className="text-xs text-gray-400 dark:text-gray-500 mt-8">
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

export default Datenschutz;