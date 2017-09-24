const mongoose = require('mongoose')

let Schema = mongoose.Schema

// user schema
let userSchema = new Schema({
    first_name: String,
    last_name: String
})

// user model
let User = mongoose.model('User', userSchema)

module.exports = User