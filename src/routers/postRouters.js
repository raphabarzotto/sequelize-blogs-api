const express = require('express');
const rescue = require('express-rescue');
const { handleToken } = require('../middlewares');
const { postControllers } = require('../controllers');

const postRoute = express.Router();

postRoute.post('/', handleToken, rescue(postControllers.postBlogPost));
postRoute.get('/', handleToken, rescue(postControllers.getAllBlogPost));
postRoute.get('/:id', handleToken, rescue(postControllers.getByIdBlogPost));
postRoute.put('/:id', handleToken, rescue(postControllers.putByIdBlogPost));
postRoute.delete('/:id', handleToken, rescue(postControllers.deleteByIdBlogPost));

module.exports = postRoute;