var express = require("express");
var exphbs = require("express-handlebars");
var controller = require("./routes/controller");
var transactions = require("./routes/transactions");

var app = express();

var PORT = process.env.PORT || 3339;
var db = require("./models");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(controller);
app.use(transactions);
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
