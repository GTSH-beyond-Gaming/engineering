import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PriceCalculator() {
  const [websiteType, setWebsiteType] = useState('Custom Website')
  const [addOns, setAddOns] = useState([])
  
  const websiteTypes = [
    { name: 'Landing Page', price: 800 },
    { name: 'Custom Website', price: 2500 },
    { name: 'E-Commerce', price: 5000 }
  ]
  
  const availableAddOns = [
    { name: 'Blog', price: 500 },
    { name: 'CMS-Integration', price: 800 },
    { name: 'KI-ChatBot', price: 1500 },
    { name: 'SEO-Optimierung (3 Monate)', price: 900 },
{ name: 'Logo-Design', price: 500 }
  ]
  
  const toggleAddon = (addon) => {
    setAddOns(prev => 
      prev.find(a => a.name === addon.name)
        ? prev.filter(a => a.name !== addon.name)
        : [...prev, addon]
    )
  }
  
  const getBasePrice = () => {
    return websiteTypes.find(t => t.name === websiteType)?.price || 0
  }
  
  const getAddOnsPrice = () => {
    return addOns.reduce((sum, addon) => sum + addon.price, 0)
  }
  
  const getTotalPrice = () => {
    return getBasePrice() + getAddOnsPrice()
  }
  
  const getTotalWithDiscount = () => {
    return Math.round(getTotalPrice() * 0.8) // 20% Pionier-Rabatt
  }
  
  const getSavings = () => {
    return getTotalPrice() - getTotalWithDiscount()
  }
  
  return (
    <section className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 dark:text-white">Was kostet Ihr Projekt?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Berechnen Sie den Preis für Ihre individuelle Lösung.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card"
        >
          {/* Website Type */}
          <div className="mb-8">
            <label className="block font-semibold text-lg mb-4 dark:text-white">
              Website-Typ:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {websiteTypes.map((type) => (
                <motion.button
                  key={type.name}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setWebsiteType(type.name)}
                  className={`
                    p-4 rounded-lg border-2 transition-all text-left
                    ${websiteType === type.name 
                      ? 'border-primary bg-primary/10 dark:bg-primary/20' 
                      : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                    }
                  `}
                >
                  <p className="font-semibold mb-1 dark:text-white">{type.name}</p>
                  <p className="text-2xl font-bold text-primary dark:text-secondary">
                    €{type.price.toLocaleString()}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Add-Ons */}
          <div className="mb-8">
            <label className="block font-semibold text-lg mb-4 dark:text-white">
              Add-Ons (optional):
            </label>
            <div className="space-y-2">
              {availableAddOns.map((addon) => {
                const isSelected = addOns.find(a => a.name === addon.name)
                return (
                  <motion.label
                    key={addon.name}
                    whileHover={{ scale: 1.01 }}
                    className={`
                      flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer
                      ${isSelected
                        ? 'border-primary bg-primary/5 dark:bg-primary/10'
                        : 'border-gray-300 dark:border-gray-600 hover:border-primary/50'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={!!isSelected}
                        onChange={() => toggleAddon(addon)}
                        className="w-5 h-5 accent-primary cursor-pointer"
                      />
                      <span className="dark:text-white">{addon.name}</span>
                    </div>
                    <span className="font-semibold text-primary dark:text-secondary">
                      +€{addon.price.toLocaleString()}
                    </span>
                  </motion.label>
                )
              })}
            </div>
          </div>
          
          {/* Result */}
          <motion.div
            className="p-6 bg-gradient-to-r from-primary to-secondary rounded-2xl text-white"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            key={getTotalWithDiscount()} // Re-animate on price change
          >
            <p className="text-sm opacity-90 mb-2">Geschätzter Preis:</p>
            <div className="flex items-baseline gap-3 mb-3">
              <p className="text-5xl font-bold">
                €{getTotalWithDiscount().toLocaleString()}
              </p>
              {getSavings() > 0 && (
                <span className="text-lg line-through opacity-75">
                  €{getTotalPrice().toLocaleString()}
                </span>
              )}
            </div>
            <p className="text-sm opacity-90 mb-6">
              inkl. 20% Pionier-Rabatt – spare €{getSavings().toLocaleString()}!
            </p>
            
            {/* Breakdown */}
            <div className="bg-white/10 rounded-lg p-4 mb-6 text-sm">
              <div className="flex justify-between mb-2">
                <span>Website ({websiteType}):</span>
                <span>€{getBasePrice().toLocaleString()}</span>
              </div>
              {addOns.length > 0 && (
                <>
                  <div className="border-t border-white/20 my-2" />
                  {addOns.map(addon => (
                    <div key={addon.name} className="flex justify-between mb-2">
                      <span>{addon.name}:</span>
                      <span>€{addon.price.toLocaleString()}</span>
                    </div>
                  ))}
                </>
              )}
              <div className="border-t border-white/20 my-2" />
              <div className="flex justify-between font-semibold">
                <span>Summe:</span>
                <span>€{getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-yellow-300">
                <span>Pionier-Rabatt (20%):</span>
                <span>-€{getSavings().toLocaleString()}</span>
              </div>
            </div>
            
            <Link
              to="/contact"
              className="block w-full text-center bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Jetzt unverbindlich anfragen →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
