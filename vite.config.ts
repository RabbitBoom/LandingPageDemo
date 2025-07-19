import { defineConfig } from 'vite'
import compression from 'vite-plugin-compression'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    tailwindcss(),
    react(),
    compression({
      algorithm: 'gzip'
    })],
  build: {
    assetsDir: 'static',
    assetsInlineLimit: 4096,
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        },
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
