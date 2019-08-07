const path = require('path')
const sourcePath = path.resolve(__dirname, '../src')
const nodeModulesPath = path.resolve(__dirname, '../node_modules')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const baseConfig = {
  entry: {
    mobile: path.resolve(__dirname, '../src/pages/mobile/index.js'),
    admin: path.resolve(__dirname, '../src/pages/admin/index.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[chunkhash:8].js',
    chunkFilename: 'js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
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
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: [
      sourcePath,
      nodeModulesPath
    ]
  }
}

module.exports = baseConfig