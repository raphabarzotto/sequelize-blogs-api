const express = require('express');
const rescue = require('express-rescue');
const { userControllers } = require('../controllers');

const userRouters = express.Router();

userRouters.post('/', rescue(userControllers.postUser));

module.exports = userRouters;