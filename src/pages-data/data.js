const path = require('path')

const pagesDataObj = {
  main: {
    entry: path.resolve(__dirname, '../pages/main/index.js'),
    // 用于html-webpack-plugin，选项参考：https://github.com/jantimon/html-webpack-plugin#options
    html: {
      template: path.resolve(__dirname, '../pages/main/index.html'),
      filename: 'main.html',
      favicon: path.resolve(__dirname, '../assets/images/main/favicon.ico'),
      title: 'page main',
      chunks: ['main'],
    },
  },
}

module.exports = pagesDataObj