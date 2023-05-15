import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // remove '/' the base URL by setting base to an empty string, making the path relative to its deployment directory
})
