module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-unused-vars': 'warn',
    'no-extra-semi': 'error',
    'no-sparse-arrays': 'error',
    'no-trailing-spaces': 'error',
    'no-unreachable': 'error',
    'no-dupe-keys': 'error',
    'no-lone-blocks': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-pattern': 'error',
    'no-unexpected-multiline': 'error',
    'no-const-assign': 'error',
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
      },
    ],
    'func-call-spacing': 'error',
    'comma-spacing': 'error',
    // 'object-property-newline': 'error',
    'operator-linebreak': 'error',
    'block-spacing': 'error',
    'space-infix-ops': 'error',
    'semi-spacing': 'error',
    'handle-callback-err': 'error',
    curly: 'error',
    'require-await': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'eol-last': ['error', 'always'],
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    'max-len': [
      'warn',
      {
        code: 120,
        comments: 300,
        tabWidth: 4,
        ignoreUrls: true,
      },
    ],
    'no-console': 'warn',
    'no-invalid-regexp': 'warn',
    eqeqeq: 'warn',
    'space-before-blocks': ['warn', 'always'],
    'rest-spread-spacing': ['warn', 'never'],
  },
};
