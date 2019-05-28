var db = require("../models");
var express = require("express");
var moment = require("moment");
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
    var txnsCopy = [];
    for (var i = 0; i < txns.length; i++) {
      amount = amount + parseFloat(txns[i].amount);
      txnsCopy.push({
        createdAt: moment(txns[i].createdAt).format("LLL"),
        category: txns[i].category,
        amount: txns[i].amount
      });
    }

    res.render("transactions", { transactions: txnsCopy, total: amount });
  });
});

router.post("/users/:id/profile", function(req, res) {
  // console.log(req.body);
  db.Transactions.create({
    UserId: req.params.id,
    category: req.body.category,
    amount: req.body.amount
  }).then(function() {
    res.redirect("/users/" + req.params.id + "/transactions");
  });
});
module.exports = router;
