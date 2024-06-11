const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  mode: 'development',
  devtool: 'eval',
  output: {
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    static: { directory: path.join(__dirname, 'public') },
    port: 3000,
    compress: true,
    open: true,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel'],
        },
        exclude: path.join(__dirname, 'node_modules'),
      },
    ],
  },
});
