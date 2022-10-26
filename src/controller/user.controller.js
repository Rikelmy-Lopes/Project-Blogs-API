const userServicer = require('../service/user.service');

const addUser = async (request, response) => {
    const person = request.body;

    const { token, error } = await userServicer.addUser(person);
    
    if (error) return response.status(409).json({ message: error });

    response.status(201).json({ token });
};

const getAllUser = async (_request, response) => {
    const users = await userServicer.getAllUser();
    response.status(200).json(users);
};

const getUserById = async (request, response) => {
    const { id } = request.params;
    const { error, user } = await userServicer.getUserById(id);

    if (error) return response.status(404).json({ message: error });

    response.status(200).json(user);
};

module.exports = {
    addUser,
    getAllUser,
    getUserById,
};