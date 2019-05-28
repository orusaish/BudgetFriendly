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

/* router.post("/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  // res.json("/members");
  res.send("logged in");
}); */

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
    errors.push("Please fill out form");
  }

  // check if passwords match
  if (password !== password2) {
    errors.push("Passwords do not match");
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

router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});

// login page
/* router.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  db.User.findOne({ where: { email: email } }).then(function(data) {
    console.log(data.User.name);
    res.send(`Hi ${name}`);
  });
}); */

module.exports = router;
