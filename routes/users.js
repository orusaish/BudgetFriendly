// packages
var express = require("express");
var router = express.Router();
var bcrypt = require("bcrypt");
var passport = require("passport");
// dependencies
var db = require("../models");
var auth = require("../config/middleware/auth");

// login page
router.get("/login", function(req, res) {
  res.render("login");
});

// register page
router.get("/register", function(req, res) {
  res.render("register");
});

// login user
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "login" }),
  function(req, res) {
    res.render("profile");
  }
);

// register new user
router.post("/register", function(req, res) {
  var name = req.body.newName;
  var email = req.body.newEmail;
  var password = req.body.newPassword;
  var password2 = req.body.newPassword2;
  var errors = [];

  // check if all fields are filled out
  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please fill out form" });
  }

  // check if passwords match
  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    res.render("register", { errors });
  } else {
    db.User.create({
      name: name,
      email: email,
      password: password
    }).then(res.redirect("login"));
  }
});

//logout user
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// get user data
router.get("/data", function(req, res) {
  if (!req.user) {
    res.json({});
  } else {
    res.json({
      email: req.user.email,
      name: req.user.name
    });
  }
});

module.exports = router;
