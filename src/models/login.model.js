const mongoose = require("mongoose")

const LoginSchema = new mongoose.Schema({
    
    email: {
        type: String,
        match: /^.*@.*\..*$/,
        required: true
    },
    password: {
        type: String,
        required: true,        
    },
    user: {
        type: [{
            customer: Boolean,
            provide: Boolean
        }]
    },
    id: {
        type: String,
        required: true

    }
})

module.exports = mongoose.model("login", LoginSchema)