const express = require('express');
const router = express.Router();
const users = require("../models/data");


router.get('/:id', (req, res) => {
  users.findById(parseInt(req.params.id), (data) => {
    res.render("profile", data);
  });
});

module.exports = router;
