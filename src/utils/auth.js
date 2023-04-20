const jwt = require('jsonwebtoken');

const key = process.env.JWT_SECRET;

const authenticate = async (email) => {
    const jwtConfig = {
        algorithm: 'HS256',
      };
    const token = jwt.sign(email, key, jwtConfig);
    return token;
};

const validateAuthToken = async (token) => {
  const isValid = jwt.verify(token, key);
  return isValid;
};

module.exports = {
  authenticate,
  validateAuthToken,
};