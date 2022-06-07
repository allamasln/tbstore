const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  taxId: {
    type: String,
    unique: true,
  },
})

const Vendor = mongoose.model('Vendor', vendorSchema)

exports.vendorSchema = vendorSchema
exports.Vendor = Vendor
