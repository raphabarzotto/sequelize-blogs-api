const express = require('express');
const { handleError } = require('./middlewares');

const app = express();

app.use(express.json());

// antes ou depois?
app.use(handleError);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;