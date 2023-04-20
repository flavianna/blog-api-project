const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory, User } = require('../models');

const createNewPost = async ({ title, content, categoryIds }, userEmail) => {
    const categories = await Category.findAll({ where: { id: { [Op.in]: categoryIds } } });
    const user = await User.findOne({ where: { email: userEmail } });
    const userId = user.dataValues.id;
    const post = await BlogPost.create({ title, content, userId });

    const postCategories = categories.map((category) => ({
        postId: post.id,
        categoryId: category.id,
    }));
    await PostCategory.bulkCreate(postCategories);

    return post;
};

module.exports = {
    createNewPost,
};
