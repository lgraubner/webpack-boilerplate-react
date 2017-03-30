module.exports = {
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    'import/extensions': 0,
  },
};
