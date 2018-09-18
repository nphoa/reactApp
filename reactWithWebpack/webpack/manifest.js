const path = require('path');

const dir = (src) => path.join(__dirname, src);

const paths = {
    bundle: dir('../bundle')
}

const
    outputFiles = {
        bundle: 'bundle.js',
        vendor: 'vendor.js',
        css: 'style.css',
    };

const
    entries = {
        js: 'index.js',
    };

module.exports = {
    paths,
    outputFiles,
    entries
};