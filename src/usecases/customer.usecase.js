const Customer = require("./../models/customer.model")


const getAll = async () => {
    const Customers = await Customer.find({})
    return Customers
}

const getById = async (id) => {
    const Customer = await Customer.findById(id)
    return Customer
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
