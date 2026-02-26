import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'GTSH Beyond Gaming',
      company: 'Gaming & E-Commerce',
      rating: 5,
      text: '11 Google Reviews mit 5.0 Sternen sprechen für sich. Modern, schnell und SEO-optimiert! Die Website lädt in unter 1 Sekunde und sieht einfach mega aus.',
      project: 'E-Commerce Platform',
      verified: true
    },
    {
      name: 'Werde Pionier-Kunde!',
      company: 'Dein Unternehmen',
      rating: 5,
      text: 'Als junges Start-up bieten wir aktuell Pionier-Rabatte von 20%! Profitiere von unserer Motivation, uns zu beweisen - und spare dabei Geld.',
      project: '🚀 Jetzt Pionier-Rabatt sichern',
      cta: true,
      pioneer: true
    }
  ]

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4 text-gray-900 dark:text-white">
            Unser erstes Projekt & deine Chance
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Echtes Projekt, echte Ergebnisse - und 20% Pionier-Rabatt für dich!
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`card relative ${
                testimonial.cta 
                  ? 'border-2 border-primary bg-gradient-to-br from-primary/5 to-secondary/5' 
                  : ''
              }`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.company}
                </p>
                <p className="text-xs text-primary mt-1">
                  {testimonial.project}
                </p>
              </div>

              {/* CTA Button (if applicable) */}
              {testimonial.cta && (
                <div className="mt-6">
                  <a
                    href="/contact"
                    className="btn-primary w-full text-center"
                  >
                    Jetzt Projekt besprechen
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-12">
          <a
            href="https://gtsh-beyond-gaming.de"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>Mehr Bewertungen auf unseren Projekten ansehen</span>
          </a>
        </div>
      </div>
    </section>
  )
}
