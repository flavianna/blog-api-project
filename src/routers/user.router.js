const express = require('express');
const {
    displayNameValidation,
    emailValidation,
    emailExistsCheck,
    passwordValidation,
} = require('../middlewares/validateUser');

const { userController } = require('../controller');

const routerUser = express.Router();

routerUser.post(
    '/',
    displayNameValidation,
    emailValidation,
    emailExistsCheck,
    passwordValidation,
    userController.userToCreate
);

module.exports = routerUser;
