import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  define: {
    'self.GPUShaderStage': JSON.stringify({
      VERTEX: 1,
      FRAGMENT: 2,
      COMPUTE: 4
    })
  },

  build: {
    minify: false,      // ← REQUIRED for Three.js WebGPU
    target: "esnext",   // ← avoids down-compilation issues
  }
})
