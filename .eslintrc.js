module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+
    'prettier/prettier': ['error'],
  },
};
