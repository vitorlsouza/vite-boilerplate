import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'

const compat = new FlatCompat()

export default [
  js.configs.recommended,
  ...compat.extends(
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ),
  ...compat.config({
    settings: {
      react: {
        version: 'detect',
      },
    },
    overrides: [
      {
        files: ['*.ts', '*.tsx'],
        rules: {
          'react/self-closing-comp': 'error',
          'prettier/prettier': ['error'],
          'react/react-in-jsx-scope': 'off',
          'simple-import-sort/imports': 'error',
          'react/prop-types': 'off',
          '@typescript-eslint/no-empty-object-type': 'off',
          '@typescript-eslint/no-explicit-any': 'off',
          '@typescript-eslint/no-unused-vars': ['off'],
        },
      },
    ],
    plugins: ['simple-import-sort'],
  }),
]
