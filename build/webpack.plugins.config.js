// 常用常量
const path = require('path')
const isDev = process.env.NODE_ENV === 'development' ? true : false

// 通用插件
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 开环环境插件
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const QrCodeWebpackPlugin = require('webpack-dev-server-qr-code')
const VConsoleWebpackPlugin = require('vconsole-webpack-plugin')

// 生产环境插件
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default

// 其它库
const webpack = require('webpack')
const ip = require('ip').address()
const notifier = require('node-notifier')

// 页面数据
const pagesDataObj = require(path.resolve(__dirname, '../src/pages-data/data'))


// webpack插件配置数组
let plugins = []
// htmlWebpackPlugins配置数组
let htmlWebpackPlugins = []

// 遍历pagesDataObj对象，将配置加入htmlWebpackPlugins配置数组
if (pagesDataObj instanceof Object) {
  for (let key in pagesDataObj) {
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: pagesDataObj[key].template,
        filename: pagesDataObj[key].filename,
        title: pagesDataObj[key].title,
        favicon: pagesDataObj[key].favicon,
        chunks: pagesDataObj[key].chunks,
        hash: true,
        meta: {
          viewport: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
        },
        minify: isDev ? false : {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        } // 此参数可选值：Boolean|Object，参数选项：https://github.com/DanielRuf/html-minifier-terser
      })
    )
  }
}

// 将htmlWebpackPlugins配置数组合并到webpack配置数组
plugins = plugins.concat(htmlWebpackPlugins)

// 合并其它通用插件数组
plugins = plugins.concat([
  new VueLoaderPlugin(),
  new CleanWebpackPlugin(),
  // new CopyWebpackPlugin([
  //   {
  //     from: '',
  //     to: ''
  //   }
  // ]),
])

// 不同环境合并不同插件数组
if (isDev == true) {
  plugins = plugins.concat([
    new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[name].css'
		}),
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
  ])
} else {
  plugins = plugins.concat([
    new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new ImageminWebpackPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			pngquant: {
				quality: '95-100'
			}
		})
  ])
}

module.exports = plugins