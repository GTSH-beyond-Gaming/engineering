import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-primary/30 transition-colors duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.webp" 
              alt="GTSH Engineering Logo" 
              className="h-12 w-auto transition-transform group-hover:scale-110"
              width="48"
              height="48"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/90 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link to="/leistungen" className="text-white/90 hover:text-primary font-medium transition-colors">
              Leistungen
            </Link>
            <Link to="/portfolio" className="text-white/90 hover:text-primary font-medium transition-colors">
              Portfolio
            </Link>
            <Link to="/fallstudie" className="text-white/90 hover:text-primary font-medium transition-colors">
              Fallstudie
            </Link>
            <Link to="/about" className="text-white/90 hover:text-primary font-medium transition-colors">
              Über Uns
            </Link>

            <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm py-2 px-6 rounded-lg transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:scale-105">
              Kontakt
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Menü öffnen"
          >
            <svg className="w-6 h-6 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-white/90 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/leistungen" onClick={() => setIsOpen(false)} className="block py-2 text-white/90 hover:text-primary font-medium">
              Leistungen
            </Link>
            <Link to="/portfolio" onClick={() => setIsOpen(false)} className="block py-2 text-white/90 hover:text-primary font-medium">
              Portfolio
            </Link>
            <Link to="/fallstudie" onClick={() => setIsOpen(false)} className="block py-2 text-white/90 hover:text-primary font-medium">
              Fallstudie
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-white/90 hover:text-primary font-medium">
              Über Uns
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-2 btn-primary text-center">
              Kontakt
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
