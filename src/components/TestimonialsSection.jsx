import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

// TODO: Randy muss echte Testimonials liefern!
// Aktuell: Platzhalter-Struktur
const testimonials = [
  {
    name: 'Max Mustermann',
    company: 'Musterfirma GmbH',
    role: 'Geschäftsführer',
    text: 'Früher habe ich 2 Stunden täglich E-Mails gelesen und sortiert. Jetzt bekomme ich eine präzise Zusammenfassung in 5 Minuten. Das spart mir 10 Stunden pro Woche – Zeit, die ich in mein Geschäft investiere.',
    result: '80% weniger Zeit im Posteingang',
    // image: '/testimonials/max-mustermann.jpg', // Optional
    rating: 5
  },
  // Weitere Testimonials hier einfügen wenn verfügbar
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 }
}

export default function TestimonialsSection() {
  // Falls keine Testimonials vorhanden, Section nicht rendern
  if (testimonials.length === 0) return null

  return (
    <section className="section bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary/20 text-primary text-sm px-4 py-2 rounded-full font-semibold mb-4">
            Kundenstimmen
          </span>
          <h2 className="mb-4">Was unsere Kunden sagen</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Echte Erfahrungen von Unternehmen aus der Region.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Card - Glasmorphism */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/30 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 opacity-10">
                  <Quote className="w-16 h-16" />
                </div>

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-300 mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Result Badge */}
                {testimonial.result && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-3 mb-6">
                    <p className="text-sm font-semibold text-primary">
                      {testimonial.result}
                    </p>
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Optional: Photo */}
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                    />
                  )}
                  
                  {/* Name & Company */}
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA: Add your testimonial */}
        <motion.div
          {...fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm">
            Sie nutzen bereits unsere Lösungen?{' '}
            <a href="/contact" className="text-primary hover:underline">
              Teilen Sie Ihre Erfahrung
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
