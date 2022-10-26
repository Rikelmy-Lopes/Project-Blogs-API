const validadeCategory = (request, response, next) => {
    const { name } = request.body;
    if (!name) {
        response.status(400).json({ message: '"name" is required' });
        return;
    }

    next();
};

module.exports = {
    validadeCategory,
};