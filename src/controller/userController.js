const { authenticate } = require('../utils/auth');
const { userService } = require('../service');

const userToCreate = async (req, res) => {
    const { email } = req.body;
    userService.userToAdd(req.body);
    const token = await authenticate(email);
    return res.status(201).json({ token });
};

const findAll = async (req, res) => {
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
};

const getById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    if (!user) {
        return res.status(404).json({
            message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
    userToCreate,
    findAll,
    getById,
};