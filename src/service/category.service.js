const { Category } = require('../models');

const addCategory = async (name) => {
    const category = await Category.create({ name }, { fields: ['name'] });
    return { error: null, id: category.null };
};

module.exports = {
    addCategory,
};