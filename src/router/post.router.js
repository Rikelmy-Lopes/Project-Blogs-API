const express = require('express');

const { validateToken } = require('../middleware/auth.middleware');

const { getAllPost } = require('../controller/post.controller');

const router = express.Router();

router.get('/post', validateToken, getAllPost);

module.exports = router;