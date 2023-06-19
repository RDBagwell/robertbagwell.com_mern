const express = require('express');
const { 
    getAllPost, 
    getPostById, 
    addPost,
    updatePost,
    deletePost
} = require('./post.controller');

const postsRouter = express.Router();

postsRouter.get('/post', getAllPost);
postsRouter.get('/post/:id', getPostById);
postsRouter.post('/post', addPost);
postsRouter.post('/post/:id', updatePost);
postsRouter.delete('/post/:id', deletePost);

module.exports = postsRouter;