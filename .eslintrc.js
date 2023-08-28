module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: [
      'html',
    ],
    rules: {
      // Your custom ESLint rules go here
    },
  };
  