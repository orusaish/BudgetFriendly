var express = require("express");

var db = require("../models");

var router = express.Router();

var transactions = require("../models/transactions.js")

// The main index page
router.get("/", function (req, res) {
  res.render("index");
});

// To get to the profile page
router.get("/api/profile", function (req, res) {
  db.Post.findAll({
    where: {
      category: req.params.category
    }
  })
  res.render("profile");
});

router.post("/api/profile", function (req, res) {
  // console.log(req.body);
  db.Transactions.create({
    category: req.body.category,
    amount: req.body.amount
  }).then(res.send("hello"))
});

module.exports = router;
