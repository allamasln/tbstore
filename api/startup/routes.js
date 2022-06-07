const express = require("express");
const vendors = require("../routes/vendors");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/vendors", vendors);
};
