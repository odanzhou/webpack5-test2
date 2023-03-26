const Webpack = require('webpack')

/**
 * @type { Webpack.Configuration }
 */
module.exports = {
  mode: 'null',
  module: {
    rules: [
      {
        test: /\.ts(x)?$/,
        loader: 'babel-loader'
      }
    ]
  }
}