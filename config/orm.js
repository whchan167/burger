// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

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

  insertOne: function(table, col, burger_name, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += col;
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(burger_name.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, [burger_name], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, col, burger_id, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += col;
    queryString += "=1";
    queryString += " WHERE ";
    queryString += burger_id;

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