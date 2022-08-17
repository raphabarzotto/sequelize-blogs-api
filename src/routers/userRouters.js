const express = require('express');
const rescue = require('express-rescue');
const { userControllers } = require('../controllers');
const { handleToken } = require('../middlewares');

const userRouters = express.Router();

userRouters.post('/', rescue(userControllers.postUser));
userRouters.get('/', handleToken, rescue(userControllers.getAllUser));

module.exports = userRouters;