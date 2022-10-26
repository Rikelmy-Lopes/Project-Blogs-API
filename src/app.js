const express = require('express');

const routerAuth = require('./router/auth.router');

const app = express();

app.use(express.json());

app.use('/', routerAuth);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
