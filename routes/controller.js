var express = require("express");

var db = require("../models");

var router = express.Router();

var transactions = require("../models/transactions.js");

// The main index page
router.get("/", function(req, res) {
  res.render("index", {
    style: "style.css"
  });
});

// To get to the profile page
router.get("/api/profile", function(req, res) {
  res.render("profile", {
    style: "styleProfile.css"
  });
});

module.exports = router;
