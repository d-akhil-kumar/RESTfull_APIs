const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

module.exports = async (req,res,next) => {

    try{

        //set Authorization header: Bearer <Token>
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY)
        console.log(decoded)
        next()


    }catch(error){
        res.status(401).json(
            {
                status: 'fail',
                msg: 'Auth Failed'
            }
        )
    }
}