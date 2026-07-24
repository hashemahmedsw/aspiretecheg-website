import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The base path only needs to change for GitHub *project* pages
// (i.e. https://username.github.io/repo-name/). The deployment workflow
// in .github/workflows/deploy.yml sets VITE_BASE_PATH automatically from
// the repository name, so you usually never need to touch this file.
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
