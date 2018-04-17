const express = require('express');
const app = express();
const config = require('./configDB');
const bodyParser = require('body-parser');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const checkAuth = require('./middleware/check-auth');


app.listen(3000);
console.log('Start server');
console.log(process.env.JWT_KEY);

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



app.get('/users', checkAuth, (req, res) => {
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

  let sql = 'SELECT email FROM users WHERE email = ?';
  let emailBody = [req.body.email];

  config.query(sql, emailBody, (err, userEmail) => {
    if (userEmail.length >= 1) {
      res.status(409).json({
        succes: false,
        message: "Почта занята"
      });
      console.log('mail exist!!!!');
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err
          });
        } else {
          let sql = 'INSERT INTO users ( email, password) VALUES ( ?, ?)';
          let email = req.body.email;
          let password = hash;
          let body = [email, password];
          config.query(sql, body, (err) => {
            if (err) {
              res.json({
                "message": 'SQL Error'
              });
            } else {
              res.sendStatus(201);
              // res.status(201).json({
              //   'message': "Спасибо за регестрацию"
              // });
              console.log('User created');
            }
          });
        }
      });
    }
  });
});
app.post('/login', (req, res) => {

  let sql = 'SELECT * FROM users WHERE email = ? limit 1';
  let userEmail = [req.body.email];

  config.query(sql, userEmail, (err, user) => {
    console.log(user.length);
    if (user.length < 1) {
      return res.status(401).json({
        succes: false,
        message: "Нет такой почты!"
      });
      console.log('mail missing!!!!');
    }
    if (err) {
      console.log(err);
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (err) {
        return res.status(401).json({
          message: 'Auth failed'
        });
      }
      if (result) {
        const token = jwt.sign({
            email: user[0].emaill,
            userId: user[0].id
          },
          process.env.JWT_KEY, {
            expiresIn: '1h'
          }
        );
         res.status(200).json({
        message: 'Auth successful',
          token: token,
          expiresIn: 120
        });
        console.log('im here');
        return;

      }
      return res.status(401).json({
        message: 'Auth faileeeeed'
      });
    });
  });
});
