const express = require('express');

const routerAuth = require('./router/auth.router');
const routerUser = require('./router/user.router');
const routerCategory = require('./router/category.router');
const routerPost = require('./router/post.router');

const app = express();

app.use(express.json());

app.use('/', routerAuth);
app.use('/', routerUser);
app.use('/', routerCategory);
app.use('/', routerPost);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
