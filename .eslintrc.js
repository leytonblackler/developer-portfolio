module.exports = {
  extends: ['react-app', 'airbnb', 'airbnb/hooks', 'plugin:jsx-a11y/recommended', 'prettier', 'prettier/react'],
  plugins: ['react', 'prettier', 'jsx-a11y'],
  rules: {
    'max-len': ['warn', { 'code': 125 }],
    'prettier/prettier': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'warn'
    
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
};