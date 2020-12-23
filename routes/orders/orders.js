const express = require('express');
const controller = require('../../controllers/orders/orders.js')

const route = express.Router()

route.get('/', controller.get)
route.post('/', controller.add)
route.get('/:orderId', controller.getById)
route.delete('/:orderId', controller.deleteById)
route.all('*', (req,res) => res.status(404).json({status:'fail', msg: 'Invalid Path'}))

module.exports = route