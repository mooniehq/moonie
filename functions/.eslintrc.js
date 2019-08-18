module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
    "jest/globals": true
    node: true,
  },
  extends: [
    'standard',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'jest',
    'react'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'camelcase': 'off',
    'padded-blocks': 'off',
    "react/prop-types": ['error', { ignore: ['children', 't'] }],
    'react/react-in-jsx-scope': 'off'
  }
}
