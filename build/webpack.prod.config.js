const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const config = webpackMerge(baseConfig, {
  mode: 'production',
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].css'
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
