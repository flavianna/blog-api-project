const { User } = require('../models');

const displayNameValidation = async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
        return res.status(400).json({
            message: '"displayName" length must be at least 8 characters long' });
    }
    return next();
};

const emailValidation = async (req, res, next) => {
    const { email } = req.body;
    const validation = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\b/;
    const test = validation.test(email);
    if (test === false) {
        return res.status(400).json({ message: '"email" must be a valid email' });
    }
    return next();
};

const emailExistsCheck = async (req, res, next) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
        return res.status(409).json({
            message: 'User already registered' });
    }
    return next();
};

const passwordValidation = async (req, res, next) => {
    const { password } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
            message: '"password" length must be at least 6 characters long' });
    }
    return next();
};

module.exports = {
   displayNameValidation,
   emailValidation,
   emailExistsCheck,
   passwordValidation,
};