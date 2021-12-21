var express = require("express");
var router = express.Router();
var UserServices = require("../../services/user");

router.post("/", async (req, res) => {
  const createUser = await UserServices.createUser(req.body)
  res.send(createUser)
})

module.exports = router;