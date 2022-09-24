const Offer = require("../../models/offer/offer.model");


const create =  ( offerData ) => {    
    const offer = Offer.create(offerData)
    return offer
}

const getAll = () => {
    const offers = Offer.find({})
    return offers;
}

const deleteById = (id) => {
    const offerToDelete = Offer.findByIdAndDelete(id)
    return offerToDelete
}

const updateById = (id, newOfferData) => {
    const offerUpdated = Offer.findByIdAndUpdate(id, newOfferData)
    return offerUpdated
}

const getById = async (id) => {
    const offer = await Offer.findById(id)
    return offer
}
module.exports = {create, getAll, deleteById, updateById, getById}