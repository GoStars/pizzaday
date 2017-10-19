const express = require('express')

const router = express.Router()

// bring in user model
let User = require('../models/user')

// signup process
router.post('/signup', (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    let newUser = new User({username, email, password})

    newUser.save(err => {
        if (err) {
            return console.log(err)
        } else {
            res.send('Failure')
        }
    })
})

// login process
router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    // match email and password
    let query = {email, password}
    User.findOne(query, (err, users) => {
        if (err) {
            return console.log(err)
        }
        
        if (!users) {
            res.send('Failure')
        } else {
            res.send('Success')
        }
    })
})

module.exports = router