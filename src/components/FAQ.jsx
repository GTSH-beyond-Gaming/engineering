import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index}
          className="card border border-gray-200 dark:border-gray-700"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between text-left p-6"
          >
            <h3 className="font-semibold text-white pr-4">
              {item.question}
            </h3>
            <ChevronDown 
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-white/90 leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}



