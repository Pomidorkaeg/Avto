import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Включаем JSX в файлах .js
      include: '**/*.{jsx,js}'
    })
  ],
  base: '/fdsf/',
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
});
