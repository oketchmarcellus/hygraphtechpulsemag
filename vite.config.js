import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate libraries into their own chunks so that they don't bloat the main bundle
          //First chunk: All node_modules will go to vendor.js
          if (id.includes('node_modules')) {
            return 'vendor'; 
          }
          
          //second chunk: All assets will go to assets.js
          if (id.includes('/src/assets/js/')) {
            return 'assets'; // All assets will go to assets.js
          }
        },
      },
    },
  },
});