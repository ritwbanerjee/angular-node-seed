var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    
    entry: {
        vendor: [
            './client/polyfills.ts',
            './client/vendor.ts'
        ],
        app: [
            './client/main.ts'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            warnings: true,
            comments: false,
            compress: true,
            mangle: false, // MANGLE BREAKS JQUERY
            sourceMap: false
          }),
        new webpack.NoErrorsPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
            'NODE_ENV': JSON.stringify('production')
            }
        })
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        warnings: false,
        colors: true,
        hash: false,
        version: false,
        timings: false,
        assets: false,
        chunks: false,
        modules: false,
        reasons: false,
        children: false,
        source: false,
        errors: false,
        errorDetails: false,
        warnings: false,
        publicPath: false
    }
});