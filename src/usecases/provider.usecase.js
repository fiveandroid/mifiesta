const Provider = require("../models/provider.model")


const getAll = async () => {
    const providers = await Provider.find({})
    return providers
}

const getById = async (id) => {
    const provider = await Provider.findById(id)
    return provider
}

const create = (providerData) => {
    const provider = Provider.create(providerData)
    return provider
}

const updateById = (id, newProviderData) => {
    const providerUpdated = Provider.findByIdAndUpdate(id, newProviderData)
    return providerUpdated
}

const deleteById = (id) => {
    const providerToDelete = Provider.findByIdAndDelete(id)
    return providerToDelete
}

module.exports = { getAll, getById, create, updateById, deleteById}
