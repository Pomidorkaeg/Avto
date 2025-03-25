import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
    // Генерируем ресурсы с постоянными именами (без хешей) для простоты ссылок
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Оптимизируем сборку для быстрой загрузки
    minify: true,
    cssMinify: true,
    target: 'es2015',  // Целевые современные браузеры для уменьшения размера бандла
    // Разделяем код на чанки для оптимизации загрузки
    chunkSizeWarningLimit: 500,
    sourcemap: false
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Настраиваем базовый путь для GitHub Pages
  base: '/Hdsffd/',
  // Добавляем оптимизации для более быстрой разработки
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'es2020',
    }
  },
}));
