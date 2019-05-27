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

// registration form functions
$("#registerSubmit").on("submit", e => {
  e.preventDefault();
});
