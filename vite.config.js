import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/personal-blog/',  // <-- This is needed for GitHub Pages
  server: {
    port: 5173,
    strictPort: false,
  },
})