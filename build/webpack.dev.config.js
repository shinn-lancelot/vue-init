const path = require('path')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')

const config = webpackMerge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        use: [
          { loader: 'css-loader' },
          { loader: 'style-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    overlay: true
  }
})

console.log(config)

module.exports = config