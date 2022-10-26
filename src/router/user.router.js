const express = require('express');
const userController = require('../controller/user.controller');
const { validadeUser } = require('../middleware/user.middleware');
const { validateToken } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/user', validadeUser, userController.addUser);

router.use('/user', validateToken);

router.get('/user', userController.getAllUser);

router.get('/user/:id', userController.getUserById);

module.exports = router;