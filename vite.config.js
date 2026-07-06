import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // This stops small warning fragments from triggering a hard exit code 2 crash
    chunkSizeWarningLimit: 1600,
  }
})