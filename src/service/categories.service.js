const { Category } = require('../models');

const creatNewCategorie = async ({ name }) => {
    const register = await Category.create({ name });
    return register;
};
module.exports = {
    creatNewCategorie,
};