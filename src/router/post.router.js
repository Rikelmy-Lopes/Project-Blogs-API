const express = require('express');

const { validateToken } = require('../middleware/auth.middleware');

const { validatePost } = require('../middleware/post.middleware');

const { getAllPost, addPost, getPostById } = require('../controller/post.controller');

const router = express.Router();

router.get('/post', validateToken, getAllPost);

router.get('/post/:id', validateToken, getPostById);

router.post('/post', validateToken, validatePost, addPost);

module.exports = router;