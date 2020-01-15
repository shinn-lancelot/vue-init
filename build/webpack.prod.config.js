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

// 插件，压缩js、css、图片
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default

const config = WebpackMerge(baseConfig, {
	mode: 'production',
	optimization: {
		minimize: true,
		minimizer: [
			// new UglifyjsWebpackPlugin({
			// 	cache: true,
			// 	parallel: true,
			// 	uglifyOptions: {
      //     output: {
      //       comments: false,
      //     },
			// 	},
			// 	extractComments: false,
			// }),
			new TerserWebpackPlugin({
				cache: true,
				parallel: true,
				terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
			new OptimizeCssAssetsWebpackPlugin({})
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].css'
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
			},
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				minifyCSS: true
			}
		}),
		new CleanWebpackPlugin(),
		// new CopyWebpackPlugin([
		//   {
		//     from: '',
		//     to: ''
		//   }
		// ]),
		new ImageminWebpackPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			pngquant: {
				quality: '95-100'
			}
		})
	]
})

module.exports = config
