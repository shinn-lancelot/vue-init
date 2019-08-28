// 常用常量
const path = require('path')
const isDev = process.env.NODE_ENV === 'development' ? true : false
const sourcePath = path.resolve(__dirname, '../src')
const nodeModulesPath = path.resolve(__dirname, '../node_modules')

// 插件，常用包
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// 基本配置
const baseConfig = {
  entry: {
    main: path.resolve(__dirname, '../src/pages/main/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isDev ? 'js/[name].js' : 'js/[name].[hash:8].js',
    chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[chunkhash:8].js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
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
                path: path.resolve(__dirname, '../postcss.config.js')
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
                path: path.resolve(__dirname, '../postcss.config.js')
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
              name: isDev ? 'images/[name].[ext]' : 'images/[name].[contenthash:8].[ext]',
              publicPath: ''
            }
          },
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
              name: isDev ? 'fonts/[name].[ext]' : 'fonts/[name].[contenthash:8].[ext]',
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
              name: isDev ? 'medias/[name].[ext]' : 'medias/[name].[contenthash:8].[ext]',
              publicPath: ''
            }
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
    extensions: [
      '.vue',
      '.js',
      '.scss',
      '.css',
      '.json'
    ],
    alias: {
      'Api': path.resolve(__dirname, '../src/api'),
      'Common': path.resolve(__dirname, '../src/common'),
      'Components': path.resolve(__dirname, '../src/components'),
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: [
      sourcePath,
      nodeModulesPath
    ]
  }
}

module.exports = baseConfig
