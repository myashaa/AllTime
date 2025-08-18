import { globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import ts from 'typescript-eslint'
import globals from 'globals'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'

export default ts.config([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    extends: [
      js.configs.recommended,
      ts.configs.recommended,
    ],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    extends: [
      reactHooksPlugin.configs['recommended-latest'],
      reactRefreshPlugin.configs.vite,
    ],
  },
])
