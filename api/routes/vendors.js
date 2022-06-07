const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send({ test: true });
});

module.exports = router;
