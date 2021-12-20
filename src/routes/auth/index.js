var express = require("express");
var router = express.Router();
var AuthServices = require("../../services/auth");

router.get("/uid", async (req, res) => {
  const getUID = await AuthServices.getUID()
  res.send(getUID)
})

module.exports = router;