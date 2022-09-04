const Customer = require("./../models/customer.model")


const getAll = async () => {
    const customers = await Customer.find({})
    return customers
}

const getById = async (id) => {
    const customer = await Customer.findById(id)
    return customer
}

const create = (customerData) => {
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

module.exports = { getAll, getById, create, updateById, deleteById}
