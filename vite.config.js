import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',  // Ensure this is where you want the build to output
    assetsDir: 'src',  // Optionally define the assets directory for JavaScript and CSS
  },
  base: '/',  // Correct base URL for GitHub Pages
});
