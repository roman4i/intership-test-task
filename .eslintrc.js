module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 0,
  },
};
