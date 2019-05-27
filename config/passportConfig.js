var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(
  new LocalStrategy(
    // change default sign-in from username to email
    {
      usernameField: "email"
    },
    function(email, password, done) {
      db.User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        if (!user) {
          return done(null, false, {
            message: "Email not found."
          });
        } else if (!user.validPassword(password)) {
          return done(null, false, {
            message: "Not a valid password."
          });
        }
        return done(null, user);
      });
    }
  )
);

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
