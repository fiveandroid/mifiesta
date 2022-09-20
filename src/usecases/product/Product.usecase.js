const Product = require("../../models/Product/Product.model");


const create =  ( productData ) => {    
    const product = Product.create(productData)
    return product
}

const getAll = () => {
    const products = Product.find({})
    return products;
}

const deleteById = (id) => {
    const productToDelete = Product.findByIdAndDelete(id)
    return productToDelete
}

const updateById = (id, newProductData) => {
    const productUpdated = Product.findByIdAndUpdate(id, newCategoryData)
    return productUpdated
}

const getById = async (id) => {
    const product = await Product.findById(id)
    return product
}
module.exports = {create, getAll, deleteById, updateById, getById}