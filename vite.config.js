import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// Plugin para emular el endpoint /api/padron en el entorno de desarrollo local (npm run dev)
function padronApiDevPlugin() {
  return {
    name: 'padron-api-dev',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url && req.url.startsWith('/api/padron')) {
          try {
            const { default: handler } = await import('./api/padron.js');
            const parsedUrl = new URL(req.url, 'http://localhost');
            const dni = parsedUrl.searchParams.get('dni') || '';

            const mockReq = {
              method: req.method,
              query: { dni }
            };

            const mockRes = {
              setHeader: (key, val) => res.setHeader(key, val),
              status: (code) => {
                res.statusCode = code;
                return {
                  json: (data) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(data));
                  },
                  end: () => res.end()
                };
              }
            };

            handler(mockReq, mockRes);
            return;
          } catch (err) {
            console.error('Error en padronApiDevPlugin:', err);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Error interno en dev' }));
            return;
          }
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    padronApiDevPlugin(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: 'auto',
      devOptions: {
        enabled: true
      },
      workbox: {
        cleanupOutdatedCaches: true,
        skipWaiting: true,
        clientsClaim: true,
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https?:\/\/.*\/api\/.*/,
            handler: 'NetworkOnly',
          }
        ]
      },
      includeAssets: ['favicon.ico', 'logo.png', 'apple-touch-icon.png'],
      manifest: {
        name: 'Mi AERI',
        short_name: 'Mi AERI',
        description: 'Plataforma de servicios para afiliados de AERI',
        theme_color: '#002855',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
