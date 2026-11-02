// stylelint.config.js
import order from 'stylelint-config-recess-order'

export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    order,
  ],
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  plugins: ['stylelint-order'],
  rules: {
    'selector-class-pattern': null,
    'no-empty-source': null,
    'custom-property-pattern': null,
    // SCSS 常用放宽
    'scss/dollar-variable-pattern': null,
    'scss/at-rule-no-unknown': [true, { ignoreAtRules: ['tailwind', 'apply', 'layer'] }],
  },
}