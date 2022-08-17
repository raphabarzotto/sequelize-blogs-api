const express = require('express');
const rescue = require('express-rescue');
const { categoryControllers } = require('../controllers');
const { handleToken } = require('../middlewares');

const categoryRouters = express.Router();

categoryRouters.post('/', handleToken, rescue(categoryControllers.postCategory));
categoryRouters.get('/', handleToken, rescue(categoryControllers.getAllCategory));

module.exports = categoryRouters;