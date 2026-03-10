import { motion } from 'framer-motion'
import { MapPin, Award, Users, Heart } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 }
}

export default function AboutWithPhoto() {
  return (
    <section className="section bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left: Randy's Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Photo - Glasmorphism Border */}
            <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl shadow-primary/20 backdrop-blur-sm">
              <img
                src="/randy-photo.png"
                alt="Randolf Hahn – Geschäftsführer GTSH Engineering"
                className="w-full h-auto object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Badge - Glasmorphism */}
              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg px-4 py-2">
                <p className="text-sm text-gray-300">Ihr lokaler KI-Partner</p>
                <p className="font-bold text-primary">Saalfeld, Thüringen</p>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 blur-xl" />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            {...fadeInUp}
            className="space-y-6"
          >
            {/* Badge */}
            <span className="inline-block bg-primary/20 text-primary text-sm px-4 py-2 rounded-full font-semibold">
              Über GTSH Engineering
            </span>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-animated">Randolf Hahn</span>
              <br />
              <span className="text-white/80">Ihr Partner für KI & Web</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed">
              Menschen kaufen von Menschen – besonders in der Region. Deshalb lege ich Wert auf 
              persönliche Betreuung, direkte Kommunikation und Lösungen, die wirklich funktionieren.
            </p>

            <p className="text-gray-400">
              Seit über 10 Jahren entwickle ich digitale Lösungen für Unternehmen in Thüringen. 
              Mit GTSH Engineering bringe ich moderne KI-Technologie in die Region – ohne Cloud-Abhängigkeit, 
              ohne Buzzwords, ohne leere Versprechen.
            </p>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white">Lokal in Saalfeld</p>
                  <p className="text-sm text-gray-400">Persönlich vor Ort</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white">10+ Jahre Erfahrung</p>
                  <p className="text-sm text-gray-400">Web & KI-Engineering</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white">Für KMU</p>
                  <p className="text-sm text-gray-400">Verständlich & umsetzbar</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white">100% DSGVO</p>
                  <p className="text-sm text-gray-400">Datenschutz first</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-primary to-orange-500 hover:from-orange-500 hover:to-primary text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50"
              >
                Jetzt persönlich kennenlernen
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
