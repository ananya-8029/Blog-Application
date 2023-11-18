const mysql = require("mysql");

// Creating mysql connection
export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234Mysql@",
    database: "Blog-App"
})