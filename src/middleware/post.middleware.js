const validatePost = (request, response, next) => {
    const { title, content, categoryIds } = request.body;

    if (!title || !content || !categoryIds) {
        response.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

const validateUpdatePost = (request, response, next) => {
    const { title, content } = request.body;

    if (!title || !content) {
        response.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

module.exports = {
    validatePost,
    validateUpdatePost,
};