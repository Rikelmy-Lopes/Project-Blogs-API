const postService = require('../service/post.service');

const addPost = async (request, response) => {
    const { title, content, categoryIds, userEmail } = request.body;
    const { error, post } = await postService.addPost({ title, content, categoryIds, userEmail });

    if (error) return response.status(400).json({ message: error });
    
    response.status(201).json(post);
};

const getAllPost = async (_request, response) => {
    const blogPosts = await postService.getAllPost();

    response.status(200).json(blogPosts);
};

module.exports = {
    getAllPost,
    addPost,
};