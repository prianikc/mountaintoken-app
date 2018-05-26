const mysql = require('mysql');
const config = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'karelia2018',
  database: 'mnt_users_db'
});

module.exports = config;
