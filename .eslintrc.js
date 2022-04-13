module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-in-parens': ['error', 'always', {
      'exceptions': ['empty'],
    }],
    'space-before-function-paren': ['error', 'never'],
    'keyword-spacing': 'off',
    'no-unused-vars': ['error', { 'args': 'none' }],
    'eol-last': 'off',
    'template-curly-spacing': 'off',
    'space-infix-ops': 'off',
    'semi': ['error', 'never'],
    'quote-props': 'off',
    'lines-between-class-members': 'off',
    'no-trailing-spaces': 'error',
    'comma-dangle': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-unneeded-ternary': 'error',
    'padded-blocks': ['error', 'never'],
    'no-unreachable': 'error',
    'dot-notation': 'off',
    'accessor-pairs': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'indent': ['error', 2],
    'one-var': 'off',
    'no-undef': ['error', { 'typeof': true }],
    'no-prototype-builtins': 'off',
    'prefer-rest-params': 'off',
    'no-case-declarations': 'off',
    'no-delete-var': 'off',
    'node/handle-callback-err': 'off',
    'no-return-await': 'error',
    'eqeqeq': 'error',
    'no-unused-expressions': 'error',
    'no-return-assign': 'off',
    'no-multi-spaces': 'error',
    'no-useless-return': 'error',
    'no-unsafe-finally': 'off',
    'linebreak-style': ['error', 'unix'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'any', prev: "*", next: "*" },
      { blankLine: 'always', prev: "const", next: "*" },
      { blankLine: 'never', prev: "const", next: "const" },
      { blankLine: 'always', prev: "import", next: "*" },
      { blankLine: 'never', prev: "import", next: "import" },
      { blankLine: 'always', prev: "block-like", next: "*" }
    ],
    '@typescript-eslint/no-unused-vars': ['error', { 'args': 'none' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/adjacent-overload-signatures': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/camelcase': 'off',
    'vue/valid-template-root': 'error',
    'vue/no-unused-components': 'error',
    'vue/attributes-order': ['error', {
      'order': [
        'OTHER_ATTR',
        'GLOBAL',
        ['LIST_RENDERING', 'UNIQUE'],
        'CONDITIONALS',
        'TWO_WAY_BINDING',
        'EVENTS',
        'DEFINITION',
        'RENDER_MODIFIERS',
        'SLOT',
        'OTHER_DIRECTIVES',
        'CONTENT'
      ],
      'alphabetical': false
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'name',
        'mixins',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'asyncData',
        'ROUTER_GUARDS',
        'methods',
        ['components', 'directives', 'filters'],
        'el',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'extends',
        ['provide', 'inject'],
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        'emits',
        'setup',
        'fetch',
        'head',
        'watchQuery',
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'error',
    'vue/html-self-closing': 'error',
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/no-v-html': 'off',
    'vue/require-v-for-key': 'warn',
    'vue/require-default-prop': 'off',
    'vue/require-valid-default-prop': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-model-argument': 'off'
  },
  overrides: [
    {
      /* Hotfix: global types are not recognized */
      files: ['*.ts', '*.vue'],
      rules: {
        'no-undef': 'off'
      }
    }
  ]
}