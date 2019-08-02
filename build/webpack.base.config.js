const path = require('path')
const sourcePath = path.resolve(__dirname, '../src')
const nodeModulesPath = path.resolve(__dirname, '../node_modules')

const baseConfig = {
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist')
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