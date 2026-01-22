import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'logo.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Mi AERI',
        short_name: 'Mi AERI',
        description: 'Plataforma de servicios para afiliados de AERI',
        theme_color: '#002855',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/mi-aeri',
        scope: '/',
        icons: [
          {
            src: '/logo.png', // Fallback to logo if specific pwa icons missing
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
