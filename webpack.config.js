var path = require('path')
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './app/polyfills.ts',
        vendor: './app/vendor.ts',
        app: './app/app.ts'
    },

    debug: true,

    output: {
        filename: './wwwroot/scripts/[name].bundle.js',
    },

    resolve: {
        extensions: ['', '.js', '.ts', '.html']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['raw-loader', 'sass-loader']
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new CopyWebpackPlugin([{
            context: 'app/assets',
            from: '**/*',
            to: 'wwwroot/assets'
        }]),
        new LiveReloadPlugin({
            port: 35729,
            hostname: 'localhost',
            appendScriptTag: true
        })
    ],

    devtool: 'source-map'
}
