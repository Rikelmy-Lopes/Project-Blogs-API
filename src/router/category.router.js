const express = require('express');
const categoryController = require('../controller/category.controller');

const { validateToken } = require('../middleware/auth.middleware');
const categoryMiddleware = require('../middleware/category.middleware');

const router = express.Router();

router.post('/categories', validateToken, categoryMiddleware.validadeCategory, 
categoryController.addCategory);

module.exports = router;