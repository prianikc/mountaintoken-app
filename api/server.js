const express = require('express');
const app = express();
const config = require('./configDB');
const bodyParser = require('body-parser');
const router = express.Router();


app.listen(3000);
console.log('Start server');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

app.get('/users', (req, res) => {
  let sql = 'SELECT * FROM users';
  config.query(sql, (err, rows) => {
    if (err) {
      res.json({
        'Error': true,
        message: 'Error Execute Sql'
      });
      console.log(err);
    } else {
      res.json({
        'Error': false,
        message: 'Success',
        'Users': rows
      });
      console.log('Users list completed');

    }
  });
});

app.post('/signup', (req, res) => {

  let sql = 'SELECT * FROM users WHERE email = ?';
  let emailBody = [req.body.email];

  config.query(sql, emailBody, (err, userEmail) => {
    if (userEmail.length >= 1) {
      res.send('mail exist');
      console.log('mail exist!!!!');
    } else {
      let sql = 'INSERT INTO users ( email, password) VALUES ( ?, ?)';
      let body = [req.body.email, req.body.password];
      config.query(sql, body, (err) => {
        if (err) {
          res.json({
            "message": 'SQL Error'
          });
        } else {
          res.send(message = "Success");
          console.log('User created');
        }
      });
    }
  });
});
