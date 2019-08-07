const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = webpackMerge(baseConfig, {
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    overlay: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '../dist/css/[name].[contenthash:8].css',
      chunkFilename: '[name].css'
    })
  ]
})

module.exports = config