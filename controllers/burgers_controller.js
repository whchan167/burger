var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  console.log(req.body)
  burger.insertOne("burger_name", req.body.burger_name
  , function() {
    
  res.redirect("/");

  });
});

router.put("/:id", function(req, res) {
  var burgerid = "id = " + req.params.id;
  
  burger.updateOne("devoured", burgerid, function() {
    
  res.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;