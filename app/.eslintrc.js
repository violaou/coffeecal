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
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
    'consistent-return': ['warn', { treatUndefinedAsUnspecified: true }],
    // TYPESCRIPT
    '@typescript-eslint/no-use-before-define': ['error'], // JSX not allowed in files with extension ‘.tsx’
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Missing file extension ‘tsx’ for ‘./App’
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
  },
};
