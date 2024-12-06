module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+
    'prettier/prettier': ['error'],
  },
};
