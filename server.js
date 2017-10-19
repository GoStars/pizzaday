const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const config = require('./webpack.common.js')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// bring in user model
let User = require('./models/user')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/pizzaday', {
    useMongoClient: true 
})
// check connection
mongoose.connection.once('open', () => console.log('Connected to MongoDB'))
// check for db errors
mongoose.connection.on('error', err => console.log(err))

const app = express()
const compiler = webpack(config)

// load view engine
app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'pug')

// body parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

// set public folder
app.use(express.static('public'))

app.use(bodyParser.json())

/*app.get('/users', (req, res) => {
    User.find(function (err, users) {
        if (err) {
            return console.error(err)
        } else {
            res.json(users)
        }
    })
})*/

// route files
let users = require('./api/index')
app.use(users)

app.listen(3000, () => console.log('Listening on port 3000!\n'))