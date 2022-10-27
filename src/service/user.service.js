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

const getUserById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
    });
    
    if (user === null) return { error: 'User does not exist', user: null };

    return { error: null, user };
};

const deleteUser = async (userEmail) => {
    const [{ id }] = await User.findAll({ where: { email: userEmail } });
    await User.destroy({ where: { id } });
};

module.exports = {
    addUser,
    getAllUser,
    getUserById,
    deleteUser,
};