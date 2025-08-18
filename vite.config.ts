import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import stylelint from 'vite-plugin-stylelint'

const lintConfig = {
  cache: false,
  exclude: ['**/node_modules/**', '**/dist/**'],
  lintOnStart: true,
  emitWarning: true,
  emitError: true,
  failOnWarning: false,
  failOnError: false,
};

export default defineConfig({
  plugins: [
    react(),
    eslint({
      ...lintConfig,
      include: 'src/**/*.{js,jsx,ts,tsx}',
    }),
    stylelint({
      ...lintConfig,
      include: ['src/**/*.css'],
    }),
  ],
})
