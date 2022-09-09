const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("../category/category.model")
mongoose.model("Category");

const ProviderSchema = new Schema({
    companyName: {
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
        ],
        match: /[0-9]{10,12}/
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
    },
    socialMedia: {
        type: [
            {
                webPage: String,
                facebook: String,
                instagram: String
            }
        ]
    },
    companyDescription: {
        type: String,
        maxlength: 1000,
        required: true
    },    
    categories: [{
        type: Schema.ObjectId,
        ref: "Category"
    }],
    subscriptionPlan: {
        type: String,
        maxlength: 500,
        required: true
    },
    identificationPicture: {
        type: String,
        maxlength: 500,
        required: true
    },
    createdAt: { 
        type: Date, 
        default: Date.now
     }

})


module.exports = mongoose.model("provider", ProviderSchema)
