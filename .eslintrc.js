module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'indent': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'vue/multi-word-component-names': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/require-prop-types': 0
  }
}
