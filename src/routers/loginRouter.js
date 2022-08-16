const express = require('express');
const rescue = require('express-rescue');
const { loginController } = require('../controllers');

const loginRouter = express.Router();

loginRouter.post('/', rescue(loginController));

module.exports = loginRouter;