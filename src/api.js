const express = require('express');
const { handleError } = require('./middlewares');
const {
  loginRouter,
  userRouters,
  categoryRouters,
} = require('./routers');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouters);
app.use('/categories', categoryRouters);

app.use(handleError);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;