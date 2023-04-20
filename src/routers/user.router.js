const express = require('express');
const {
    displayNameValidation,
    emailValidation,
    emailExistsCheck,
    passwordValidation,
} = require('../middlewares/validateUser');
const checkAuthToken = require('../middlewares/validateToken');


const { userController } = require('../controller');

const routerUser = express.Router();

routerUser.post(
    '/',
    displayNameValidation,
    emailValidation,
    emailExistsCheck,
    passwordValidation,
    userController.userToCreate,
);

routerUser.get('/', checkAuthToken, userController.findAll);

module.exports = routerUser;
