const mysql = require('mysql');
 const config = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'root',
   database: 'mnt_users_db'
 });

 module.exports = config;
