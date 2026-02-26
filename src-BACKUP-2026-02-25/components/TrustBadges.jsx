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
      text: '🚀 Pionier-Rabatt',
      description: '20% für Früh-Kunden'
    },
    {
      icon: Users,
      text: 'Junges Start-up',
      description: 'Frisch & motiviert'
    }
  ]

  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="container-custom">
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
                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                  {badge.text}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
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
