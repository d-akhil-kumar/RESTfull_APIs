const express = require('express')
const controller = require('../../controllers/products/products.js')
const upload = require('../../utilities/fileUploader.js')
const checkAuth = require('../../middlewares/checkAuth.js')

const route = express.Router()


route.get('/', controller.get)
     .get('/:productId', controller.getById)
     .use(checkAuth)                                                    //authenticate user
     .post('/', upload.single('productImage'), controller.add)
     .put('/:productId', upload.single('productImage'), controller.updateById)
     .delete('/:productId', controller.deleteById)
     .all('*', (req,res) => res.status(404).json({status:'fail', msg: 'Invalid Path'}))


module.exports = route