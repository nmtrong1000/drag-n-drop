module.exports = {
  extends: 'stylelint-config-standard-scss',
  rules: {
    'scss/dollar-variable-pattern': null,
    'scss/dollar-variable-empty-line-before': null,
    'scss/at-mixin-pattern': /.+/,
    'selector-class-pattern': /.+/,
    'string-quotes': 'single',
    'no-eol-whitespace': true,
    'selector-list-comma-newline-after': 'always-multi-line',
    'rule-empty-line-before': 'always-multi-line'
  }
}