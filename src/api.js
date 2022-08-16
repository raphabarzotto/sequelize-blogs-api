const express = require('express');
const { handleError } = require('./middlewares');
const { loginRouter } = require('./routers');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);

// antes ou depois?
app.use(handleError);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;