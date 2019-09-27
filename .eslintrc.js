module.exports = {
	env: {
		browser: true,
		es6: true
	},
	extends: ['eslint:recommended', 'plugin:vue/essential'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	plugins: ['vue'],
	rules: {
		// 引号相关规则
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		// 分号相关规则
		semi: [
			'off',
			'always',
			{
				omitLastInOneLineBlock: true
			}
		],
		'no-extra-semi': 'error',
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'semi-style': ['error', 'last'],
		// 空格相关规则
		'space-before-blocks': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				block: {
					exceptions: ['*'],
					balanced: true
				}
			}
		],
		'switch-colon-spacing': [
			'error',
			{
				after: true,
				before: false
			}
		],
		'unicode-bom': ['error', 'never'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'array-bracket-spacing': ['error', 'never']
	}
}
