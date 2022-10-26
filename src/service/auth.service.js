const authUtils = require('../utils/jwt.utils');
const { User } = require('../models');

const createToken = async (email, password) => {
    const user = await User.findAll({
        where: {
            password,
            email,
        },
    });

    if (user.length === 0) return { error: 'Invalid fields', token: null };

    const token = authUtils.createToken(email);

    return { error: null, token };
};

module.exports = {
    createToken,
};