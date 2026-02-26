import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import WhatsAppButton from './components/WhatsAppButton'
import ChatBot from './components/ChatBot'
import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Contact from './pages/Contact'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import Pakete from './pages/Pakete'
import KISchulungen from './pages/KISchulungen'
import Grafikdesign from './pages/Grafikdesign'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-transparent flex flex-col transition-colors duration-500">
          <Navigation />
          <main className="flex-grow">
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
            </Routes>
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


