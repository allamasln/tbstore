module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@emotion', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
  },
}
