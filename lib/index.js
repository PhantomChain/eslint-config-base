module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  plugins: ['promise'],
  rules: {
    // airbnb overwrites
    'arrow-parens': ['error', 'as-needed'],
    camelcase: ['error', { properties: 'always' }],
    eqeqeq: ['error', 'always'],
    'import/order': 'error',
    'no-console': ['error', { allow: ['error', 'info', 'warn'] }],
    semi: ['off', 'always']
  },
}
