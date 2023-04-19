const authenticate = require('../utils/auth');
const { userToAdd } = require('../service/user.service');

const userToCreate = async (req, res) => {
    const { email } = req.body;
    userToAdd(req.body);
    const token = await authenticate(email);
    return res.status(201).json({ token });
};
module.exports = {
    userToCreate,
};