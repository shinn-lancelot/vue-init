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

// 页面数据
const pagesDataObj = require(path.resolve(__dirname, '../src/pages-data/data'))

// 其它开发所需库
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const QrCodeWebpackPlugin = require('webpack-dev-server-qr-code')
const VConsoleWebpackPlugin = require('vconsole-webpack-plugin')
const ip = require('ip').address()
const notifier = require('node-notifier')

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
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].css'
		}),
		new HtmlWebpackPlugin({
			template: pagesDataObj.main.template,
			filename: pagesDataObj.main.filename,
			title: pagesDataObj.main.title,
			favicon: pagesDataObj.main.favicon,
			chunks: pagesDataObj.main.chunks,
			hash: true,
			meta: {
				viewport: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
			}
		}),
		new CleanWebpackPlugin(),
		// new CopyWebpackPlugin([
		//   {
		//     from: '',
		//     to: ''
		//   }
		// ]),
		new webpack.HotModuleReplacementPlugin(),
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				message:[`App: http://${ip}:${this.port}`],
				// notes:['']
			},
			onErrors:function(severity,errors){
				if (severity !== 'error') {
					return;
				}
				const error = errors[0];
				notifier.notify({
					title: "Webpack error",
					message: severity + ': ' + error.name,
					subtitle: error.file || '',
					// icon: ''
				})
			},
			clearConsole:true,
		}),
		new QrCodeWebpackPlugin({
			size: 'small'
		}),
		new VConsoleWebpackPlugin({
			filter: '',
			enable: true
		})
	]
})

module.exports = config
