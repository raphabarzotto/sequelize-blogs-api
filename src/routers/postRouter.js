const { Router } = require('express');
const { postControllers } = require('../controllers');
const middlewares = require('../middlewares');

const postRouter = Router();

// requisito 12, validateToken + postPost
postRouter.post('/post', middlewares.validateToken, postControllers.postPost)
// requisito 14, validateToken + getAllPost
  .get('/post', middlewares.validateToken, postControllers.getAllPost)
// requisito 15, validateToken + getByIdPost
  .put('/post/:id', middlewares.validateToken, postControllers.getByIdPost)
// requisito 16, validateToken + deletePost
  .delete('/post/:id', middlewares.validateToken, postControllers.deletePost)
// requisito 18, validateToken + getBySearchPost
  .get('/post/search', middlewares.validateToken, postControllers.getBySearchPost);

module.exports = { postRouter };