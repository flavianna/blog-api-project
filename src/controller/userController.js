const { authenticate } = require('../utils/auth');
const { userService } = require('../service');

const userToCreate = async (req, res) => {
    const { email } = req.body;
    userService(req.body);
    const token = await authenticate(email);
    return res.status(201).json({ token });
};

const findAll = async (req, res) => {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
};

module.exports = {
    userToCreate,
    findAll,
};