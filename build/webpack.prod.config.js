// 常用常量
const path = require('path')
const baseConfig = require('./webpack.base.config')

// 常用库
const WebpackMerge = require('webpack-merge')

// 插件
const plugins = require('./webpack.plugins.config')

// 其它插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const config = WebpackMerge(baseConfig, {
	mode: 'production',
	optimization: {
		runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name (module) {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
            return `vendor.${packageName.replace('@', '')}`
          },
        },
      },
    },
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
	plugins: plugins
})

module.exports = config
