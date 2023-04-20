const express = require('express');
const { postController } = require('../controller');
const checkAuthToken = require('../middlewares/validateToken');
const { validatePostFields, validateCategoryIds } = require('../middlewares/validatePost');

const routerPost = express.Router();
const validations = [checkAuthToken, validatePostFields, validateCategoryIds];

routerPost.post('/', checkAuthToken, validations, postController.createPost);

module.exports = routerPost;