import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/New-Portfolio-2026/',
  server: { port: 3000 },
})
