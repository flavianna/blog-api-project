const { User } = require('../models');

const login = async (email) => {
    const email = await User.findOne({ where: { email } });
    return email;
};
module.exports = {
    login,
};