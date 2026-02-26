import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'
// ChatBot disabled - localhost:3334 backend not available in production
// import ChatBot from './components/ChatBot'

// Lazy load all pages for code-splitting
const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Impressum = lazy(() => import('./pages/Impressum'))
const Datenschutz = lazy(() => import('./pages/Datenschutz'))
const Pakete = lazy(() => import('./pages/Pakete'))
const KISchulungen = lazy(() => import('./pages/KISchulungen'))
const Grafikdesign = lazy(() => import('./pages/Grafikdesign'))
const AIGallery = lazy(() => import('./pages/AIGallery'))

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
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/impressum" element={<Impressum />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/pakete" element={<Pakete />} />
                <Route path="/ki-schulungen" element={<KISchulungen />} />
                <Route path="/grafikdesign" element={<Grafikdesign />} />
                <Route path="/ai-gallery" element={<AIGallery />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CookieBanner />
          <WhatsAppButton />
          {/* ChatBot disabled - localhost:3334 backend not available in production */}
          {/* <ChatBot /> */}
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
