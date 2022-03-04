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
    'array-bracket-spacing': 0,
    'arrow-parens': 0,
    'eol-last': 0,
    'eqeqeq': 0,
    'func-call-spacing': 0,
    'indent': 0,
    'no-multiple-empty-lines': 0,
    'no-trailing-spaces': 0,
    'padded-blocks': 0,
    'quotes': 0,
    'vue/multi-word-component-names': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/require-prop-types': 0,
    'vue/singleline-html-element-content-newline': 0
  }
}
