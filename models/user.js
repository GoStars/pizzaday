const mongoose = require('mongoose')

let Schema = mongoose.Schema

// user schema
let userSchema = new Schema({
    username: String,
    email: String,
    password: String
})

// user model
let User = mongoose.model('User', userSchema)

module.exports = User