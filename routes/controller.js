var express = require("express");
var auth = require("../config/middleware/auth");

var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});

router.get("/login", function(req, res) {
  res.render("login");
});

router.get("/register", function(req, res) {
  res.render("register");
});

module.exports = router;
