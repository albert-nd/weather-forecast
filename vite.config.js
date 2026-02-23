import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base: '/weather-forecast/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@weather": path.resolve(__dirname, "src/weather")
    }
  }
})