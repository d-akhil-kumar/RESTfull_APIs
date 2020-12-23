exports.get = async (req,res) => {
    res.send('get all products')
}


exports.add = async (req,res) => {
    res.send('add new product')
}


exports.getById = async (req,res) => {
    res.send('get products by id')
}

exports.updateById = async (req,res) => {
    res.send('update product by id')
}


exports.deleteById = async (req,res) => {
    res.send('delete product by id')
}