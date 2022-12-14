const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    req.tokenData = decodedToken.data;

    next();
  } catch (error) {
      return res.status(401).json({ message: 'Expired or invalid token' });
  }
};