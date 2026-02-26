import { useEffect, useState } from 'react'

export default function HeroLEDs() {
  const [serverLeds, setServerLeds] = useState([])
  
  useEffect(() => {
    // Server-Rack LEDs - nur im linken Bereich wo die Serverschränke sind
    const leds = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: 5 + Math.random() * 22,
      top: 40 + Math.random() * 45,
      color: Math.random() > 0.3 ? '#FF8C00' : '#00FF88',
      delay: Math.random() * 12,
    }))
    setServerLeds(leds)
  }, [])

  // Cyborg LED Positionen (basierend auf hero-background.webp)
  // Der Cyborg ist rechts im Bild positioniert
  const cyborgLeds = [
    // Linkes Auge (Iris) - das grün markierte
    { 
      id: 'eye',
      right: '32%', 
      top: '32%', 
      size: 8,
      glow: 20,
      anim: 'led-pulse-slow',
      delay: 0,
    },
    // Seitliche Kopfplatte/Wange (diagonaler Streifen)
    { 
      id: 'cheek',
      right: '28%', 
      top: '42%', 
      size: 6,
      glow: 15,
      anim: 'led-pulse',
      delay: 0.5,
    },
    // Ohr-Ring (der leuchtende Kreis am Ohr)
    { 
      id: 'ear',
      right: '22%', 
      top: '38%', 
      size: 12,
      glow: 25,
      anim: 'led-pulse-slow',
      delay: 1,
    },
    // Hals oberer Bereich
    { 
      id: 'neck1',
      right: '26%', 
      top: '62%', 
      size: 5,
      glow: 12,
      anim: 'led-blink',
      delay: 1.5,
    },
    // Hals mittlerer Bereich
    { 
      id: 'neck2',
      right: '24%', 
      top: '68%', 
      size: 6,
      glow: 14,
      anim: 'led-pulse',
      delay: 2,
    },
    // Schulter/Brust LED
    { 
      id: 'chest',
      right: '20%', 
      top: '82%', 
      size: 7,
      glow: 16,
      anim: 'led-pulse-slow',
      delay: 2.5,
    },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] hidden lg:block" aria-hidden="true">
      
      {/* ===== CYBORG LEDS ===== */}
      {cyborgLeds.map((led) => (
        <div
          key={led.id}
          className={`absolute rounded-full ${led.anim}`}
          style={{
            right: led.right,
            top: led.top,
            width: `${led.size}px`,
            height: `${led.size}px`,
            backgroundColor: '#FF8C00',
            boxShadow: `0 0 ${led.glow}px ${led.glow/2}px #FF8C00, 0 0 ${led.glow*2}px ${led.glow}px #FF8C0060`,
            animationDelay: `${led.delay}s`,
          }}
        />
      ))}

      {/* ===== SERVER RACK LEDS ===== */}
      {serverLeds.map((led) => (
        <div
          key={`server-${led.id}`}
          className="absolute rounded-full server-led"
          style={{
            left: `${led.left}%`,
            top: `${led.top}%`,
            width: '3px',
            height: '3px',
            backgroundColor: led.color,
            boxShadow: `0 0 6px 2px ${led.color}`,
            animationDelay: `${led.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
