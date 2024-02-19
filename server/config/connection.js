const mysql = require('mysql2');
require('dotenv').config(); //Ensure environment variables are loaded
console.log(process.env.DB_HOST);
console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: "estore",
    port: 3306
});
//use JAWSDB_URL for Heroku environment for fall back to local database
const pool = mysql.createPool(process.env.JAWSDB_URL || {
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    host: 'localhost',
    user: 'root',
    password: 'Bxy04250201!',
    database: "estore",
    port: 3306,
    multipleStatements: true
})

module.exports = pool;