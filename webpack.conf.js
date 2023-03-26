const Webpack = require('webpack')
const path = require('path')

/**
 * @type { Webpack.Configuration }
 */
module.exports = {
  mode: 'null',
  entry: './src/pages/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'babel-loader'
      }
    ]
  }
}