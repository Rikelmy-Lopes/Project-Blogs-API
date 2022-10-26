const { Category } = require('../models');

const addCategory = async (name) => {
    const category = await Category.create({ name }, { fields: ['name'] });
    return { error: null, id: category.id };
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return { error: null, categories };
};

module.exports = {
    addCategory,
    getAllCategories,
};