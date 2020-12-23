const express = require('express')
const controller = require('../../controllers/products/products.js')

const route = express.Router()


route.get('/', controller.get)
route.post('/', controller.add)
route.get('/:productId', controller.getById)
route.put('/:productId', controller.updateById)
route.delete('/:peoductId', controller.deleteById)
route.all('*', (req,res) => res.status(404).json({status:'fail', msg: 'Invalid Path'}))



module.exports = route