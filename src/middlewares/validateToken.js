const jwt = require('jsonwebtoken');
require('dotenv/config');

async function validateToken(req, res, _next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (_err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
}

module.exports = { validateToken };