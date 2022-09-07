const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
    userName: {
        type: String,        
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        match: /^.*@.*\..*$/,
        required: true
    },
    password: {
        type: String,
        required: true,      
           trim: true,
    select: false
    },
    profilePicture: {
        type: String,         
    },
    phoneNumbers: {
        type: [
            {
                fixed: String,
                mobile: String
            }
        ]
    },
    address: {
        type: [
            {
                street: String,
                city: String,
                state: String,
                zip: String
            }
        ]
    }
})


module.exports = mongoose.model("customers", CustomerSchema)
