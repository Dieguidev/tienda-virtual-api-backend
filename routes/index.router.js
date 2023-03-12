const productsRouter = require('./products.routes.js');
const express = require('express');
const router = express.Router();
const usersRouter = require('./users.router');

function routerApi(app) {
  app.use('/api/v1',router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
}


module.exports = routerApi;
