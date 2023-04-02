const productsRouter = require('./products.routes.js');
const express = require('express');
const router = express.Router();
const usersRouter = require('./users.router');
const customersRouter = require('./customers.router');
const categoriesRouter = require('./categories.router');
const ordersRouter = require('./orders.routes')
const authRouter = require('./auth.router.js')

function routerApi(app) {
  app.use('/api/v1',router);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/customers',customersRouter);
  router.use('/categories', categoriesRouter);
  router.use('/orders', ordersRouter);
  router.use('/auth', authRouter);

}


module.exports = routerApi;
