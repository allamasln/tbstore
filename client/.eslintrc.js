module.exports = {
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@emotion',
    'react',
    'react-hooks',
    'prettier',
    'testing-library',
    'jest',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': ['off'],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'testing-library/no-render-in-setup': 'error',
    'testing-library/no-wait-for-empty-callback': 'error',
    'testing-library/prefer-explicit-assert': 'error',
    'testing-library/prefer-presence-queries': 'error',
    'testing-library/prefer-screen-queries': 'error',
    'testing-library/prefer-wait-for': 'error',
  },
}
