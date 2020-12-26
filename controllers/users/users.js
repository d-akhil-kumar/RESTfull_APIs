const usersModel = require('../../model/users/users.js')
const bcrypt = require('bcryptjs');
const helper = require('../../utilities/helper.js')
			
const genSalt = bcrypt.genSaltSync(10);

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