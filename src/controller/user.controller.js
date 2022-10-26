const userServicer = require('../service/user.service');

const addUser = async (request, response) => {
    const person = request.body;

    const { token, error } = await userServicer.addUser(person);
    
    if (error) return response.status(409).json({ message: error });

    response.status(201).json({ token });
};

module.exports = {
    addUser,
};