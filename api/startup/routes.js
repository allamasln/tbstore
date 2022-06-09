const express = require('express')
const vendors = require('../routes/vendors')
const products = require('../routes/products')
const error = require('../middleware/error')

module.exports = function (app) {
  app.use(express.json())
  app.use('/api/vendors', vendors)
  app.use('/api/products', products)
  app.use(error)
}
