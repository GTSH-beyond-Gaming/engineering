export default function HeroLEDs() {
  // Positionen basierend auf dem Cyborg-Bild (hero-background.webp)
  // Diese verstärken die existierenden orangenen LEDs im Bild
  const leds = [
    // Pupille links (orangenes Auge)
    { top: '22%', right: '32%', size: 12, color: '#FF8C00', delay: 0, anim: 'led-pulse-slow' },
    // Jochbein/Wange diagonal
    { top: '32%', right: '25%', size: 20, color: '#FF8C00', delay: 0.5, anim: 'led-pulse' },
    // Ohr-Mechanik (große orangene Fläche)
    { top: '38%', right: '18%', size: 28, color: '#FF8C00', delay: 1.0, anim: 'led-pulse-slow' },
    // Hals-Konnektor oben (Kehlkopf-Bereich)
    { top: '52%', right: '28%', size: 16, color: '#FF8C00', delay: 1.5, anim: 'led-pulse' },
    // Hals kleiner Kreis
    { top: '58%', right: '24%', size: 12, color: '#FF8C00', delay: 2.0, anim: 'led-blink' },
    // Sternum/Brust unten (großer orangener Glow)
    { top: '72%', right: '30%', size: 24, color: '#FF8C00', delay: 2.5, anim: 'led-pulse-slow' },
  ]

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[15] hidden lg:block" 
      aria-hidden="true"
    >
      {leds.map((led, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: led.top,
            right: led.right,
            width: `${led.size}px`,
            height: `${led.size}px`,
            backgroundColor: led.color,
            boxShadow: `0 0 ${led.size * 4}px ${led.size * 2}px ${led.color}, 0 0 ${led.size * 8}px ${led.size * 3}px ${led.color}80`,
            animation: `${led.anim} ${3 + i * 0.3}s ease-in-out ${led.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
