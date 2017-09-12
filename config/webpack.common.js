var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {

    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html', '.pug', 'map']
        // exclude: ['node_modules']
    },

    module: {
        rules: [{ // ASSETS
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
                }]
            }, {
                test: /\.ts$/,
                loaders: [{
                        loader: 'awesome-typescript-loader',
                        options: { tsconfig: helpers.root('tsconfig.json') }
                    }, 'angular2-template-loader',
                    '@angularclass/hmr-loader',
                    'angular2-router-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            { // PUG
                test: /\.pug$/,
                loader: ['html-loader', 'pug-html-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            { // SASS
                test: /\.(css|scss)$/,
                use: ['to-string-loader'].concat(ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{loader: 'css-loader'}, {loader:'sass-loader'}]
                }))
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({ // define where to save the file
            filename: '[name].bundle.css',
            allChunks: true,
          }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, '../public') }
        ]),
        new webpack.ProvidePlugin({
            Hammer: 'hammerjs/hammer',
            // jQuery: 'jquery',
            // $: 'jquery',
            // "window.jQuery": "jquery",
            // jquery: 'jquery'
        }),
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('./client'), // location of your src
            {} // a map of your routes
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            filetype: 'pug',
            template: 'client/index.pug'
        })
    ]
};