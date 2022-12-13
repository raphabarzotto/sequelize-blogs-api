const express = require('express');
const { handleError } = require('./middlewares');
const {
  loginRouter,
  userRouters,
  categoryRouters,
  postRouters,
} = require('./routers');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouters);
app.use('/categories', categoryRouters);
app.use('/post', postRouters);

app.use(handleError);

module.exports = app;