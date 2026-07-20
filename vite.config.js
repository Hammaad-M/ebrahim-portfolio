import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://hammaad-m.github.io/ebrahim-portfolio/ on GitHub Pages,
  // so asset URLs need the repo name as their base path.
  base: '/ebrahim-portfolio/',
  plugins: [react(), tailwindcss()],
})
