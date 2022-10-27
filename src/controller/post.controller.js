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

const updatePost = async (request, response) => {
    const { id } = request.params;
    const { title, content, userEmail } = request.body;
    const { error, updatedPost } = await postService.updatePost({ title, content, id, userEmail });

    if (error) return response.status(401).json({ message: error });

    response.status(200).json(updatedPost);
};

const deletePost = async (request, response) => {
    const { id } = request.params;
    const { userEmail } = request.body;
    const { error, errorUnauthorized } = await postService.deletePost({ id, userEmail });

    if (error) return response.status(404).json({ message: error });

    if (errorUnauthorized) { 
        return response.status(401).json({ message: errorUnauthorized }); 
}

    response.status(204).send();
};

const getPostsByTerm = async (request, response) => {
    const { q } = request.query;
    const posts = await postService.getPostsByTerm(q);
    response.status(200).json(posts);
};

module.exports = {
    getAllPost,
    addPost,
    getPostById,
    updatePost,
    deletePost,
    getPostsByTerm,
};