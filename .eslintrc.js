module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    semi: ['error', 'always', {}],
    'comma-dangle': 0,
    'import/no-unresolved': 'off',
    'no-console': 0,
    'no-plusplus': 0
  },
  settings: {},
  globals: {
    $nuxt: true
  }
};
