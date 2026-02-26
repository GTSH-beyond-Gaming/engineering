import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Sparkles, Package, Megaphone, Users } from 'lucide-react'

// Gallery images organized by category
const galleryData = {
  produktfotos: {
    title: 'Produktfotos',
    description: 'Hochwertige Produktfotografie ohne Fotoshooting',
    icon: Package,
    images: [
      'gallery_produkt_jug_01_00001_.webp',
      'gallery_produkt_jug_02_00001_.webp',
      'gallery_produkt_jug_03_00001_.webp',
      'gallery_produkt_jug_04_00001_.webp',
      'gallery_produkt_jug_05_00001_.webp',
      'gallery_produkt_jug_06_00001_.webp',
      'gallery_produkt_jug_07_00001_.webp',
      'gallery_produkt_jug_08_00001_.webp',
      'gallery_produkt_jug_09_00001_.webp',
      'gallery_produkt_jug_10_00001_.webp',
      'gallery_produkt_sdxl_01_00001_.webp',
      'gallery_produkt_sdxl_02_00001_.webp',
      'gallery_produkt_sdxl_03_00001_.webp',
      'gallery_produkt_sdxl_04_00001_.webp',
      'gallery_produkt_sdxl_05_00001_.webp',
      'gallery_produkt_sdxl_06_00001_.webp',
      'gallery_produkt_sdxl_07_00001_.webp',
      'gallery_produkt_sdxl_08_00001_.webp',
      'gallery_produkt_sdxl_09_00001_.webp',
      'gallery_produkt_sdxl_10_00001_.webp',
    ]
  },
  marketing: {
    title: 'Marketing Visuals',
    description: 'Abstrakte Tech-Grafiken und Corporate Imagery',
    icon: Megaphone,
    images: [
      'gallery_marketing_jug_01_00001_.webp',
      'gallery_marketing_jug_02_00001_.webp',
      'gallery_marketing_jug_03_00001_.webp',
      'gallery_marketing_jug_04_00001_.webp',
      'gallery_marketing_jug_05_00001_.webp',
      'gallery_marketing_jug_06_00001_.webp',
      'gallery_marketing_jug_07_00001_.webp',
      'gallery_marketing_jug_08_00001_.webp',
      'gallery_marketing_jug_09_00001_.webp',
      'gallery_marketing_jug_10_00001_.webp',
      'gallery_marketing_sdxl_01_00001_.webp',
      'gallery_marketing_sdxl_02_00001_.webp',
      'gallery_marketing_sdxl_03_00001_.webp',
      'gallery_marketing_sdxl_04_00001_.webp',
      'gallery_marketing_sdxl_05_00001_.webp',
      'gallery_marketing_sdxl_06_00001_.webp',
      'gallery_marketing_sdxl_07_00001_.webp',
      'gallery_marketing_sdxl_08_00001_.webp',
      'gallery_marketing_sdxl_09_00001_.webp',
      'gallery_marketing_sdxl_10_00001_.webp',
    ]
  },
  custom: {
    title: 'Custom Content',
    description: 'Business-Portraits und Team-Szenen',
    icon: Users,
    images: [
      'gallery_custom_jug_02_00001_.webp',
      'gallery_custom_jug_03_00001_.webp',
      'gallery_custom_jug_04_00001_.webp',
      'gallery_custom_jug_05_00001_.webp',
      'gallery_custom_jug_06_00001_.webp',
      'gallery_custom_jug_07_00001_.webp',
      'gallery_custom_jug_08_00001_.webp',
      'gallery_custom_jug_09_00001_.webp',
      'gallery_custom_jug_10_00001_.webp',
      'gallery_custom_sdxl_01_00001_.webp',
      'gallery_custom_sdxl_02_00001_.webp',
      'gallery_custom_sdxl_03_00001_.webp',
      'gallery_custom_sdxl_04_00001_.webp',
      'gallery_custom_sdxl_05_00001_.webp',
      'gallery_custom_sdxl_06_00001_.webp',
      'gallery_custom_sdxl_07_00001_.webp',
      'gallery_custom_sdxl_08_00001_.webp',
      'gallery_custom_sdxl_09_00001_.webp',
      'gallery_custom_sdxl_10_00001_.webp',
    ]
  }
}

export default function AIGallery() {
  const [activeCategory, setActiveCategory] = useState('produktfotos')
  const [lightboxImage, setLightboxImage] = useState(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const categories = Object.keys(galleryData)
  const currentImages = galleryData[activeCategory].images
  const currentData = galleryData[activeCategory]
  const Icon = currentData.icon

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxImage(currentImages[index])
  }

  const closeLightbox = () => setLightboxImage(null)

  const nextImage = () => {
    const newIndex = (lightboxIndex + 1) % currentImages.length
    setLightboxIndex(newIndex)
    setLightboxImage(currentImages[newIndex])
  }

  const prevImage = () => {
    const newIndex = (lightboxIndex - 1 + currentImages.length) % currentImages.length
    setLightboxIndex(newIndex)
    setLightboxImage(currentImages[newIndex])
  }

  const getImagePath = (filename) => {
    return `/gallery/${activeCategory === 'produktfotos' ? 'produktfotos' : activeCategory}/${filename}`
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section bg-black/50 backdrop-blur-md border-b border-primary/30 text-white">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="mb-0">AI-Bildgalerie</h1>
          </div>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            60 Bilder generiert mit lokaler KI-Infrastruktur. 
            Juggernaut XL + SDXL Base auf RTX 5090.
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-black/30 border-b border-white/10 sticky top-16 z-40 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => {
              const CatIcon = galleryData[cat].icon
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-primary text-white shadow-glow'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <CatIcon className="w-5 h-5" />
                  {galleryData[cat].title}
                  <span className="text-xs opacity-70">({galleryData[cat].images.length})</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Category Info */}
      <section className="py-8">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Icon className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-white mb-0">{currentData.title}</h2>
          </div>
          <p className="text-white/60">{currentData.description}</p>
          <p className="text-sm text-white/40 mt-2">
            1-10: Juggernaut XL | 11-20: SDXL Base
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="container-custom">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          >
            {currentImages.map((img, index) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer border border-white/10 hover:border-primary/50 transition-all"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={getImagePath(img)}
                  alt={`AI Generated ${currentData.title} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-primary/80 text-white text-xs px-2 py-1 rounded">
                    #{index + 1} {index < 10 ? 'JUG' : 'SDXL'}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Prev Button */}
            <button
              className="absolute left-4 text-white/70 hover:text-white z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src={getImagePath(lightboxImage)}
              alt="Fullscreen view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              className="absolute right-4 text-white/70 hover:text-white z-10 p-2"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
              {lightboxIndex + 1} / {currentImages.length} | {lightboxIndex < 10 ? 'Juggernaut XL' : 'SDXL Base'}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="section bg-black/50 backdrop-blur-md border-t border-primary/30 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4">Interesse an AI-generierten Bildern?</h2>
          <p className="text-lg mb-6 opacity-90">
            Alle Bilder wurden lokal generiert - keine Cloud, keine API-Kosten, maximale Kontrolle.
          </p>
          <a href="/contact" className="btn-primary">
            Jetzt Projekt besprechen
          </a>
        </div>
      </section>
    </div>
  )
}
