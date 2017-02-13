// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(table, col, name, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += col;
    queryString += ") ";
    queryString += "VALUES ('";
    queryString += name;
    queryString += "') ";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(table, col, id, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += col;
    queryString += "=1";
    queryString += " WHERE ";
    queryString += id;

    console.log(queryString); 
    connection.query(queryString, function(err, result) {   
    	if (err) { 
    		throw err;   
    	}
		cb(result);
    });
  }

};

// Export the orm object for the model (burger.js).
module.exports = orm;