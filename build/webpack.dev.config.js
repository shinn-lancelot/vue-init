// 常用常量
const path = require('path')
const baseConfig = require('./webpack.base.config')

// 插件，常用包
const WebpackMerge = require('webpack-merge')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 其它开发所需库
const ip = require('ip').address()
const webpack = require('webpack')

const config = WebpackMerge(baseConfig, {
	mode: 'development',
	stats: 'errors-only',
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		index: 'main.html',
		compress: true,
		host: ip,
		port: 1180,
		historyApiFallback: true,
		overlay: true,
		hot: true,
		open: true,
		// openPage: '',
		useLocalIp: true,
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].css'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/pages/main/index.html'),
			filename: 'main.html',
			title: 'page main',
			favicon: path.resolve(__dirname, '../src/assets/images/favicon.ico'),
			hash: true,
			chunks: ['main']
		}),
		new CleanWebpackPlugin(),
		// new CopyWebpackPlugin([
		//   {
		//     from: '',
		//     to: ''
		//   }
		// ]),
		new webpack.HotModuleReplacementPlugin()
	]
})

module.exports = config
