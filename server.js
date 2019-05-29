// npm packages
var express = require("express");
var exphbs = require("express-handlebars");
<<<<<<< HEAD
var routes = require("./routes/controller");
var path = require("path");
var app = express();
=======
var controller = require("./routes/controller");
var transactions = require("./routes/transactions");
var session = require("express-session");

// dependencies
var passport = require("./config/passportConfig");
var db = require("./models");
>>>>>>> 4200250b73195b431e0967b0e0c53fc951fd9170

// server initialization
var app = express();
var PORT = process.env.PORT || 3339;
<<<<<<< HEAD
var db = require("./models");
app.use(express.static(path.join(__dirname, "public")));
=======
>>>>>>> 4200250b73195b431e0967b0e0c53fc951fd9170

//express middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// handlebars middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

<<<<<<< HEAD
app.use(routes);
db.sequelize.sync({ force: true }).then(function () {
  app.listen(PORT, function () {
=======
app.use(controller);
app.use(transactions);

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
require("./config/middleware/auth");

// routes
app.use("/", require("./routes/controller"));
app.use("/users/", require("./routes/users"));

// sync db and start server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
>>>>>>> 4200250b73195b431e0967b0e0c53fc951fd9170
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
