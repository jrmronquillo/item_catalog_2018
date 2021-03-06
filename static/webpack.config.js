const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: './homePage/js/index.js',
	mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'home_bund.js'
  },
  devServer: {
    contentBase: './dist'
  }
};
