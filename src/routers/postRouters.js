const express = require('express');
const rescue = require('express-rescue');
const { handleToken } = require('../middlewares');
const { postControllers } = require('../controllers');

const postRoute = express.Router();

postRoute.post('/', handleToken, rescue(postControllers.postBlogPost));
postRoute.get('/', handleToken, rescue(postControllers.getAllBlogPost));
postRoute.get('/:id', handleToken, rescue(postControllers.getByIdBlogPost));

module.exports = postRoute;