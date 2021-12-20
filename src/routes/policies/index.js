var express = require("express");
var router = express.Router();
var policieServices = require("../../services/policies");

router.get("/", async (req, res) => {
  const getPolicies = await policieServices.getPolicies()
  res.send(getPolicies)
})

module.exports = router;