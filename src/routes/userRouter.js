const { Router } = require('express');
const { userControllers } = require('../controllers');
const middlewares = require('../middlewares');

const userRouter = Router();

// requisito 3, validatelogin + postLogin
userRouter.post('/login', ValidateLogin, userControllers.postLogin)
// requisito 4, postUser
  .post('/user', userControllers.postUser)
// requisito 5, validateToken + getAllUser
  .get('/user', validateToken, userControllers.getAllUser)
// requisito 6, validateToken + getByIdUser
  .get('/user/:id', validateToken, userControllers.getByIdUser)
// requisito 16, validateToken + deleteUser
  .delete('/user/me', validateToken, userControllers.deleteUser);

module.exports = { userRouter };