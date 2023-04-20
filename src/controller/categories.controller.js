const { categoriesService } = require('../service');

const categorie = async (req, res) => {
    const categorie = await categoriesService.creatCategory(req.body);
    return res.status(201).json(categorie);
};

module.exports = {
    categorie,
};
