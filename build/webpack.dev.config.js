// 常用常量
const path = require('path')
const baseConfig = require('./webpack.base.config')

// 常用库
const WebpackMerge = require('webpack-merge')

// 插件
const plugins = require('./webpack.plugins.config')

const config = WebpackMerge(baseConfig, {
	mode: 'development',
	stats: 'errors-only',
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		index: 'main.html',
		compress: true,
		host: '0.0.0.0',
		port: 1180,
		historyApiFallback: true,
		overlay: true,
		hot: true,
		open: true,
		// openPage: '',
		useLocalIp: true,
	},
	plugins: plugins
})

module.exports = config
