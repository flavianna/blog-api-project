const { validateAuthToken } = require('../utils/auth');

const checkAuthToken = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(401).json({
                message: 'Token not found' });
        }
        const decodedToken = await validateAuthToken(authorization);
        req.user = decodedToken; 
        return next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({
            message: 'Expired or invalid token' });
    }
};
module.exports = checkAuthToken;