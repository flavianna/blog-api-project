const { User } = require('../models');

const userToAdd = async ({ displayName, email, password, image }) => {
    const register = await User.create({
        displayName,
        email,
        password,
        image,
    });
    return register;
};

module.exports = {
    userToAdd,
};