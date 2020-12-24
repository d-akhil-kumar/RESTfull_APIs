const mongoose = require('../../dbConfig/mongoose.js')

const productsSchema = mongoose.Schema(
    {
        productId : {
            type : String,
            unique: true,
            required: true
        },
        name : {
            type : String,
            required: true 
        },
        price : {
            type : Number,
            required: true         

        }
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true,
          }
    }
)


const productsModel = mongoose.model('Products' , productsSchema)

module.exports = productsModel