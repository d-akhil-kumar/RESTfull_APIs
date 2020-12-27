const usersModel = require('../../model/users/users.js')
const helper = require('../../utilities/helper.js')
const dotenv = require('dotenv')
const generateToken = require('../../utilities/generateSignToken.js')


const bcrypt = require('bcryptjs');
const genSalt = bcrypt.genSaltSync(10);

dotenv.config();



exports.signup = async (req,res) => {
    try {

        if((await usersModel.find({email : req.body.email})).length == 1){

            res.status(400).json(
                {
                    status: 'error',
                    msg: 'Email already registered'
                }
            )


        }
        else{

            const id =  await helper.generateUserId()
            
            req.body.userId = id
            req.body.password = bcrypt.hashSync(req.body.password, genSalt)

            const data = await usersModel.create(req.body)

            console.log(data)

            

            res.status(201).json(
                {
                    status: 'success',
                    msg: 'You are successfully registered'
                }
            )

        }
        
    } catch (error) {

        res.status(500).json(
            {
                status: 'fail',
                msg: error.message
            }
        )
        
    }
}


exports.login = async (req,res) => {
    try {

        const data = await usersModel.findOne({email : req.body.email})
        
        if(data == null){

            res.status(401).json(
                {
                    status: 'error',
                    msg : 'Auth Failed'
                }
            )
        }
        else{

            if(await bcrypt.compare(req.body.password, data.password)){


                const token = generateToken(data.email, data.userId)


                res.status(200).json(
                    {
                        status: 'success',
                        token: token
                    }
                )

            }
            else{

                res.status(401).json(
                    {
                        status: 'error',
                        msg : 'Auth Failed'
                    }
                )
            }

            


        }

    } catch (error) {

        req.status(500).json(
            {
                status : 'fail',
                msg : error.message
            }
        )
        
    }
}

