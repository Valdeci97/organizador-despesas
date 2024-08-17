import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      'prettier',
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'error',
      'react/prop-types': 'off',
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-tag-spacing': [
        'error',
        {
          closingSlash: 'never',
          beforeSelfClosing: 'always',
          afterOpening: 'never',
          beforeClosing: 'never',
        },
      ],
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-closing-bracket-location': ['error'],
      'react/jsx-closing-tag-location': ['error'],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
    },
  },
);