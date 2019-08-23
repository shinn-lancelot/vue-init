const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = webpackMerge(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    index: 'main.html',
    compress: true,
    host: '127.0.0.1',
    port: 1180,
    open: true,
    hot: true,
    openPage: 'main.html',
    historyApiFallback: true,
    overlay: true
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
      hash: true,
      chunks: ['main']
    }),
    new CleanWebpackPlugin()
  ]
})

module.exports = config
