module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['flowtype'],
  env: {
    browser: true,
    node: true,
    jest: true
  },
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['to']
      }
    ]
  }
}
