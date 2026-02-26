import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-transparent dark:bg-gradient-to-br dark:from-gray-900 dark:via-dark-bg dark:to-dark-card text-white/90 text-white/90 border-t border-gray-200 dark:border-dark-border transition-colors duration-300">
      <div className="absolute inset-0 bg-mesh-gradient opacity-0 dark:opacity-5"></div>
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.png" 
                alt="GTSH Engineering Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-white/80 text-white/60 leading-relaxed">
              Engineering-Excellence für moderne Unternehmen.
              KI-gestützte Lösungen aus Saalfeld.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Leistungen</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Über Uns</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 text-white font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#web" className="hover:text-primary transition-colors">Web-Engineering</Link></li>
              <li><Link to="/services#automation" className="hover:text-primary transition-colors">Business Automation</Link></li>
              <li><Link to="/ki-schulungen" className="hover:text-primary transition-colors">KI-Schulungen</Link></li>
              <li><Link to="/grafikdesign" className="hover:text-primary transition-colors">Grafikdesign</Link></li>
              <li><Link to="/pakete" className="hover:text-primary transition-colors">Service-Pakete</Link></li>
              <li><Link to="/services#private-ai" className="hover:text-primary transition-colors">Private AI</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-900 text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>Randolf Hahn</li>
              <li>Saalfeld, Thüringen</li>
              <li>
                <a href="mailto:randolf-hahn@gtsh-beyond-gaming.de" className="hover:text-primary transition-colors">
                  randolf-hahn@gtsh-beyond-gaming.de
                </a>
              </li>
              <li>
                <a href="tel:+4917684940127" className="hover:text-primary transition-colors">
                  +49 176 84940127
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {currentYear} GTSH Engineering. Alle Rechte vorbehalten.</p>
          <div className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
            <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            <button
              onClick={() => window.dispatchEvent(new Event('open-cookie-settings'))}
              className="hover:text-primary transition-colors"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}



