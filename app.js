const express = require('express')
const productsRoute = require('./routes/products/products.js')
const ordersRoute = require('./routes/orders/orders.js')
const bodyParser = require('body-parser')
const errHandler = require('./utilities/errHandler.js')
const morgan = require('morgan')
const logger = require('./utilities/logger')
const corsHandler = require('./utilities/handlingCors')
const dotenv = require('dotenv')



dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.use(morgan('combined', { stream: logger }))

app.use(express.static('public'))
app.use(corsHandler)

app.use('/products', productsRoute)
app.use('/orders', ordersRoute)


app.use((req,res,next) => {
    const error = new Error()
    error.message = 'Bad Request'
    error.status = 500
    next(error)
})

app.use(errHandler)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})