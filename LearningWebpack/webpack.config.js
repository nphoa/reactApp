const path = require('path');

module.exports ={
    entry:{
        a:'./src/a.js',
        b:'./src/b.js'
    },
    output:{
        path:path.resolve(__dirname,'bundle'),
        filename:'[name].[chunkhash].bundle.js'
    },
    optimization:{
        splitChunks:{
            chunks:'all',
            minSize: 0
        }
    }
}