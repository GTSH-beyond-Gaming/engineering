import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    gdpr: false,
    honeypot: '' // Spam protection
  })

  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData.honeypot) {
      setStatus('error')
      return
    }

    // GDPR check
    if (!formData.gdpr) {
      setStatus('gdpr_missing')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/xjgeydkk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.service,
          message: formData.message
        })
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '', email: '', company: '', phone: '', 
          service: '', message: '', gdpr: false, honeypot: ''
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div>
      <title>Kontakt - Kostenloses Erstgespräch buchen | GTSH Engineering</title>
      <meta name="description" content="Kontaktieren Sie GTSH Engineering in Saalfeld. Kostenloses 15-Min Strategy Call, Kontaktformular oder direkt anrufen. Wir beraten Sie persönlich." />
      <link rel="canonical" href="https://gtsh-engineering.de/contact" />

      {/* Header */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-6">Kontakt & Erstgespräch</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Bereit für Ihre digitale Transformation? Lassen Sie uns sprechen!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-2 text-white">Email</h3>
              <a href="mailto:info@gtsh-engineering.de" className="text-primary hover:text-primary-dark transition-colors">
                info@gtsh-engineering.de
              </a>
            </div>

            {/* Phone */}
            <div className="card text-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="mb-2 text-white">Telefon</h3>
              <a href="tel:+4917684940127" className="text-white/80 hover:text-secondary-dark transition-colors">
                +49 176 84940127
              </a>
            </div>

            {/* Location */}
            <div className="card text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-white">Standort</h3>
              <p className="text-white/90">
                Saalfeld, Thüringen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly + Contact Form */}
      <section className="section bg-transparent">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calendly */}
            <div>
              <h2 className="mb-6 text-white">Termin buchen</h2>
              <p className="text-white/90 mb-6">
                Buchen Sie direkt einen 30-minütigen Termin für ein kostenloses Erstgespräch.
                Wir besprechen Ihre Anforderungen und zeigen Ihnen konkrete Lösungswege.
              </p>
              
              {/* Calendly Embed */}
              <div className="card bg-transparent">
                <div className="calendly-inline-widget" 
                     data-url="https://calendly.com/randolfhahn/30min?hide_gdpr_banner=1" 
                     style={{ minWidth: '320px', height: '700px' }}>
                </div>
              </div>
              
              {/* Load Calendly script */}
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-white">Oder schreiben Sie uns</h2>
              <form onSubmit={handleSubmit} className="card space-y-6">
                {/* Honeypot (hidden) */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="name">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="company">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="phone">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="service">
                    Interesse an *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Bitte wählen...</option>
                    <option value="web">Web-Engineering</option>
                    <option value="automation">Business Automation</option>
                    <option value="ki-schulung">KI-Schulungen</option>
                    <option value="grafikdesign">Grafikdesign</option>
                    <option value="private-ai">Private AI Solutions</option>
                    <option value="paket">Service-Paket (Starter/Growth/Scale)</option>
                    <option value="consulting">Digital-Beratung</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold mb-2" htmlFor="message">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* GDPR */}
                <div>
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="gdpr"
                      checked={formData.gdpr}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-white/90">
                      Ich habe die <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen 
                      und stimme der Verarbeitung meiner Daten zu. *
                    </span>
                  </label>
                </div>

                {/* Status Messages */}
                {status === 'sending' && (
                  <div className="bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded">
                    Nachricht wird gesendet...
                  </div>
                )}
                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
                    Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                    Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per Email.
                  </div>
                )}
                {status === 'gdpr_missing' && (
                  <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded">
                    Bitte bestätigen Sie die Datenschutzerklärung.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'}
                </button>

                <p className="text-xs text-white/70 text-center">
                  * Pflichtfelder
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}



