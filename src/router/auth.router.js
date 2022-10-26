const express = require('express');
const authController = require('../controller/auth.controller');
const validadeAuth = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/login', validadeAuth.validateAuth, authController.createToken);

module.exports = router;