module.exports = {
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'plugin:jsx-a11y/recommended', 'prettier'],
  plugins: ['react', 'prettier', 'jsx-a11y'],
  rules: {
    'max-len': ['warn', { 'code': 125 }],
    'prettier/prettier': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn',
    'import/no-unresolved': 'off',
    'react/function-component-definition': [2, { "namedComponents": "arrow-function" }]
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
};