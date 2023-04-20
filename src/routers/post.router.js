const express = require('express');
const { postController } = require('../controller');
const checkAuthToken = require('../middlewares/validateToken');

const routerPost = express.Router();

routerPost.post('/', checkAuthToken, postController.createPost);

module.exports = routerPost;