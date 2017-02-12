// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // 
  insertOne: function(col, burger_name, cb) {
    orm.insertOne("burgers", col, burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(col, burger_id, cb) {
    orm.updateOne("burgers", col, burger_id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;