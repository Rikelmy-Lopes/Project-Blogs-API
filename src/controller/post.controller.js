const blogPostService = require('../service/post.service');

const getAllPost = async (_request, response) => {
    const blogPosts = await blogPostService.getAllPost();

    response.status(200).json(blogPosts);
};

module.exports = {
    getAllPost,
};