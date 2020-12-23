exports.get = async (req,res) => {
    res.send('get all orders')
}


exports.add = async (req,res) => {
    res.send('add new order')
}


exports.getById = async (req,res) => {
    res.send('get orders by id')
}


exports.deleteById = async (req,res) => {
    res.send('delete orders by id')
}