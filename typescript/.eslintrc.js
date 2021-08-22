module.exports = {
	extends: [
		'eslint:recommended',
		'airbnb-typescript/base',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier',
		// "plugin:@typescript-eslint/recommended-requiring-type-checking",
		// 'plugin:typescript-sort-keys/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		// 'prettier/@typescript-eslint',
	],
	parser       : '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 6,
		project    : './tsconfig.json',
		sourceType:'module'
	},
	plugins: ['@typescript-eslint'],
	rules  : {
		"no-console": "off",
		// 'prettier/prettier'                               : ['error'],
		semi                                              : ['error', 'always'],
		'object-curly-spacing'                            : ['error', 'always'],
		camelcase                                         : 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/no-explicit-any'              : 1,
		// '@typescript-eslint/no-inferrable-types'          : [
		// 	'warn',
		// 	{
		// 		ignoreParameters: true,
		// 	},
		// ],
		'no-underscore-dangle'             : 'off',
		'no-shadow'                        : 'off',
		'no-new'                           : 0,
		'@typescript-eslint/no-shadow'     : ['error'],
		'@typescript-eslint/no-unused-vars': 'warn',
		quotes                             : [2, 'single', { avoidEscape: true }],
		'class-methods-use-this'           : 'off',
		'import/extensions'                : [
			'error',
			'ignorePackages',
			{
				js : 'never',
				jsx: 'never',
				ts : 'never',
				tsx: 'never',
			},
		],
	},
};
