var db = require("../models");
var express = require("express");
var moment = require("moment");
var router = express.Router();

// Routes
// =============================================================
// Get route for retrieving a single User information
router.get("/transactions", function(req, res) {
  db.Transactions.findAll({
    where: {
      UserId: req.user.id
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

    res.render("transactions", {
      transactions: txnsCopy,
      total: amount,
      layout: false
    });
  });
});

router.post("/profile", function(req, res) {
  // console.log(req.body);
  db.Transactions.create({
    UserId: req.user.id,
    category: req.body.category,
    amount: req.body.amount
  }).then(function() {
    res.redirect("/transactions");
  });
});
module.exports = router;
