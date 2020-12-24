const counterModel = require('../model/helper/counter.js')


//Before using this utility
//Create a collection 'counter' and insert below document in it
// {
//     productCounter : <initial_Start_number>
//     orderCounter : <initial_Start_number>
// }


exports.generateProductId = async () => {   

    
    const counter = await counterModel.findOneAndUpdate(
        {},
        {
           $inc : {
               productCounter : 1
           }
        },
        {
            new: true
        }
    )    

  
    return 'P' + counter.productCounter

}


exports.generateOrderId = async () => {

    const counter = await counterModel.findOneAndUpdate(
        {},
        {
           $inc : {
               orderCounter : 1
           }
        },
        {
            new: true
        }
    )    

    return 'O' + counter.orderCounter

}