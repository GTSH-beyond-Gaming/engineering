import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-white mb-4">
          Seite nicht gefunden
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Die angeforderte Seite existiert nicht oder wurde verschoben. 
          Kein Problem — wir bringen Sie zurück auf Kurs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            Zur Startseite
          </Link>
          <Link to="/contact" className="btn-secondary">
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </div>
  )
}
