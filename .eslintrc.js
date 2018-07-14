module.exports = {
  extends: ['google', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
  },
  plugins: ['flowtype', 'import'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: false,
    },
  },
  parser: 'babel-eslint',
  rules: {
    'max-len': ['error', {code: 120, ignoreComments: true}],
    'require-jsdoc': [
      'error',
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
  },
};
