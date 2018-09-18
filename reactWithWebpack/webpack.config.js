const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const pathBundle = require('./webpack/manifest');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: pathBundle.paths.bundle
  },
  watch: true,
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: '/node_modules/'
      },
      {
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ],
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        use: 'file-loader',
        //test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
        test: /\.(woff|woff2|eot|ttf|otf|jpe?g|gif|png|svg|eot)$/,
      },

    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html',
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new ExtractTextPlugin({
      filename:"styleBundle.css",
      allChunks:false
    })
  ],
  devServer: {
    open: true
  }
};