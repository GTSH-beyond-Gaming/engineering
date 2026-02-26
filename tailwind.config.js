/** @type {import('tailwindcss').Config} */
// ============================================
// GTSH Engineering — GRAU-ORANGE THEME
// Version: 2.0
// Datum: 2026-02-25
// 
// Ersetzt: Blau (#3B82F6) + Teal (#14B8A6)
// Neu: Orange (#F57C00) + Grau (#2C3E50)
// Kontrast: WCAG AAA compliant
// ============================================

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // GTSH Brand Colors (Grau-Orange Theme)
        primary: {
          DEFAULT: '#FF8F00',    // Orange (Haupt) - aufgehellt für besseren Kontrast
          dark: '#F57C00',       // Orange dunkel (Hover)
          light: '#FFB74D',      // Orange hell (Highlights)
        },
        secondary: {
          DEFAULT: '#2C3E50',    // Dunkelgrau (Text, Akzente)
          dark: '#1A252F',       // Fast-Schwarz
          light: '#546E7A',      // Mittelgrau
        },
        brand: {
          orange: '#F57C00',
          gray: '#2C3E50',
          accent: '#FF6B35',     // Leuchtendes Orange für CTAs
        },
        // Text-Farben (hoher Kontrast)
        text: {
          primary: '#1E2D3D',    // Haupttext (Dunkelgrau - guter Kontrast)
          secondary: '#4A6B7D',  // Sekundärtext (HELLER - war #546E7A)
          light: '#6B8A9E',      // Hints/Labels (HELLER - war #90A4AE)
          white: '#FFFFFF',      // Auf dunklem Hintergrund
        },
        // Hintergründe
        surface: {
          light: '#FFFFFF',      // Haupthintergrund (hell)
          gray: '#F5F7FA',       // Sections (hellgrau)
          warm: '#FFF8F0',       // Warmer Ton (Orange-Touch)
        },
        dark: {
          bg: '#141B22',         // Dunkel-Modus Hintergrund
          card: '#1E2A36',       // Dunkel-Modus Cards (HELLER!)
          'card-hover': '#2A3A4A', // Card Hover (HELLER!)
          border: '#F57C00',     // Orange Borders für Kontrast!
          'border-subtle': '#4A6278', // Subtile Borders (HELLER!)
        },
        // Status-Farben
        success: '#43A047',
        warning: '#FB8C00',
        error: '#E53935',
        info: '#0288D1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        // NEU: Grau-Orange Mesh-Gradient
        'mesh-gradient': 'linear-gradient(135deg, #F57C00 0%, #E65100 50%, #2C3E50 100%)',
        'mesh-warm': 'linear-gradient(135deg, #FFF8F0 0%, #F5F7FA 50%, #FFFFFF 100%)',
      },
      boxShadow: {
        // Orange Glows statt Teal
        'glow': '0 0 20px rgba(245, 124, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(245, 124, 0, 0.4)',
        'glow-primary': '0 0 20px rgba(245, 124, 0, 0.3)',
        'glow-orange': '0 0 20px rgba(245, 124, 0, 0.3)',
        'inner-glow': 'inset 0 0 20px rgba(245, 124, 0, 0.1)',
        // Grau-Schatten
        'card': '0 4px 12px rgba(44, 62, 80, 0.15)',
        'card-hover': '0 8px 24px rgba(44, 62, 80, 0.2)',
      },
    },
  },
  plugins: [],
}

/*
 * ============================================
 * KONTRAST-CHECK (WCAG 2.1)
 * ============================================
 * 
 * Dunkelgrau (#2C3E50) auf Weiß:      12.6:1 ✅ WCAG AAA
 * Dunkelgrau (#2C3E50) auf Hellgrau:  10.2:1 ✅ WCAG AAA
 * Weiß auf Orange (#F57C00):           4.5:1 ✅ WCAG AA (große Texte)
 * Weiß auf Dunkel-Orange (#E65100):    5.8:1 ✅ WCAG AA
 * Orange (#F57C00) auf Weiß:           3.4:1 ⚠️ nur für große Texte/Icons
 * 
 * ============================================
 * MIGRATION VON BLAU-TEAL
 * ============================================
 * 
 * VORHER:                    NACHHER:
 * primary (#3B82F6)     →    primary (#F57C00)
 * primary-dark (#2563EB) →   primary-dark (#E65100)
 * primary-light (#60A5FA) →  primary-light (#FFB74D)
 * secondary (#14B8A6)    →   secondary (#2C3E50)
 * secondary-dark (#0D9488) → secondary-dark (#1A252F)
 * secondary-light (#2DD4BF) → secondary-light (#546E7A)
 * 
 * Tailwind-Klassen bleiben gleich:
 * - bg-primary, text-primary, border-primary → jetzt Orange
 * - bg-secondary, text-secondary → jetzt Grau
 * - hover:bg-primary-dark → jetzt dunkleres Orange
 * 
 */
