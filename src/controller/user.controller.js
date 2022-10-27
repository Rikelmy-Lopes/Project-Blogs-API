const userService = require('../service/user.service');

const addUser = async (request, response) => {
    const person = request.body;

    const { token, error } = await userService.addUser(person);
    
    if (error) return response.status(409).json({ message: error });

    response.status(201).json({ token });
};

const getAllUser = async (_request, response) => {
    const users = await userService.getAllUser();
    response.status(200).json(users);
};

const getUserById = async (request, response) => {
    const { id } = request.params;
    const { error, user } = await userService.getUserById(id);

    if (error) return response.status(404).json({ message: error });

    response.status(200).json(user);
};

const deleteUser = async (request, response) => {
    const { userEmail } = request.body;
    await userService.deleteUser(userEmail);
    response.status(204).send();
};

module.exports = {
    addUser,
    getAllUser,
    getUserById,
    deleteUser,
};