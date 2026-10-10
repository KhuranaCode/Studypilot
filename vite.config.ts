import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { handleAiPlanGenerationRequest } from './server/aiBackendHandler';
import { handleAdminRequest } from './server/adminBackendHandler';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'studypilot-security-and-backend',
      configureServer(server) {
        // Enforce baseline HTTP security headers on all dev responses
        server.middlewares.use((_req, res, next) => {
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.setHeader('X-Frame-Options', 'DENY');
          res.setHeader('X-XSS-Protection', '0');
          res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
          res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
          next();
        });

        // AI Schedule Planning API Endpoint
        server.middlewares.use('/api/ai/generate-plan', (req, res) => {
          handleAiPlanGenerationRequest(req, res);
        });

        // Secure Administrative Control API Endpoints
        server.middlewares.use('/api/admin', (req, res) => {
          handleAdminRequest(req, res);
        });
      },
    },
  ],
  esbuild: {
    // Turn off debug mode in production: drop console and debugger statements
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
  server: {
    cors: {
      origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:4173'],
    },
  },
  build: {
    sourcemap: false, // Prevent exposing source code in production bundle
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'lucide-icons';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
            if (id.includes('zod')) {
              return 'zod-vendor';
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
