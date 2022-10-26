const { BlogPost, Category, User } = require('../models');

const getAllPost = async () => {
    const posts = await BlogPost.findAll({
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return posts;
};

module.exports = {
    getAllPost,
};