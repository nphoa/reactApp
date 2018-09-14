const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'bundle')
  },
  module:{
      rules:[
           {
               use:'babel-loader',
               test:/\.js$/,
               exclude:'/node_modules/'
           },
           {
                use:[
                    'style-loader',
                    'css-loader'
                ],
                test:/\.css$/
           },
           {
                use:'file-loader',
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/
           }
      ]
  }
};