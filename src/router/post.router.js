const express = require('express');

const { validateToken } = require('../middleware/auth.middleware');

const { validatePost, validateUpdatePost } = require('../middleware/post.middleware');

const { getAllPost, addPost, getPostById, updatePost, 
    deletePost, getPostsByTerm } = require('../controller/post.controller');

const router = express.Router();

router.get('/post/search', validateToken, getPostsByTerm);

router.get('/post', validateToken, getAllPost);

router.get('/post/:id', validateToken, getPostById);

router.post('/post', validateToken, validatePost, addPost);

router.put('/post/:id', validateToken, validateUpdatePost, updatePost);

router.delete('/post/:id', validateToken, deletePost);

module.exports = router;