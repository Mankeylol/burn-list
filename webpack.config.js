const webpack = require('webpack');

module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer']
        })
    ],
    resolve: {
        fallback: {
            crypto: false
        }
    }
};