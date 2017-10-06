const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const config = require('./webpack.common.js')

const app = express()
const compiler = webpack(config)

// load view engine
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'pug')

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'))

app.listen(3000, () => console.log('Listening on port 3000!\n'))