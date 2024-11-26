import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import react from 'eslint-plugin-react'  // Add this import
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react': react,  // Add 'react' to the plugins section
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // This is the main rule to enforce line length
      'max-len': [
        'error',
        {
          code: 100, // Maximum allowed length for any line
          ignoreUrls: true, // Ignore long URLs
          ignoreStrings: false, 
          ignoreTemplateLiterals: false, 
          ignoreComments: false,
        },
      ],
      // This helps ensure JSX attributes are split across multiple lines if they exceed max-len
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens',
          assignment: 'parens',
          return: 'parens',
        },
      ],
    },
  },
)
