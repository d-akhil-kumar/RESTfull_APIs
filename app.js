const express = require('express')
const productsRoute = require('./routes/products/products.js')
const ordersRoute = require('./routes/orders/orders.js')
const usersRoute = require('./routes/users/users.js')
const bodyParser = require('body-parser')
const errHandler = require('./utilities/errHandler.js')
const morgan = require('morgan')
const logger = require('./utilities/logger')
const corsHandler = require('./utilities/handlingCors')
const dotenv = require('dotenv')
const helmet = require('helmet')

dotenv.config()

const app = express()

app.use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }))

   .use(helmet())

   .use(morgan('combined', { stream: logger }))

   .use(express.static('public'))
   .use(corsHandler)

   .use('/products', productsRoute)
   .use('/orders', ordersRoute)
   .use('/users', usersRoute)

   .use((req,res,next) => {
    const error = new Error()
    error.message = 'Bad Request'
    error.status = 500
    next(error)
    })

   .use(errHandler)

   

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})