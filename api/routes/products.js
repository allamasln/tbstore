const { Product } = require("../models/product");
const { Vendor } = require("../models/vendor");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find().sort("name");

  res.send(products);
});

module.exports = router;
