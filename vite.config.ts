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
    minify: false,       // ← prevents WebGPU shaders from breaking
    treeshake: false,    // ← prevents Three.js constants from being removed
    target: "esnext"
  }
})
