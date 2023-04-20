const express = require('express');
const { categoriesController } = require('../controller');
const validateName = require('../middlewares/validateCategory');
const checkAuthToken = require('../middlewares/validateToken');

const routerCategories = express.Router();

routerCategories.post('/', checkAuthToken, validateName, categoriesController.categorie);

module.exports = routerCategories;