import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Pour GitHub Pages: '/nom-depot/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true
  }
})