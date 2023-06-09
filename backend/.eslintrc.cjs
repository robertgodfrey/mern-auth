module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'no-plusplus': 'off',
    'linebreak-style': 'off',
    'func-names': 'off',
    'no-underscore-dangle': 'off',
    'import/extensions': 'off'
  },
  globals: {
    '_': true
  }
}
