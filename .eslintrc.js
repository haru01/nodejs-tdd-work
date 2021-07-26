/* eslint-disable no-undef */
module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'jest': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'indent': ['error', 4],
        'linebreak-style': ['error', 'unix'],
    }
};
