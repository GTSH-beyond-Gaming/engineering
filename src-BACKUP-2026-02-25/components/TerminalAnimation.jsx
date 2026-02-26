import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function TerminalAnimation() {
  const lines = [
    { text: '> Initiating local AI...', delay: 0 },
    { text: '> Model: qwen3:32b', delay: 800 },
    { text: '> Loading weights... ████████████ 100%', delay: 1600 },
    { text: '> Speed: 61 tokens/sec ✓', delay: 2400 },
    { text: '> Cloud dependency: NONE ✓', delay: 3200 },
    { text: '> DSGVO compliance: 100% ✓', delay: 4000 },
    { text: '> Status: READY 🚀', delay: 4800 },
  ]

  const [visibleLines, setVisibleLines] = useState([])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeouts = lines.map((line) =>
      setTimeout(() => {
        setVisibleLines(prev => [...prev, line.text])
      }, line.delay)
    )

    // Fade out 2.5 seconds after last line appears
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false)
    }, 7300)

    return () => {
      timeouts.forEach(clearTimeout)
      clearTimeout(fadeTimeout)
    }
  }, [])

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
                className={line.includes('✓') ? 'text-green-400' : line.includes('READY') ? 'text-secondary' : 'text-gray-300'}
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
