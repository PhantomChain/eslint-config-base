module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['promise'],
  rules: {
    // airbnb overwrites
    'arrow-parens': ['error', 'as-needed'],
    camelcase: ['error', { properties: 'always' }],
    complexity: ['warn', 5],
    eqeqeq: ['error', 'always'],
    'import/order': 'error',
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    semi: ['off', 'always']
  },
}
