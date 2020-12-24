const mongoose= require('mongoose')

const counterSchema = mongoose.Schema(
    {
        productCounter : {
            type: Number
        },
        orderCounter : {
            type: Number
        }
    }
)


const counterModel = mongoose.model('ProductCounter', counterSchema)

module.exports = counterModel