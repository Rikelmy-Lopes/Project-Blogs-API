const validadeUser = (request, response, next) => {
    const DISPLAY_NAME_ERROR_MESSAGE = '"displayName" length must be at least 8 characters long';
    const PASSWORD_ERROR_MESSAGE = '"password" length must be at least 6 characters long';
    
    const regexEmail = /\S+@\S+\.\S+/;
    const { displayName, email, password } = request.body;
    
    if (displayName.length < 8) {
        response.status(400).json({ message: DISPLAY_NAME_ERROR_MESSAGE });
        return;
    }
    if (!regexEmail.test(email)) {
        response.status(400).json({ message: '"email" must be a valid email' });
        return;
    }

    if (password.length < 6) {
        response.status(400).json({ message: PASSWORD_ERROR_MESSAGE });
        return;
    }

    next();
};

module.exports = {
    validadeUser,
};