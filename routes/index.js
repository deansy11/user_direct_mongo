const express = require("express");
const router = express.Router();
const users = require("../models/users");
// const client = require("../dbConnections")

router.get("/", (req, res) => {
  users.findAll((data) => {
    res.render("index", { users : data});
  })
});

module.exports = router;
