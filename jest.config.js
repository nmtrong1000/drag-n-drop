module.exports = {
  rootDir: './',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  transform: {
    '^.+\\.spec.vue$': 'vue-jest',
    '^.+\\.spec.ts$': 'babel-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: ['**/__tests__/unit/*.spec.{js,vue}', '!**/node_modules/**'],
  testRegex: '(/__tests__/unit/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  verbose: true
}