import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Use / for Cloudflare Pages (not /personal-blog/)
  server: {
    port: 5173,
    strictPort: false,
  },
})