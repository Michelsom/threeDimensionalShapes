module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  ignorePatterns: [
    'babel.config.js',
    'metro.config.js',
    'jest.config.js',
    'jest.setup.ts',
    'react-native.config.ts',
    'react-native.config.js',
    'assetsTransformer.ts',
    'features/Auth/auth.e2e.ts',
    'e2e/environment.ts',
    '.eslintrc.js',
    '**/*.test.ts*',
    '**/*.e2e.ts*',
    '**/**/*.e2e.ts*',
    'commitlint.config.js',
    'jest.setup.js',
  ],
  plugins: [
    'react',
    'jest',
    'react-native',
    'detox',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    // typescript
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/default-param-last': 'off',

    camelcase: 'off',
    'no-console': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unstable-nested-components': ['warn', {allowAsProps: true}],
    'react/prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-async-promise-executor': 'off',
    'no-nested-ternary': 'off',
    'object-curly-newline': 'off',
    'react/jsx-wrap-multilines': 'off',
    'global-require': 'off',
    'react/jsx-no-bind': 'off',
    'no-param-reassign': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-underscore-dangle': 'off',
    'react/require-default-props': 'off',
    // 'react-native/no-unused-styles': 2,
    // 'react-native/split-platform-components': 2,
    // 'react-native/no-inline-styles': 2,
    // 'react-native/no-color-literals': 2,
    // 'react-native/no-raw-text': 2,
    // 'react-native/no-single-element-style-arrays': 2,
  },
};
