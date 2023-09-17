module.exports = {
  extends: 'erb',
  plugins: ['@typescript-eslint'],
  rules: {
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-import-module-exports': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    'no-new': 'off',
    'react/jsx-boolean-value': 'off',
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    camelcase: 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-restricted-syntax': 'off',
    'no-underscore-dangle': 'off',
    'lines-between-class-members': 'off',
    'react/function-component-definition': 'off',
    'import/order': 'off',
    'default-param-last': 'off',
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve('./.erb/configs/webpack.config.eslint.ts'),
      },
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
};
