import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'https://api.bedrockpassport.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
      '/auth': {
        target: 'https://api.bedrockpassport.com',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'src/assets',
    sourcemap: true, // Recommended for debugging
    rollupOptions: {
      output: {
        assetFileNames: 'src/assets/[name]-[hash][extname]'
      }
    }
  },
  base: './', // Relative paths for GH Pages
  define: {
    'process.env': {
      VITE_ORANGE_PROJECT_ID: JSON.stringify('orange-liap6dojuq'),
      VITE_BASE_API_URL: JSON.stringify('https://api.bedrockpassport.com')
    }
  }
});