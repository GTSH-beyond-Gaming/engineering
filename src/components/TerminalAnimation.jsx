import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Check if animation has already played this session
const ANIMATION_KEY = 'gtsh-terminal-played'

export default function TerminalAnimation() {
  const [hasPlayed, setHasPlayed] = useState(() => {
    // Check sessionStorage on mount
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(ANIMATION_KEY) === 'true'
    }
    return false
  })

  const lines = [
    { text: '> Initiating local AI...', delay: 0 },
    { text: '> Loading private model... ████████████ 100%', delay: 800 },
    { text: '> Processing speed: 61 tokens/sec ✓', delay: 1600 },
    { text: '> Cloud dependency: NONE ✓', delay: 2400 },
    { text: '> DSGVO compliance: 100% ✓', delay: 3200 },
    { text: '> Status: READY 🚀', delay: 4000 },
  ]

  const [visibleLines, setVisibleLines] = useState([])
  const [isVisible, setIsVisible] = useState(!hasPlayed)

  useEffect(() => {
    // Skip if already played
    if (hasPlayed) return

    const timeouts = lines.map((line) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line.text])
      }, line.delay)
    )

    // Fade out after animation completes
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false)
      // Mark as played for this session
      sessionStorage.setItem(ANIMATION_KEY, 'true')
      setHasPlayed(true)
    }, 6500)

    return () => {
      timeouts.forEach(clearTimeout)
      clearTimeout(fadeTimeout)
    }
  }, [hasPlayed])

  // Don't render anything if already played
  if (hasPlayed) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-gray-900 rounded-lg p-6 font-mono text-sm border border-gray-700 shadow-glow max-w-md"
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="space-y-2">
            {visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={line.includes('✓') ? 'text-green-400' : line.includes('READY') ? 'text-primary' : 'text-gray-300'}
              >
                {line}
              </motion.div>
            ))}
            {visibleLines.length < lines.length && (
              <span className="inline-block w-2 h-4 bg-secondary animate-pulse"></span>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
