const path = require('path')
const isDev = process.env.NODE_ENV === 'development' ? true : false
const sourcePath = path.resolve(__dirname, '../src')
const nodeModulesPath = path.resolve(__dirname, '../node_modules')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = {
  entry: {
    main: path.resolve(__dirname, '../src/pages/main/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isDev ? 'js/[name].js' : 'js/[name].[hash:8].js',
    chunkFilename: isDev ? 'js/[name].js' : 'js/[name].[hash:8].js'
  },
  devtool: 'inline-source-map',
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
            },
          },
          { loader: 'css-loader' }
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
            },
          },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75
              }
            }
          },
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
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
