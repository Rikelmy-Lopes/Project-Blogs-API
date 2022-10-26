const express = require('express');
const { addCategory, getAllCategories } = require('../controller/category.controller');

const { validateToken } = require('../middleware/auth.middleware');
const { validadeCategory } = require('../middleware/category.middleware');

const router = express.Router();

router.post('/categories', validateToken, validadeCategory, addCategory);

router.get('/categories', validateToken, getAllCategories);

module.exports = router;