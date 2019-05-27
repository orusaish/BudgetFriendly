// dependencies
var sequelize = require("sequelize");
var db = require("");

// new user registration inputs
var newName = $("#newName")
  .val()
  .trim();
var newEmail = $("#newEmail")
  .val()
  .trim();
var newPassword = $("#newPassword")
  .val()
  .trim();
var newPassword2 = $("#newPassword2")
  .val()
  .trim();

// existing user inputs
var email = $("#email")
  .val()
  .trim();
var password = $("#password")
  .val()
  .trim();

var msgs = [];

// registration form functions
$("#registerSubmit").on("submit", e => {
  e.preventDefault();

  // if passwords do not match
  if (newPassword !== newPassword2) {
    msgs.push({ message: "Passwords do not match." });
    return;
  }
});
