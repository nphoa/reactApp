const ExtractTextPlugin = require('mini-css-extract-plugin');

let rule = {};


rule = {
    test: /\.css$/,
    use:
    [
        {
            loader:ExtractTextPlugin.loader
          
        },
        "css-loader"
    ]
}

module.exports = rule;