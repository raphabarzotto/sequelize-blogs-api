const express = require('express');
const rescue = require('express-rescue');
const { handleToken } = require('../middlewares');
const { postControllers } = require('../controllers');

const postRoute = express.Router();

postRoute.post('/post', handleToken, rescue(postControllers.postBlogPost));

module.exports = postRoute;