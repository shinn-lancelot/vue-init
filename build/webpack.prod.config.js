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
			template: path.resolve(__dirname, '../src/pages/main/index.html'),
			filename: 'main.html',
			title: 'page main',
			favicon: path.resolve(__dirname, '../src/assets/images/favicon.ico'),
			hash: true,
			chunks: ['main'],
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
