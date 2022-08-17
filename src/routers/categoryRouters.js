const express = require('express');
const rescue = require('express-rescue');
const { categoryControllers } = require('../controllers');
const { handleToken } = require('../middlewares');

const categoryRouter = express.Router();

categoryRouter.post('/categories', handleToken, rescue(categoryControllers.postCategory));

module.exports = categoryRouter;