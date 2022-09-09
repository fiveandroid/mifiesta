const mongoose = require("mongoose")

// Schemas
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^.*@.*\..*$/,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 3
  },
  name: {
    type: String,
    minLength: 3
  },
  createdAt: { 
    type: Date, 
    default: Date.now
 }

})

module.exports = mongoose.model("users", userSchema)