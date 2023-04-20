const { postService } = require('../service');

const createPost = async (req, res) => {
    const post = await postService.createNewPost(req.body);
    return res.status(201).json(post);
};
module.exports = {
    createPost,
};

