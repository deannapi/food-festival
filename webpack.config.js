const webpack = require('webpack');
const path = require('path');
require('bootstrap');

module.exports = { 
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    mode: 'development'}