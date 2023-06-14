const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const adminData = require('./admin.js')

router.get('/', (req, res, next) => {
  const products = adminData.products
  console.log(products);
  res.render('shop', {prods: products, docTitle: "My Shop"})
});

module.exports = router;
