// npm packages
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session");

var routes = require("./routes/controller");
var passport = require("./config/passportConfig");

var app = express();

var PORT = process.env.PORT || 3339;
var db = require("./models");

//express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// passport middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use(routes);
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
