const { User } = require('../models');

const login = async (email) => {
    const emailUser = await User.findOne({ where: { email } });
    return emailUser;
};
module.exports = {
    login,
};