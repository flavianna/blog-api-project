const { postService } = require('../service');

const createPost = async (req, res) => {
    const { user } = req;
    const post = await postService.createNewPost(req.body, user);
    return res.status(201).json(post);
};

module.exports = {
    createPost,
};