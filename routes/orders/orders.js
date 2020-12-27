const express = require('express');
const controller = require('../../controllers/orders/orders.js')
const checkAuth = require('../../middlewares/checkAuth.js')

const route = express.Router()


route.use(checkAuth)
     .get('/', controller.get)
     .post('/', controller.add)
     .get('/:orderId', controller.getById)
     .delete('/:orderId', controller.deleteById)
     .all('*', (req,res) => res.status(404).json({status:'fail', msg: 'Invalid Path'}))

module.exports = route