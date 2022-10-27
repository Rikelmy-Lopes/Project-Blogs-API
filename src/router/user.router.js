const express = require('express');
const { addUser, deleteUser, getAllUser, getUserById } = require('../controller/user.controller');
const { validadeUser } = require('../middleware/user.middleware');
const { validateToken } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/user', validadeUser, addUser);

router.use('/user', validateToken);

router.get('/user', getAllUser);

router.get('/user/:id', getUserById);

router.delete('/user/me', validateToken, deleteUser);

module.exports = router;