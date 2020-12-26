const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage(
    {
        destination: './public/uploads', 
        filename: (req, file, callback) => {
            console.log(file)
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
        }
    }
)


var upload = multer(
    {  
        storage: storage, 

        limits: { fileSize: 1024*1024*5 },

        fileFilter: (req,file,cb) => {
            
            var filetypes = /jpeg|jpg|png/; 

            var mimetype = filetypes.test(filetypes);

            var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

            if(mimetype && extname) return cb(null, true); 

            else {
                
                cb(new Error("File upload only supports the "+ filetypes), false)
               
                
            }
        }
    }
)


module.exports = upload

