const path = require('path')
const webpack = require('webpack') // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve('src/index.js'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
