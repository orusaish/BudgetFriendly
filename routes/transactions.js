var db = require("../models");
var express = require("express");

var router = express.Router();

// Routes
// =============================================================
// Get route for retrieving a single User information
router.get("/users/:id/transactions", function(req, res) {
  db.Transactions.findAll({
    where: {
      UserId: req.params.id
    }
  }).then(function(txns) {
    var amount = 0;
    for (var i = 0; i < txns.length; i++) {
      amount = amount + parseFloat(txns[i].amount);
    }
    console.log(txns);
    res.render("transactions", { transactions: txns, total: amount });
  });
});

router.post("/user/:id/profile", function(req, res) {
  // console.log(req.body);
  db.Transactions.create({
    Userid: req.params.id,
    category: req.body.category,
    amount: req.body.amount
  }).then(function() {
    res.redirect("/users/" + req.params.id + "/transactions");
  });
});
module.exports = router;
