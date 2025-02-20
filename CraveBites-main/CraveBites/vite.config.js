import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl' // Import the GLSL plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl() // Add the GLSL plugin here
  ],
  base: "/"
})
