const express = require('express');
const rescue = require('express-rescue');
const { userControllers } = require('../controllers');

const userRoute = express.Router();

userRoute.post('/', rescue(userControllers.postUser));

module.exports = userRoute;