const authUtils = require('../utils/jwt.utils');

const validateAuth = (request, response, next) => {
    const { email, password } = request.body;
    if (!email || !password) {
        response.status(400).json({ message: 'Some required fields are missing' });
        return;
    }

    next();
};

const validateToken = (request, response, next) => {
    const token = request.header('Authorization');

    if (!token) {
        response.status(401).json({ message: 'Token not found' });
        return;
    }

    const { error, decoded } = authUtils.validateToken(token);
    
    if (error) {
        response.status(401).json({ message: 'Expired or invalid token' });
        return;
    }
    
    request.body.userEmail = decoded.email;
    next();
};

module.exports = {
    validateAuth,
    validateToken,
};