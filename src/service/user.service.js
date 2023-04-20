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

const getAllUsers = async () => {
    const allUser = await User.findAll({
        attributes: { exclude: ['password'] },
      });
    return allUser;
};

module.exports = {
    userToAdd,
    getAllUsers,
};