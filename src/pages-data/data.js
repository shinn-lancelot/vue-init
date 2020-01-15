const path = require('path')

const pagesDataObj = {
  main: {
    template: path.resolve(__dirname, '../pages/main/index.html'),
    filename: 'main.html',
    favicon: path.resolve(__dirname, '../assets/images/favicon.ico'),
    title: 'page main',
    chunks: ['main']
  }
}

module.exports = pagesDataObj