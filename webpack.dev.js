const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        port: 3000,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        hot: true, // Tell the dev-server we're using HMR
        contentBase: './dist',
        publicPath: '/'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
    ]
})