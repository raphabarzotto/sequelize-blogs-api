const jwt = require('jsonwebtoken');
require('dotenv/config');

// https://www.tabnine.com/code/javascript/functions/builtins/ProcessEnv/JWT_SECRET
module.exports = (data = {}) => jwt.sign({ data }, process.env.JWT_SECRET, { expiresIn: '30d' });