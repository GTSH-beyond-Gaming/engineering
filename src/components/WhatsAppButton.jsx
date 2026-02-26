import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/4917684940127?text=Hallo%20GTSH%20Engineering,%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Leistungen.', '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 bg-primary/90 hover:bg-primary text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-glow backdrop-blur-sm border border-primary/30"
      aria-label="WhatsApp kontaktieren"
      title="Per WhatsApp kontaktieren"
    >
      <MessageCircle className="w-5 h-5" />
    </button>
  )
}
