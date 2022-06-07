const mongoose = require("mongoose");
const { vendorSchema } = require("./vendor");

const Product = mongoose.model(
  "Products",
  new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: true,
    },
    priceInfo: [
      {
        amount: {
          type: Number,
          min: 0,
          required: true,
        },
        currency: {
          type: String,
          default: "EUR",
        },
      },
    ],
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 2.5,
    },
    vendor: {
      type: vendorSchema,
      required: true,
    },
  })
);

exports.Product = Product;
