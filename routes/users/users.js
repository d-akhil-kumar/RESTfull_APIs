const express = require('express')
const controller = require('../../controllers/users/users.js')

const route = express.Router()


route.post('/signup', controller.signup)
     .post('/login', controller.login)



module.exports = route