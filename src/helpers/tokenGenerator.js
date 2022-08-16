const jwt = require('jsonwebtoken');
require('dotenv').config();

async function tokenGenerator(user) {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '30d',
    algorithm: 'HS256',
  });

  return token;
}

module.exports = { tokenGenerator };