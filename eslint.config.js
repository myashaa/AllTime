import { globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';

export default ts.config([
  globalIgnores(['dist', 'node_modules']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },
    extends: [js.configs.recommended, ts.configs.recommended, prettier],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prettier/prettier': ['warn', { usePrettierrc: true }],
      'import/no-relative-parent-imports': 'error',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    extends: [reactHooksPlugin.configs['recommended-latest'], reactRefreshPlugin.configs.vite],
  },
]);
