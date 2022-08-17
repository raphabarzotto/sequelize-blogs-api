const express = require('express');
const rescue = require('express-rescue');
const { userControllers } = require('../controllers');
const { handleToken } = require('../middlewares');

const userRouters = express.Router();

userRouters.post('/', rescue(userControllers.postUser));
userRouters.get('/', handleToken, rescue(userControllers.getAllUser));
userRouters.get('/:id', handleToken, rescue(userControllers.getByIdUser));

module.exports = userRouters;