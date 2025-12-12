import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['three'],
  },
  build: {
    commonjsOptions: {
      exclude: ['three'],
    },
    rollupOptions: {
      external: [],
    },
    minify: "esbuild",
    terserOptions: {
      mangle: false,
      compress: false,
    }
  }
})
