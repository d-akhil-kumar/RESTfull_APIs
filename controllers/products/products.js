const model = require('../../model/products/products.js')
const helper = require('../../utilities/helper.js')


exports.get = async (req, res) => {

    try {

        const data = await model.find({})

        if (data.length > 0) {
            res.status(201).json(
                {
                    status: 'Success',
                    data: data
                }
            )
        }
        else {
            res.status(400).json(
                {
                    status: 'fail',
                    msg: 'No Products Found'
                }
            )
        }

    } catch (error) {

        res.status(500).json(
            {
                status: 'fail',
                msg: error
            }
        )

    }
}

exports.add = async (req, res) => {

    try {


        const Id = await helper.generateId(model, 'P')

        req.body.productId = Id



        const data = await model.create(req.body)


        res.status(201).json(
            {
                status: 'Success',
                data: data
            }
        )


    } catch (error) {

        res.status(500).json(
            {
                status: 'fail',
                msg: error.message
            }
        )

    }
}

exports.getById = async (req, res) => {

    try {

        const data = await model.findOne({ productId: req.params.productId })

        if (data != null) {
            res.status(201).json(
                {
                    status: 'Success',
                    data: data
                }
            )
        }
        else {
            res.status(400).json(
                {
                    status: 'fail',
                    msg: 'No Product Found'
                }
            )
        }

    } catch (error) {

        res.status(500).json(
            {
                status: 'fail',
                msg: error
            }
        )

    }
}

exports.updateById = async (req, res) => {
    try {

        const data = await model.findOne({ productId: req.params.productId })

        if (data != null) {


            await model.updateOne(
                { productId: req.params.productId },
                { $set: req.body },
                {
                    new: true,
                    runValidators: true
                }

            )

            res.status(201).json(
                {
                    status: 'Success',
                    data: 'Product Updated Successfully'
                }
            )
        }
        else {
            res.status(400).json(
                {
                    status: 'fail',
                    msg: 'No Product Found'
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

exports.deleteById = async (req, res) => {

    try {

            
        const data = await model.deleteOne({ productId: req.params.productId })

        if (data.deletedCount == 1) {

            res.status(201).json(
                {
                    status: 'Success',
                    data: 'Product Deleted Successfully'
                }
            )

        }
        else {

            res.status(400).json(
                {
                    status: 'fail',
                    msg: 'No Product Found'
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