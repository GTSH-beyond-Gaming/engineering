import { Link } from 'react-router-dom'
import RippleButton from '../components/RippleButton'
import AnimatedBackground from '../components/AnimatedBackground'
import TrustBadges from '../components/TrustBadges'
import PriceCalculator from '../components/PriceCalculator'
import AnimatedStats from '../components/AnimatedStats'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ChevronDown, Shield, Zap, Award } from 'lucide-react'
import TerminalAnimation from '../components/TerminalAnimation'

export default function Home() {
  return (
    <div>
      <title>GTSH Engineering - Websites, Automation, Grafik & KI für KMU in Thüringen</title>
      <meta name="description" content="Lokale KI, moderne Websites, Business Automation & Grafikdesign für KMU in Thüringen. DSGVO-konform. Keine US-Cloud. Transparente Preise ab 300€." />
      <link rel="canonical" href="https://gtsh-engineering.de/" />

      {/* Hero Section - UPGRADED! */}
      <section className="relative section min-h-screen flex items-center bg-gradient-to-br from-primary via-brand-blue to-secondary dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              {/* Headline - OUTCOME DRIVEN */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="gradient-text-animated">Websites. Automation.</span>{" "}
                  <span className="text-secondary">Grafik. KI.</span>
                  <br />
                  <span className="text-white">Alles lokal.</span>{" "}
                  <span className="text-secondary">Maximale Kontrolle.</span>
                </h1>
              </motion.div>

              {/* Subheadline - CONCRETE BENEFITS */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto lg:mx-0 opacity-90"
              >
                Für KMU in Thüringen, die digital FÜHREN wollen, nicht nur dabei sein.{" "}
                Keine US-Cloud. Keine versteckten Kosten. Nur messbare Resultate.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-lg mb-8 max-w-2xl mx-auto lg:mx-0 opacity-80"
              >
                Mehr qualifizierte Leads. Weniger manuelle Arbeit. Messbarer ROI.
              </motion.p>

              {/* Animated Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <RippleButton
                  onClick={() => window.location.href = '/contact'}
                  className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-lg shadow-glow-teal hover:shadow-glow-lg hover:scale-105 cursor-pointer group"
                >
                  15-Min Strategy Call buchen
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </RippleButton>
                <RippleButton
                  onClick={() => window.location.href = '/portfolio'}
                  className="bg-white text-primary hover:bg-gray-100 dark:bg-gray-800 dark:text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-lg hover:scale-105 cursor-pointer"
                >
                  Referenzen ansehen
                </RippleButton>
              </motion.div>

              {/* Trust-Badges (animated) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <Shield className="w-6 h-6" />
                  <span>DSGVO-ready</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <Zap className="w-6 h-6" />
                  <span>&lt;1s Load</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 cursor-default"
                >
                  <Award className="w-6 h-6" />
                  <span>Bis zu 36% bei Paketen</span>
                </motion.div>
              </motion.div>
            </div>

            {/* Right: Terminal Animation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hidden lg:flex justify-center"
            >
              <TerminalAnimation />
            </motion.div>
          </div>
        </div>
        
        {/* Scroll-Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Problem-Solution */}
      <section className="section dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-gray-900 dark:text-white">Das Problem</h2>
              <ul className="space-y-4 text-lg dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">✗</span>
                  <span>Manuelle Prozesse fressen Zeit + Geld</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">✗</span>
                  <span>Zu viel Admin-Kram, zu wenig echte Arbeit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">✗</span>
                  <span>Keine Zeit für Marketing & Kundengewinnung</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-2xl">✗</span>
                  <span>Veraltete Website oder gar keine</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-gray-900 dark:text-white">Die Lösung</h2>
              <ul className="space-y-4 text-lg dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">✓</span>
                  <span>Automation spart bis zu 80% Arbeitszeit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">✓</span>
                  <span>Prozesse laufen automatisch im Hintergrund</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">✓</span>
                  <span>Mehr Zeit für Ihr Kerngeschäft</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-2xl">✓</span>
                  <span>Moderne Website die Kunden generiert</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="section bg-gray-100 dark:bg-gray-900">
        <div className="container-custom">
          <motion.h2 
            className="text-center mb-12 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Unsere Leistungen
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Web-Engineering */}
            <motion.div 
              className="card group hover:shadow-glow transition-all duration-300 border border-transparent hover:border-primary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-blue rounded-lg flex items-center justify-center mb-4 shadow-glow group-hover:shadow-glow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="mb-3 group-hover:text-primary transition-colors">Web-Engineering</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Moderne Websites die konvertieren. React, Next.js, SEO-optimiert.
              </p>
              <p className="font-semibold text-primary text-lg">Ab €800</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Landing Pages ab €800 | Custom ab €2.500</p>
            </motion.div>

            {/* Automation */}
            <motion.div 
              className="card group hover:shadow-glow-teal transition-all duration-300 border border-transparent hover:border-secondary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex items-center justify-center mb-4 shadow-glow-teal group-hover:shadow-glow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-3 group-hover:text-secondary transition-colors">Business Automation</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Prozesse optimieren, Zeit sparen. Von PowerShell bis Python.
              </p>
              <p className="font-semibold text-secondary text-lg">Ab €1.500</p>
            </motion.div>

            {/* KI-Schulungen */}
            <motion.div
              className="card group hover:shadow-glow transition-all duration-300 border border-transparent hover:border-primary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-blue rounded-lg flex items-center justify-center mb-4 shadow-glow group-hover:shadow-glow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-3 group-hover:text-primary transition-colors">KI-Schulungen</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                KI-Workshops für Teams. Von Basics bis Integration.
              </p>
              <p className="font-semibold text-primary text-lg">Ab €800</p>
            </motion.div>

            {/* Grafikdesign */}
            <motion.div
              className="card group hover:shadow-glow-teal transition-all duration-300 border border-transparent hover:border-secondary/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary-dark rounded-lg flex items-center justify-center mb-4 shadow-glow-teal group-hover:shadow-glow-lg transition-shadow">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-3 group-hover:text-secondary transition-colors">Grafikdesign</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Logo, Corporate Design, Social Media, Print & Digital.
              </p>
              <p className="font-semibold text-secondary text-lg">Ab €300</p>
            </motion.div>

            {/* Private AI - NEU! */}
            <motion.div
              className="card group hover:shadow-glow transition-all duration-300 border-2 border-secondary/50 bg-gradient-to-br from-secondary/5 to-primary/5 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="absolute top-2 right-2">
                <span className="bg-secondary text-white text-xs px-2 py-1 rounded-full">NEU!</span>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mb-3 group-hover:text-secondary transition-colors">Private AI Solutions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                KI-Modelle die 100% lokal auf IHRER Hardware laufen. Keine Cloud. Maximale Privatsphäre.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                <li>✓ Lokale LLMs (bis 70B Parameter)</li>
                <li>✓ Discord/WhatsApp Bots</li>
                <li>✓ €0 laufende API-Kosten</li>
              </ul>
              <p className="font-semibold text-secondary text-lg">Ab €3.000 (Setup)</p>
            </motion.div>
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us (Start-up Honest!) */}
      <section className="section dark:bg-gray-800">
        <div className="container-custom text-center">
          <motion.h2 
            className="mb-4 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Warum GTSH Engineering?
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Wir sind ein junges Start-up aus Thüringen - und genau das ist unsere Stärke!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <div className="text-5xl font-bold text-primary mb-2">5.0</div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">⭐⭐⭐⭐⭐</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Google Reviews (GTSH Gaming)</p>
            </div>
            <div className="card">
              <div className="text-5xl font-bold text-secondary mb-2">36%</div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Paket-Ersparnis</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Bis zu 36% bei Service-Bundles</p>
            </div>
            <div className="card">
              <div className="text-5xl font-bold text-primary mb-2">2026</div>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Frisch gestartet</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Motiviert & hungrig</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <PriceCalculator />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Portfolio Showcase */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="mb-4 text-gray-900 dark:text-white">
              Unser erstes Projekt - Unsere Referenz
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Wir haben für uns selbst gebaut - mit der gleichen Qualität, die du von uns erwarten kannst!
            </p>
          </div>

          {/* GTSH Beyond Gaming Showcase */}
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Project Info */}
              <div className="card">
                <h3 className="mb-4 text-gray-900 dark:text-white">
                  GTSH Beyond Gaming
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Unsere eigene E-Commerce & Gaming-Plattform. Gebaut mit modernsten Technologien, 
                  SEO-optimiert und mit 90+ Lighthouse Score.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">React + Vite</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Modern Tech-Stack</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">90+ Lighthouse Score</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Performance-optimiert</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">DSGVO-konform</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Cookie-Banner, Datenschutz</p>
                    </div>
                  </div>
                </div>

                <a
                  href="https://gtsh-beyond-gaming.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block"
                >
                  Website live ansehen →
                </a>
              </div>

              {/* Right: Google Reviews */}
              <div className="space-y-6">
                {/* Google Reviews Card */}
                <div className="card bg-gradient-to-br from-primary/5 dark:from-primary/10 to-secondary/5 dark:to-secondary/10 border-2 border-primary/20 dark:border-primary/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                        </svg>
                      ))}
                    </div>
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">5,0</span>
                  </div>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    11 echte Google Reviews
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Von echten Kunden, die unsere Qualität erlebt haben.
                  </p>
                  <a
                    href="https://gtsh-beyond-gaming.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    Reviews ansehen →
                  </a>
                </div>

                {/* Paket-Deals Card */}
                <div className="card border-2 border-secondary bg-gradient-to-br from-secondary/5 to-primary/5">
                  <div className="text-4xl mb-3">📦</div>
                  <h3 className="mb-3 text-gray-900 dark:text-white">
                    Service-Pakete
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Kombinieren Sie unsere Services und sparen Sie <strong>bis zu 36%</strong>!
                    Starter ab €3.500, Growth ab €6.500, Scale ab €12.000.
                  </p>
                  <p className="text-2xl font-bold text-secondary mb-4">
                    Bis zu €3.000 sparen!
                  </p>
                  <a
                    href="/pakete"
                    className="btn-secondary w-full text-center"
                  >
                    Pakete ansehen
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              Willst du das nächste Projekt sein?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/portfolio" className="btn-primary">
                Mehr Projekte ansehen
              </a>
              <a href="/contact" className="btn-secondary">
                Kostenloses Erstgespräch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-primary to-primary-dark dark:from-gray-900 dark:to-gray-800 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-6">Bereit für digitale Transformation?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Buchen Sie ein kostenloses Erstgespräch und erfahren Sie, wie wir Ihr Business digitalisieren können.
          </p>
          <RippleButton
            onClick={() => window.location.href = '/contact'}
            className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 text-lg shadow-glow-teal hover:shadow-glow-lg hover:scale-105 cursor-pointer"
          >
            Jetzt Termin vereinbaren
          </RippleButton>
        </div>
      </section>
    </div>
  )
}
