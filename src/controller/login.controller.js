const authenticate = require('../utils/auth');

const Login = async (req, res) => {
    const { email } = req.body;
    const token = await authenticate(email);
    return res.status(200).json({ token });
};
module.exports = {
    Login,
};