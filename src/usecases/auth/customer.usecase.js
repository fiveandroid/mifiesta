const Customer = require("./../../models/auth/customer.model")
const bcrypt = require("bcrypt")


const getAll = async () => {
    const customers = await Customer.find({})
    return customers
}

const getById = async (id) => {
    const customer = await Customer.findById(id)
    return customer
}

const create = async (customerData) => {
    const hash = await bcrypt.hash(customerData.password, 10)
    customerData.password = hash;
    const customer = Customer.create(customerData)
    return customer
}

const updateById = (id, newCustomerData) => {
    const customerUpdated = Customer.findByIdAndUpdate(id, newCustomerData)
    return customerUpdated
}

const deleteById = (id) => {
    const customerToDelete = Customer.findByIdAndDelete(id)
    return customerToDelete
}

const findEmail = (mail) => {
    const validatingEmail = Customer.findOne({email: mail});
     
    return validatingEmail;
} 
module.exports = { getAll, getById, create, updateById, deleteById, findEmail}
