const Webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const JSONC = require('jsonc-parser')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const { dependencies: packageJsonDeps } = require('./package.json')

// 共用path 的可以搞个 npm 包
function readJson(jsonPath) {
  const jsonText = fs.readFileSync(jsonPath, "utf8");
  return JSONC.parse(jsonText);
}

const TSConfig = readJson('./tsconfig.json', 'utf-8')
const TSConfPaths = TSConfig.compilerOptions.paths

// 获取工作目录
const cwdPath = process.cwd()
const resolvePaths = Object.entries(TSConfPaths).reduce((res, [key, list]) => {
  const [name, ...others] = key.split('/')
  const suffix = others.join('/')
  res[name] = list.map(pathName => path.resolve(cwdPath, pathName.replace(suffix, '')))
  return res
}, {})
/**
 * @type { Webpack.WebpackOptionsNormalized }
 */
module.exports = {
  mode: 'development',
  entry: [ 'core-js', './src/index.tsx'],
  output: {
    path: path.resolve(cwdPath, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(j|t)s(x)?$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      ...resolvePaths,
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '...']
  },
  devtool: 'eval-source-map',
  devServer: {
    static: path.join(cwdPath, 'public'),
    compress: true,
    port: 9100,
    hot: true,
    historyApiFallback: true,
    // https://webpack.docschina.org/configuration/dev-server/#devserverallowedhosts
    // 当设置为 'auto' 时，此配置项总是允许 localhost、 host 和 client.webSocketURL.hostname：
    allowedHosts: 'all',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'webpackBHost',
      filename: 'remoteEntry.js',
      exposes: {
        './InfoPage': './src/pages/InfoPage'
      },
      remotes: {
        libA: 'webpackAHost@http://localhost:9000/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(cwdPath, 'public/index.html')
    })
  ],
  watchOptions: {
    ignored: /node_modules/,
  }
}