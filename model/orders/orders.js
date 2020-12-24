const mongoose = require('../../dbConfig/mongoose.js')

const ordersSchema = mongoose.Schema(
    {
        orderId : {
            type : String,
            required : true           
        },
        productId : {
            type : Number,
            ref : 'Products'
        },
        quantity: {
            type : Number,
            default : 1
        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
          }
    }
)


const ordersModel = mongoose.model('Orders', ordersSchema)

module.exports = ordersModel