import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log('Supabase URL:', process.env.VITE_SUPABASE_URL) // Affiche la variable

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    manifest: true
  },
  publicDir: 'public',
})
