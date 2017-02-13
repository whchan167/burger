// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // 
  insertOne: function(col_name, burger_name, cb) {
    orm.insertOne("burgers", col_name, burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(col_devoured, burger_id, cb) {
    orm.updateOne("burgers", col_devoured, burger_id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;