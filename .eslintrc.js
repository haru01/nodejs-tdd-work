/* eslint-disable no-undef */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'max-classes-per-file': ['error', 10],
    'class-methods-use-this': 'warn',
    'no-console': 'off',
  },
};
