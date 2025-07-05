/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off'
    