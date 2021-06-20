module.exports = {
    extends:[
        'eslint:recommended',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        // 'prettier/@typescript-eslint'
        
    ],
    parser       : '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        modules: true
      },
      ecmaVersion: 6,
      project    : './tsconfig.json',
      sourceType : 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
      // "@typescript-eslint/rule-name": "error",
        quotes: ['error', 'single'],
        'no-var': 'error',
        'arrow-parens': ['error', 'as-needed'],
        'comma-dangle': ['error', 'never'],
        'keyword-spacing': ['error', { after: true, before: true }],
        'key-spacing': [2, { align: 'colon' }]
      }
}