const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect('mongodb+srv://akhil:' + process.env.PASSWORD + '@cluster0.if3i3.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority', {                       
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(() => console.log('DB connection successful!'))
  

  
module.exports = mongoose
  