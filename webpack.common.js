const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
            './src/index.jsx'
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
            template: './views/index.pug',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
               test: /\.css$/,
               use: ['style-loader', 'css-loader'] 
            }
        ]
    }
}