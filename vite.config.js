import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Gu/', // Set the base path to match your GitHub Pages repository
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
