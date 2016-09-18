var path = require('path')

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
        filename: './wwwroot/js/[name].bundle.js',
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            { test: /\.ts$/, exclude: /node_modules/, loader: 'ts' }
        ]
    },

    devtool: 'source-map'
}
