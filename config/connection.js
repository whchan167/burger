// Set up MySQL connection.
var mysql = require("mysql");

var connectioninfo = {
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
};

var connection = mysql.createConnection(connectioninfo);

if (process.env.JAWSDB_URL) {
  connectioninfo = process.env.JAWSDB_URL
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;