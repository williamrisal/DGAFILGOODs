// help | source : https://expressjs.com/fr/guide/database-integration.html
const mysql = require("mysql2");
// Create a connection to the database
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : ''
});
// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
    console.log("Successfully connected to the database.");
});

module.exports = connection;