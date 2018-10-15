/* eslint-env node */
'use strict'

module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['prettier'],
  env: {
    'browser': true, // browser global variables.
    'node': true, // Node.js global variables and Node.js-specific rules.
    'amd': false, // defines require() and define() as global variables as per the amd spec.
    'mocha': false, // adds all of the Mocha testing global variables.
    'jasmine': false, // adds all of the Jasmine testing global variables for version 1.3 and 2.0.
    'phantomjs': false, // phantomjs global variables.
    'jquery': false, // jquery global variables.
    'prototypejs': false, // prototypejs global variables.
    'shelljs': false, // shelljs global variables.
  },
  globals: {
    // e.g. 'angular': true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all'
      },
    ],
    'no-console': 0,
  }
}
