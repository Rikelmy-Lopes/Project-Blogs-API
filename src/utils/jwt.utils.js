const jwt = require('jsonwebtoken');
require('dotenv');

const createToken = (email) => {
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    return token;
};

module.exports = {
    createToken,
};