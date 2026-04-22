import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/personal-blog/',  // ADD THIS LINE
  server: {
    port: 5173,
    strictPort: false,
  },
})