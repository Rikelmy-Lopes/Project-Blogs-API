const postService = require('../service/post.service');

const addPost = async (request, response) => {
    const { title, content, categoryIds, userEmail } = request.body;
    const { error, post } = await postService.addPost({ title, content, categoryIds, userEmail });

    if (error) return response.status(400).json({ message: error });
    
    response.status(201).json(post);
};

const getAllPost = async (_request, response) => {
    const { posts } = await postService.getAllPost();

    response.status(200).json(posts);
};

const getPostById = async (request, response) => {
    const { id } = request.params;
    const { post, error } = await postService.getPostById(id);

    if (error) return response.status(404).json({ message: error });

    response.status(200).json(post);
};

module.exports = {
    getAllPost,
    addPost,
    getPostById,
};