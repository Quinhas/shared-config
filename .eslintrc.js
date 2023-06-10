// eslint-disable-next-line no-undef
module.exports = {
  env: {
    es2021: true,
  },
  extends: ['eslint:recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', { allowTemplateLiterals: true }],
    'semi': ['error', 'always'],
  },
};
