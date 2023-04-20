const { Category } = require('../models');

const creatCategory = async ({ name }) => {
    const register = await Category.create({ name });
    return register;
};
module.exports = {
    creatCategory,
};