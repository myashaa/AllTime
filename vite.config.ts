import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [react(), eslint({
    include: 'src/**/*.{js,jsx,ts,tsx}',
    exclude: ['**/node_modules/**', '**/dist/**'],
    lintOnStart: true,
    emitWarning: true,
    emitError: true,
    failOnWarning: false,
    failOnError: false,
  })],
})
