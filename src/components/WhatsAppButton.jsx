import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/4917684940127?text=Hallo%20GTSH%20Engineering,%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Leistungen.', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group"
      aria-label="WhatsApp kontaktieren"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline font-medium">WhatsApp</span>
      
      {/* Pulsing Indicator */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-transparent"></span>
      </span>
    </button>
  )
}



