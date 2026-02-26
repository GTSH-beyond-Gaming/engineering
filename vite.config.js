import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Code-Splitting für bessere Performance
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animation': ['framer-motion'],
        }
      }
    },
    // Minification (esbuild ist schneller als terser)
    minify: 'esbuild',
    // Asset Optimization
    assetsInlineLimit: 4096, // Inline assets < 4kb
    cssCodeSplit: true,
    sourcemap: false, // Keine Sourcemaps in Production
  },
  // Server config für Development
  server: {
    port: 5173,
    open: false,
  },
  // Preview config
  preview: {
    port: 4173,
  }
})
