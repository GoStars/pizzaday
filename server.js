const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
const path = require('path')
const config = require('./webpack.common.js')
const apiRouter = require('./api/index.js')

const app = express()
const compiler = webpack(config)

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/pizzaday', {
    useMongoClient: true
})
// check connection
mongoose.connection.once('open', () => console.log('Connected to MongoDB'))
// check for db errors
mongoose.connection.on('error', err => console.log(err))

// load view engine
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'pug')

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static('public'))

app.use('/api', apiRouter)

app.listen(3000, () => console.log('Listening on port 3000!\n'))