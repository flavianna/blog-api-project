const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

const authenticate = async (email) => {
    const jwtConfig = {
        algorithm: 'HS256',
      };
    const token = jwt.sign(email, key, jwtConfig);
    return token;
};
module.exports = authenticate;