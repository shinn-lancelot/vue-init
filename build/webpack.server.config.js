const path = require('path')

const config = {
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    index: 'main.html',
    compress: true,
    host: '127.0.0.1',
    port: 1180,
    open: true,
    openPage: 'main.html',
    hot: true,
    historyApiFallback: true,
    overlay: true
  },
}

module.exports = config
