const { categoriesService } = require('../service');

const CreatCategorie = async (req, res) => {
    const categorie = await categoriesService.creatNewCategorie(req.body);
    return res.status(201).json(categorie);
};

module.exports = {
    CreatCategorie,
};
