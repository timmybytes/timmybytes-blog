module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // Our eslint setup is intentionally minimal, since prettier + TS take care of most of our needs.
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: [
    'node_modules/**/*',
    'public/**/*',
    'static/**/*',
    '.cache/**/*',
    '.next/**/*',
    '.netlify/**/*',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'no-console': ['warn', { allow: ['info', 'warn', 'error', 'debug'] }],
    'no-prototype-builtins': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unused-expressions': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': ['warn'],

    // These two settings are used together to prevent eslint from warning on types
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
