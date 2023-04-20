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

const getById = async (id) => {
    const user = await User.findByPk(id, {
        attributes: { exclude: ['password'] },
      });
    return user;
};

module.exports = {
    userToAdd,
    getAllUsers,
    getById,
};