var express = require("express");

var db = require("../models");

var router = express.Router();

var transactions = require("../models/transactions.js");

// The main index page
router.get("/", function(req, res) {
  res.render("index");
});

// To get to the profile page
router.get("/profile", function(req, res) {
  res.render("profile");
});

router.post("/profile", function(req, res) {
  // console.log(req.body);
  db.Transactions.create({
    category: req.body.category,
    amount: req.body.amount
  }).then(res.send("hello"));
});

module.exports = router;
