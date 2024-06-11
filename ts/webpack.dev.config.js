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
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
