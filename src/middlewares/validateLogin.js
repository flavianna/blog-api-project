const { loginService } = require('../service');

const loginValidation = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    return next();
};

const emailValidation = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await loginService.login(email);
    if (user === null || user.password !== password) {
        return res.status(400).json({ message: 'Invalid fields' });
    }
    return next();
};

module.exports = {
    emailValidation,
    loginValidation,
};