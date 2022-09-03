const Customer = require("./../models/customer.model")


const getAll = async () => {
    const Customers = await Customer.find({})
    return Customers
}

const getById = async (id) => {
    const Customer = await Customer.findById(id)
    return Customer
}

module.exports = { getAll, getById}
