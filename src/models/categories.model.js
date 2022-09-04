const mongoose = require("mongoose")

const CategoriesSchema = new mongoose.Schema({
    
    id_tag: {
        type: Number,       
        required: true
    },
    name: {
        type: String,        
        required: true,        
    },
    type: {
        type: String,
        required: true,
        maxlength: 50,
    }
})

module.exports = mongoose.model("Categories", CategoriesSchema)