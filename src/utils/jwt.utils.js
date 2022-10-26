const jwt = require('jsonwebtoken');
require('dotenv');

const createToken = (email) => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return token;
};

const validateToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return { error: null, decoded };
    } catch (_error) {
        const error = new Error('Expired or invalid token');
        return { error, decoded: null };
    }
};

module.exports = {
    createToken,
    validateToken,
};