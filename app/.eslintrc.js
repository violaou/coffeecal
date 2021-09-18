/* eslint-disable quote-props */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['node_modules/*', 'public/*', 'src/assets/images/*', 'src/assets/data/*'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'airbnb',
  ],
  settings: { 'import/resolver': { typescript: {} } },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
  rules: {
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none', // 'none' or 'semi' or 'comma'
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi', // 'semi' or 'comma'
        requireLast: false,
      },
    }],
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off', // duplicates
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],
    // TYPESCRIPT
    '@typescript-eslint/no-use-before-define': ['error'], // JSX not allowed in files with extension ‘.tsx’
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['off', { allowExpressions: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // REACT
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Missing file extension ‘tsx’ for ‘./App’
    'react/prop-types': 'off',
  },
};
