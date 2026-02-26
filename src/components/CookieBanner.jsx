import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const CONSENT_KEY = 'gtsh_cookie_consent'
const CONSENT_VERSION = '1' // Increment to re-trigger banner after policy changes

/**
 * Loads Microsoft Clarity script dynamically (only after consent)
 */
function loadClarity() {
  if (document.getElementById('clarity-script')) return
  const script = document.createElement('script')
  script.id = 'clarity-script'
  script.async = true
  script.src = 'https://www.clarity.ms/tag/v8lokqsxwm'
  document.head.appendChild(script)
  window.clarity = window.clarity || function () {
    (window.clarity.q = window.clarity.q || []).push(arguments)
  }
}

/**
 * Updates Google Consent Mode V2
 */
function updateGoogleConsent(analyticsGranted, marketingGranted) {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'analytics_storage': analyticsGranted ? 'granted' : 'denied',
      'ad_storage': marketingGranted ? 'granted' : 'denied',
      'ad_user_data': marketingGranted ? 'granted' : 'denied',
      'ad_personalization': marketingGranted ? 'granted' : 'denied',
    })
  }
}

/**
 * Reads stored consent
 */
function getStoredConsent() {
  try {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (!stored) return null
    const parsed = JSON.parse(stored)
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

/**
 * Saves consent to localStorage
 */
function saveConsent(consent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    ...consent,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString()
  }))
}

/**
 * Applies consent settings (loads/blocks scripts)
 */
function applyConsent(consent) {
  updateGoogleConsent(consent.analytics, consent.marketing)

  if (consent.analytics) {
    loadClarity()
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState({
    necessary: true, // Always on
    analytics: false,
    marketing: false,
  })

  // Check for existing consent on mount
  useEffect(() => {
    const stored = getStoredConsent()
    if (stored) {
      setConsent({
        necessary: true,
        analytics: stored.analytics,
        marketing: stored.marketing,
      })
      applyConsent(stored)
    } else {
      setShowBanner(true)
    }
  }, [])

  // Listen for custom event to reopen banner (from Footer)
  useEffect(() => {
    const handler = () => {
      const stored = getStoredConsent()
      if (stored) {
        setConsent({
          necessary: true,
          analytics: stored.analytics,
          marketing: stored.marketing,
        })
      }
      setShowDetails(true)
      setShowBanner(true)
    }
    window.addEventListener('open-cookie-settings', handler)
    return () => window.removeEventListener('open-cookie-settings', handler)
  }, [])

  const handleAcceptAll = () => {
    const newConsent = { necessary: true, analytics: true, marketing: true }
    setConsent(newConsent)
    saveConsent(newConsent)
    applyConsent(newConsent)
    setShowBanner(false)
    setShowDetails(false)
  }

  const handleDeclineAll = () => {
    const newConsent = { necessary: true, analytics: false, marketing: false }
    setConsent(newConsent)
    saveConsent(newConsent)
    applyConsent(newConsent)
    setShowBanner(false)
    setShowDetails(false)
  }

  const handleSaveSelection = () => {
    saveConsent(consent)
    applyConsent(consent)
    setShowBanner(false)
    setShowDetails(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 bg-black/95 backdrop-blur-md border-t border-primary/30 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="container-custom max-w-5xl mx-auto">
            {/* Main Banner */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1 text-base">
                  Cookie-Einstellungen
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  Wir verwenden Cookies und ähnliche Technologien, um unsere Website zu optimieren.
                  Einige sind technisch notwendig, andere helfen uns, die Nutzererfahrung zu verbessern.
                  Sie können wählen, welche Kategorien Sie zulassen möchten.{' '}
                  <Link to="/datenschutz" className="text-primary hover:underline font-medium">
                    Datenschutzerklärung
                  </Link>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0 w-full lg:w-auto">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="px-5 py-2.5 text-sm border border-gray-300 dark:border-gray-600 text-white/90 hover:bg-transparent dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                >
                  {showDetails ? 'Weniger' : 'Einstellungen'}
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="px-5 py-2.5 text-sm border border-gray-300 dark:border-gray-600 text-white/90 hover:bg-transparent dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                >
                  Nur Notwendige
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 text-sm bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold transition-colors shadow-md"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>

            {/* Detail Panel */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                    {/* Notwendig */}
                    <div className="flex items-start justify-between gap-4 p-3 bg-transparent rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-sm text-white">Technisch notwendig</h4>
                          <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">Immer aktiv</span>
                        </div>
                        <p className="text-xs text-white/60">
                          Diese Cookies sind für den Betrieb der Website erforderlich. Dazu gehören Cookie-Einstellungen,
                          Dark-Mode-Präferenz und Session-Verwaltung. Ohne diese Cookies funktioniert die Website nicht korrekt.
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-11 h-6 bg-green-500 rounded-full relative cursor-not-allowed opacity-70">
                          <div className="absolute right-0.5 top-0.5 w-5 h-5 bg-transparent rounded-full shadow" />
                        </div>
                      </div>
                    </div>

                    {/* Analyse */}
                    <div className="flex items-start justify-between gap-4 p-3 bg-transparent rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-white mb-1">Analyse & Statistiken</h4>
                        <p className="text-xs text-white/60">
                          Diese Cookies helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                          Wir verwenden Google Analytics 4 und Microsoft Clarity zur anonymisierten Auswertung.
                          IP-Adressen werden anonymisiert. Keine Daten werden an Dritte verkauft.
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <button
                          onClick={() => setConsent(prev => ({ ...prev, analytics: !prev.analytics }))}
                          className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                            consent.analytics ? 'bg-primary' : 'bg-gray-300'
                          }`}
                          aria-label="Analyse-Cookies umschalten"
                        >
                          <div className={`absolute top-0.5 w-5 h-5 bg-transparent rounded-full shadow transition-all duration-200 ${
                            consent.analytics ? 'right-0.5' : 'left-0.5'
                          }`} />
                        </button>
                      </div>
                    </div>

                    {/* Marketing */}
                    <div className="flex items-start justify-between gap-4 p-3 bg-transparent rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-white mb-1">Marketing & Personalisierung</h4>
                        <p className="text-xs text-white/60">
                          Diese Cookies werden für personalisierte Werbung und Remarketing verwendet.
                          Aktuell setzen wir keine Marketing-Cookies ein. Diese Option ist für zukünftige
                          Werbekampagnen (z.B. Google Ads) vorbereitet.
                        </p>
                      </div>
                      <div className="flex-shrink-0 mt-1">
                        <button
                          onClick={() => setConsent(prev => ({ ...prev, marketing: !prev.marketing }))}
                          className={`w-11 h-6 rounded-full relative transition-colors duration-200 ${
                            consent.marketing ? 'bg-primary' : 'bg-gray-300'
                          }`}
                          aria-label="Marketing-Cookies umschalten"
                        >
                          <div className={`absolute top-0.5 w-5 h-5 bg-transparent rounded-full shadow transition-all duration-200 ${
                            consent.marketing ? 'right-0.5' : 'left-0.5'
                          }`} />
                        </button>
                      </div>
                    </div>

                    {/* Save selection button */}
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={handleSaveSelection}
                        className="px-6 py-2.5 text-sm bg-secondary hover:bg-secondary-dark text-white rounded-lg font-semibold transition-colors shadow-md"
                      >
                        Auswahl speichern
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}



