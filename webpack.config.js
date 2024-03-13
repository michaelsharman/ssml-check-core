const webpack = require('webpack');

module.exports = {
    entry: {
        main: './index.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'main.js',
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
        }),
    ],
    resolve: {
        fallback: {
            fs: false,
            http: false,
            buffer: require.resolve('buffer/'),
            stream: require.resolve('stream-browserify'),
        },
    },
};
