import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// FIXED + CLEAN CONFIG
export default defineConfig({
  plugins: [react()],

  optimizeDeps: {
    exclude: ['three'], // VALID
  },

  build: {
    minify: 'esbuild', // We are using esbuild, not terser

    rollupOptions: {
      // REMOVE invalid external: []
    },

    commonjsOptions: {
      // REMOVE invalid exclude: ['three']
    },
  }
})
