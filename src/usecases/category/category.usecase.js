const Category = require("../../models/category/category.model");


const create =  (cateogryData) => {    
    const category = Category.create(cateogryData)
    return category
}

const getAll = () => {
    const categories = Category.find({})
    return categories;
}
module.exports = {create, getAll}