/**
 * Created by martynasjankauskas on 14/04/16.
 */
// can't use es6 imports here
const webpack = require('webpack');
const path = require('path');

// to copy static assets from source to the servers static assets dir
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: [
    "./app/index.js"
  ],

  output: {
    path: __dirname + '/build',
    filename: "bundle.js",
    publicPath: ''
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.js?$/, include: path.resolve(__dirname, './app'), loaders: ["babel-loader"] },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname + '/app'),
        loaders: ["style", "css", "sass"]
      },
      { test: /\.json/, include: __dirname + '/app', loader: "file-loader" }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './assets', to: '/assets' }
    ])
  ]

};