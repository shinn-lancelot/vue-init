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

const config = WebpackMerge(baseConfig, {
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
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {
    //     from: '',
    //     to: ''
    //   }
    // ])
  ]
})

module.exports = config
