const { Router } = require('express');
const { categoryControllers } = require('../controllers');
const middlewares = require('../middlewares');

const categoryRouter = Router();

// requisito 8, validateToken + postCategory
categoryRouter.post('/categories', middlewares.validateToken, categoryControllers.postCategory)
// requisito 9, validateToken + getAllCategory
  .get('/categories', middlewares.validateToken, categoryControllers.getAllCategory);

module.exports = { categoryRouter };