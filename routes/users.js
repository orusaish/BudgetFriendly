// packages
var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var passport = require("passport");
// dependencies
var User = require("../models/users");
var auth = require("../config/middleware/auth");

// login page
router.get("/login", function(req, res) {
  res.render("login");
});

// register page
router.get("/register", function(req, res) {
  res.render("register");
});

// register new user
router.post("/register", function(req, res) {
  var name = req.body.newName;
  var email = req.body.newEmail;
  var password = req.body.newPassword;
  var password2 = req.body.newPassword2;
  var errors = [];
  console.log(name, email, password, password2);

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please fill out form" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }
  console.log(errors);

  if (errors.length > 0) {
    res.render("register", { errors, name, email, password, password2 });
  } else res.send("howdy");
});

module.exports = router;
