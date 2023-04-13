/*
 * @Author: zhb
 * @Descripttion:
 * @Date: 2023-04-13 10:49:56
 * @LastEditors: zhb
 * @LastEditTime: 2023-04-13 14:21:17
 * @FilePath: /home-smallpigz-vue3/.eslintrc.cjs
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 启用prettier插件与通用配置
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    // eslint-plugin-vue 的规则：https://eslint.vuejs.org/rules/attributes-order.html
    // 'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off', // 不限制组件名规范
    // "no-unused-vars": "off"
  },
}
