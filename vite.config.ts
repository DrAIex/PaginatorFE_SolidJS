import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  base: '/'
})
