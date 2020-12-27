const jwt = require('jsonwebtoken')

module.exports = (email, userId) => {

    return jwt.sign(
        {
            email : email,
            userId: userId
        },
        process.env.PRIVATE_KEY,
        {
            expiresIn: '1h'
        }
    
    )


}

