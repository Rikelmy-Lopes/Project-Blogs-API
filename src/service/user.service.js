const { User } = require('../models');
const authUtils = require('../utils/jwt.utils');

const addUser = async ({ displayName, email, password, image }) => {
    const existingUser = await User.findAll({
        where: { email },
    });

    if (existingUser.length !== 0) return { error: 'User already registered', token: null };

    await User.create({ displayName, email, password, image });

    const token = authUtils.createToken(email);

    return { error: null, token };
};

const getAllUser = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

module.exports = {
    addUser,
    getAllUser,
};