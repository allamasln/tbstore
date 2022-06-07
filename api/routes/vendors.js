const {Vendor} = require('../models/vendor')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  const vendors = await Vendor.find().sort('name')

  res.send(vendors)
})

module.exports = router
