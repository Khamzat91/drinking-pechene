module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    es2021: true,
  },
  rules: {
    'no-console': 'off',
    'import/first': 'error',
    'react/prop-types': 'off',
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
  ],
  root: true,
  plugins: ['react', 'import', 'tailwindcss'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
  },
};
