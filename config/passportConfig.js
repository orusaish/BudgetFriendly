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
        console.log(user.password, password);
        if (!user) {
          return done(null, false, {
            message: "Email not found."
          });
        } else if (password !== user.password) {
          return done(null, false, {
            message: "Not a valid password."
          });
        }
        return done(null, user);
      });
    }
  )
);

/* passport.use(
  new LocalStrategy(function(email, password, done) {
    db.User.findOne({ usernameField: email }, function(err, user) {
      console.log(user);
      console.log(err);
      if (err) {
        console.log(err);
        return done(err);
      }
      if (!user) {
        console.log("user does not exist");
        return done(null, false);
      }
      if (!user.verifyPassword(password)) {
        console.log("incorrect password");
        return done(null, false);
      }
      console.log(user);
      return done(null, user);
    });
  })
); */

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;
