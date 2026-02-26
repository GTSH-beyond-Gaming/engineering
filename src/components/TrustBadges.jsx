import { Shield, MapPin, Users, Zap } from 'lucide-react'

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      text: 'DSGVO-konform',
      description: '100% Datenschutz'
    },
    {
      icon: MapPin,
      text: 'Made in Germany',
      description: 'Entwickelt in Thüringen'
    },
    {
      icon: Zap,
      text: 'Festpreise',
      description: 'Keine Überraschungen'
    },
    {
      icon: Users,
      text: 'Junges Start-up',
      description: 'Frisch & motiviert'
    }
  ]

  return (
    <div className="py-12 bg-black/80 backdrop-blur-md border-y-2 border-primary/40 shadow-lg shadow-primary/10 relative overflow-hidden">
      {/* Decorative glow lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-white mb-1">
                  {badge.text}
                </div>
                <div className="text-sm text-white/70">
                  {badge.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}



