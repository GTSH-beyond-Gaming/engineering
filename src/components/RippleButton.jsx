import { useState } from 'react'

export default function RippleButton({ children, className = '', onClick, ...props }) {
  const [ripples, setRipples] = useState([])

  const handleClick = (e) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: Date.now(),
    }

    setRipples((prev) => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id))
    }, 800)

    // Call original onClick
    if (onClick) onClick(e)
  }

  return (
    <button
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
      
      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none z-10"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            animation: 'rippleExpand 0.8s cubic-bezier(0, 0, 0.2, 1)',
          }}
        />
      ))}
    </button>
  )
}



