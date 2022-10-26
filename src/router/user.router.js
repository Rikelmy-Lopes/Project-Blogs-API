const express = require('express');
const userController = require('../controller/user.controller');
const { validadeUser } = require('../middleware/user.middleware');

const router = express.Router();

router.post('/user', validadeUser, userController.addUser);

module.exports = router;