const express = require('express');

const app = express();

const productsRouter = require('./api/routes/products');

app.use('/products' , productsRouter);

module.exports = app;