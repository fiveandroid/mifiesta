const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({  
   
    name: {
        type: String,        
        required: true,        
    },
    type: {
        type: String,
        required: true,
        maxlength: 50,
    },
    createdAt: { 
        type: Date, 
        default: Date.now
     }

})

module.exports = mongoose.model("Category", CategorySchema)