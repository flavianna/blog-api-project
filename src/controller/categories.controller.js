const { categoriesService } = require('../service');

const CreatCategorie = async (req, res) => {
    const categorie = await categoriesService.creatNewCategorie(req.body);
    return res.status(201).json(categorie);
};

const findAllCategories = async (req, res) => {
    const categories = await categoriesService.findAll();
    return res.status(200).json(categories);
};

module.exports = {
    CreatCategorie,
    findAllCategories,
};
