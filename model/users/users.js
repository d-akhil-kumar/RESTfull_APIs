const mongoose = require('../../dbConfig/mongoose.js')

const usersSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            unique: true,
            required: true,
        },
        email:{
            type: String,
            unique: true,
            require: true,
            match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        },
        password: {
            type: String,
            required: true,
        }

    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: true
        }
    }
)

const usersModel = mongoose.model('Users', usersSchema)

module.exports = usersModel