import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 1. Import the react plugin
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(), // 2. Add the react plugin here
    tailwindcss(),
  ],
})