const mongoose = require("mongoose");
require("../category/category.model");
require("../auth/customer.model");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  client_id: {
    type: Schema.ObjectId,
    ref: "customers",
  },
  categories: [
    {
      type: Schema.ObjectId,
      ref: "Category",
    },
  ],
  event_type: {
    type: Schema.ObjectId,
    ref: "Category",
  },
  guests_number: {
    type: Number,
    required: true,
  },
  address: {
    type: [
      {
        street: String,
        city: String,
        state: String,
        zip: String,
      },
    ],
  },
  budget: {
    type: Number,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("request", RequestSchema);
