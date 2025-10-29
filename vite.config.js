import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sofia-haroon-thereapy/',  // ⚠️ Note: You have a typo "thereapy" instead of "therapy"
  build: {
    outDir: 'dist',
  },
})