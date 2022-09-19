const Category = require("../../models/category/category.model");


const create =  (cateogryData) => {    
    const category = Category.create(cateogryData)
    return category
}

const getAll = () => {
    const categories = Category.find({})
    return categories;
}

const deleteById = (id) => {
    const categoryToDelete = Category.findByIdAndDelete(id)
    return categoryToDelete
}

const updateById = (id, newCategoryData) => {
    const categoryUpdated = Category.findByIdAndUpdate(id, newCategoryData)
    return categoryUpdated
}

const getById = async (id) => {
    const category = await Category.findById(id)
    return category
}
module.exports = {create, getAll, deleteById, updateById, getById}