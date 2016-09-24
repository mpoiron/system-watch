var path = require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: {
        vendor: [
            './node_modules/zone.js/dist/zone.js',
            './app/vendor.ts',
        ],
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
            { test: /\.ts$/, exclude: /node_modules/, loader: 'ts' }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './app/**/*.html', to: './wwwroot/views/', flatten: true }
        ])
    ],

    devtool: 'source-map'
}
