const model = require('../../model/products/products.js')
const helper = require('../../utilities/helper.js')
const dotenv = require('dotenv')

dotenv.config()


exports.get = async (req, res) => {

    try {

        const data = await model.find({}, { _id: 0, __v: 0 })

        if (data.length > 0) {

            res.status(200).json(
                {
                    status: 'Success',
                    data: {
                        count: data.length,
                        products: data.map(d => {
                            return {
                                about: d,
                                request: {
                                    method: 'GET',
                                    url: process.env.SERVER_NAME + process.env.PORT + '/products/' + d.productId
                                }

                            }

                        })
                    }
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
                msg: error.message
            }
        )

    }
}

exports.add = async (req, res) => {

    try {


        const id = await helper.generateProductId()
        req.body.productId = id



        const data = await model.create(req.body)

        res.status(201).json(
            {
                status: 'Success',
                data: {

                    about: data,
                    request: {
                        method: 'GET',
                        url: process.env.SERVER_NAME + process.env.PORT + '/products/' + data.productId
                    }

                }
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

        const data = await model.findOne({ productId: req.params.productId }, {_id : 0, __v : 0})

        if (data != null) {
            res.status(200).json(
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


            const data = await model.findOneAndUpdate(
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
                    data: {

                        about: data,
                        request: {
                            method: 'GET',
                            url: process.env.SERVER_NAME + process.env.PORT + '/products/' + data.productId
                        }
    
                    }
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

            res.status(200).json(
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