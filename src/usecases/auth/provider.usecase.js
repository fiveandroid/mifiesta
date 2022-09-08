const Provider = require("./../../models/auth/provider.model")
const bcrypt = require("bcrypt")


const getAll = async () => {
    const providers = await Provider.find({})
    return providers
}

const getById = async (id) => {
    const provider = await Provider.findById(id)
    return provider
}

const create = async (providerData) => {
    const hash = await bcrypt.hash(providerData.password, 10)
    providerData.password = hash;
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

const findEmail = (mail) => {
    const validatingEmail = Provider.findOne({email: mail});     
    return validatingEmail;
}

module.exports = { getAll, getById, create, updateById, deleteById, findEmail}
