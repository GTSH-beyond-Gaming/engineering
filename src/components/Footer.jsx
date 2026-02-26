import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black/95 backdrop-blur-md text-white/90 border-t border-primary/30 transition-colors duration-300">
      <div className="absolute inset-0 bg-mesh-gradient opacity-0 dark:opacity-5"></div>
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/logo.webp" 
                alt="GTSH Engineering Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Engineering-Excellence für moderne Unternehmen.
              KI-gestützte Lösungen aus Saalfeld.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/leistungen" className="hover:text-primary transition-colors">Leistungen</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/fallstudie" className="hover:text-primary transition-colors">Fallstudie</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">Über Uns</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/leistungen#web" className="hover:text-primary transition-colors">Web-Engineering</Link></li>
              <li><Link to="/leistungen#automation" className="hover:text-primary transition-colors">Business Automation</Link></li>
              <li><Link to="/ki-schulungen" className="hover:text-primary transition-colors">KI-Schulungen</Link></li>
              <li><Link to="/leistungen#pakete" className="hover:text-primary transition-colors">Service-Pakete</Link></li>
              <li><Link to="/leistungen#private-ai" className="hover:text-primary transition-colors">Private AI</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm">
              <li>Randolf Hahn</li>
              <li>Saalfeld, Thüringen</li>
              <li>
                <a href="mailto:info@gtsh-engineering.de" className="hover:text-primary transition-colors">
                  info@gtsh-engineering.de
                </a>
              </li>
              <li>
                <a href="tel:+4917684940127" className="hover:text-primary transition-colors">
                  +49 176 84940127
                </a>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.linkedin.com/in/randolf-hahn-cdpl-81868b2b3/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
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



