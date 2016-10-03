var path = require('path')
var webpack = require('webpack');

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
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ],

    devtool: 'source-map'
}
