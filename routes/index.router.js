const productsRouter = require('./products.routes.js');
const express = require('express');
const router = express.Router();
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const categoriesRouter = require('./categories.router')

function routerApi(app) {
  app.use('/api/v1',router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers',customersRouter);
  router.use('/categories', categoriesRouter);
}


module.exports = routerApi;
