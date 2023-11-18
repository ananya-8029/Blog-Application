const mysql = require("mysql");

// Create and configure the MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234Mysql@",
  database: "blog",
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    throw err;
  }
  console.log("Connected to MySQL");
});

// Export the connection object to be used elsewhere in your application
module.exports = connection;
