// 常用常量
const path = require('path')
const isDev = process.env.NODE_ENV === 'development' ? true : false
const sourcePath = path.resolve(__dirname, '../src')
const nodeModulesPath = path.resolve(__dirname, '../node_modules')

// 插件，常用包
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 页面数据
const pagesDataObj = require(path.resolve(__dirname, '../src/pages-data/data'))

// entry对象
let entry = {}
// 遍历pagesDataObj对象，获取entry配置
if (pagesDataObj instanceof Object) {
  for (let key in pagesDataObj) {
		entry[key] = pagesDataObj[key].entry
	}
}

// 基本配置
const baseConfig = {
	entry: entry,
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: isDev ? 'js/[name].js' : 'js/[name].[hash:8].js',
		chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:8].js'
	},
	devtool: isDev ? 'eval-source-map' : 'none',
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: [
					{ loader: 'vue-loader' }
				]
			},
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader?cacheDirectory=true'],
				include: path.resolve(__dirname, '../src')
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
							hmr: isDev
						}
					},
					{ loader: 'css-loader' },
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: path.resolve(__dirname, '../postcss.config')
							}
						}
					}
				]
			},
			{
				test: /\.(scss|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: '../',
							hmr: isDev
						}
					},
					{ loader: 'css-loader' },
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: {
								path: path.resolve(__dirname, '../postcss.config')
							}
						}
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192, // 8192字节以下将打包成base64
							name: isDev
								? 'images/[name].[ext]'
								: 'images/[name].[contenthash:8].[ext]',
							publicPath: ''
						}
					}
					// {
					//   loader: 'image-webpack-loader',
					//   options: {
					//     mozjpeg: {
					//       progressive: true,
					//       quality: 65
					//     },
					//     optipng: {
					//       enabled: false
					//     },
					//     pngquant: {
					//       quality: '65-90',
					//       speed: 4
					//     },
					//     gifsicle: {
					//       interlaced: false
					//     },
					//     webp: {
					//       quality: 75
					//     }
					//   }
					// },
					// { loader: 'file-loader' }
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 8192,
							name: isDev
								? 'fonts/[name].[ext]'
								: 'fonts/[name].[contenthash:8].[ext]',
							publicPath: ''
						}
					}
				]
			},
			{
				test: /\.(wav|mp3|ogg|ogg|mpeg4|webm)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 8192,
							name: isDev
								? 'medias/[name].[ext]'
								: 'medias/[name].[contenthash:8].[ext]',
							publicPath: ''
						}
					}
				]
			},
			{
				test: /\.json$/,
				use: [
					{
						loader: 'json-loader'
					}
				]
			},
			// 打包html中的图片等，暂取消，与HtmlWebpackPlugin有冲突
			// {
			//   test: /\.html$/,
			//   use: [
			//     {
			//       loader: 'html-loader',
			//       options: {
			//         attrs: ['img:src', 'img:data-src']
			//       }
			//     }
			//   ]
			// }
		]
	},
	resolve: {
		extensions: ['.vue', '.js', '.scss', '.css', '.json'],
		alias: {
			'@': path.resolve(__dirname, '../src'),
			api: path.resolve(__dirname, '../src/api'),
			assets: path.resolve(__dirname, '../src/assets'),
			common: path.resolve(__dirname, '../src/common'),
			components: path.resolve(__dirname, '../src/components'),
			pages: path.resolve(__dirname, '../src/pages'),
			router: path.resolve(__dirname, '../src/router'),
			store: path.resolve(__dirname, '../src/store'),
			vue$: 'vue/dist/vue.esm.js'
		},
		modules: [sourcePath, nodeModulesPath]
	}
}

module.exports = baseConfig
