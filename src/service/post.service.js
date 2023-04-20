const { BlogPost } = require('../models');

const creatNewPost = async ({ title, content, categoryIds }) => {
    const post = await BlogPost.create({ title, content, categoryIds });
    return post;
};
module.exports = {
    creatNewPost,
};