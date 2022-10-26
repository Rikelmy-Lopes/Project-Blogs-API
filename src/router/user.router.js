const express = require('express');
const userController = require('../controller/user.controller');
const { validadeUser } = require('../middleware/user.middleware');
const { validateToken } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/user', validadeUser, userController.addUser);

router.get('/user', validateToken, userController.getAllUser);

module.exports = router;