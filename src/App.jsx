import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'
import ChatBot from './components/ChatBot'

// Lazy load all pages for code-splitting
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))
// Pakete entfernt - Redirect braucht keinen Import
const KISchulungen = lazy(() => import('./pages/KISchulungen'))
const Grafikdesign = lazy(() => import('./pages/Grafikdesign'))
const AIGallery = lazy(() => import('./pages/AIGallery'))
const Fallstudie = lazy(() => import('./pages/Fallstudie'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading spinner component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-transparent flex flex-col transition-colors duration-500">
          <Navigation />
          <main id="main-content" className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leistungen" element={<Services />} />
                <Route path="/services" element={<Navigate to="/leistungen" replace />} />
                <Route path="/pakete" element={<Navigate to="/leistungen#pakete" replace />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/ki-schulungen" element={<KISchulungen />} />
                <Route path="/grafikdesign" element={<Grafikdesign />} />
                <Route path="/ai-gallery" element={<AIGallery />} />
                <Route path="/fallstudie" element={<Fallstudie />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CookieBanner />
          <WhatsAppButton />
          <ChatBot />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
