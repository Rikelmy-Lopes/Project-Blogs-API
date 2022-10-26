const serviceCategory = require('../service/category.service');

const addCategory = async (request, response) => {
    const { name } = request.body;
    const { id } = await serviceCategory.addCategory(name);
    response.status(201).json({
        name,
        id,
    });
};

const getAllCategories = async (_request, response) => {
    const { categories } = await serviceCategory.getAllCategories();
    response.status(200).json(categories);
};

module.exports = {
    addCategory,
    getAllCategories,
};