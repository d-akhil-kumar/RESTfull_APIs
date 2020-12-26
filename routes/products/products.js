const express = require('express')
const controller = require('../../controllers/products/products.js')
const upload = require('../../utilities/fileUploader.js')

const route = express.Router()


route.get('/', controller.get)
     .post('/', upload.single('productImage'), controller.add)

route.get('/:productId', controller.getById)
     .put('/:productId', upload.single('productImage'), controller.updateById)

route.delete('/:productId', controller.deleteById)
route.all('*', (req,res) => res.status(404).json({status:'fail', msg: 'Invalid Path'}))



module.exports = route