const { Category } = require('../models');

const creatNewCategorie = async ({ name }) => {
    const register = await Category.create({ name });
    return register;
};
const findAll = async () => {
    const categories = await Category.findAll();
    return categories;
};
module.exports = {
    creatNewCategorie,
    findAll,
};