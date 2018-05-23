const express = require('express');
const router = express.Router();
const config = require('../configDB');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');


router.post('/profile/:id', checkAuth, (req, res) => {
  let id = req.params.id;
  let sql = 'UPDATE users SET ? WHERE id = ?';
  const user = {
    email: req.body.email,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
    smartkontract_id: req.body.smartkontract_id,
    country: req.body.country,
    city: req.body.city
  };
  config.query(sql, [user, id], (err) => {
    if (err) {
      res.status(500).json({
        message: err
      });
      return;
    }
    res.status(200).json({
      succes: true,
      'Error': false,
      message: 'Success'
    });
  });

});


router.get('/profile/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  let sql = 'SELECT * FROM users WHERE id = ?';

  config.query(sql, id, (err, user) => {
    console.log(user);
    if (err) {
      res.status(500).jsonp({
      //  message: err
      });
      return;
    } else {
      res.status(200).jsonp({
       // user: user
      });
    }
  });
});

router.get('/users', checkAuth, (req, res) => {
  let sql = 'SELECT email, id FROM users';
  config.query(sql, (err, rows) => {
    if (err) {
      res.json({
        'Error': true,
        message: 'Error Execute Sql'
      });
      console.log(err);
    } else {
      res.status(200).json({
        'Error': false,
        message: 'Success',
        'Users': rows
      });
      console.log('Users list completed');

    }
  });
});

router.post('/signup', (req, res) => {

  let sql = 'SELECT email FROM users WHERE email = ?';
  let emailBody = [req.body.email];

  config.query(sql, emailBody, (err, userEmail) => {
    const errResponse = {
      'sacces': false,
      'message': 'Почта занята',
      'status': 409
    };
    const rightResponse = {
      'sacces': true,
      'message': 'Пользователь создан',
      'status': 201
    };
    if (userEmail.length >= 1) {
      res.send(errResponse);
      console.log('mail exist!!!!');
      return;
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            error: err
          });
        } else {
          console.log('here');
          let sql = 'INSERT INTO users SET ?';
          const user = {
            email: req.body.email,
            password: hash,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone_number: req.body.phone_number,
            smartkontract_id: req.body.smartkontract_id,
            country: req.body.country,
            city: req.body.city
          };
          console.log(user);
          config.query(sql, user, (err) => {
            if (err) {
              console.log(err);
              res.json({
                "message": 'SQL Error'
              });
            } else {
              //res.sendStatus(201);
              res.send(rightResponse);
              // res.status(201).json({
              //   'message': "Спасибо за регестрацию"
              // });
              console.log('User created');
              return;
            }
          });
        }
      });
    }
  });
});

router.post('/login', (req, res) => {

  let sql = 'SELECT * FROM users WHERE email = ?';
  let userEmail = [req.body.email];

  config.query(sql, userEmail, (err, user) => {
    console.log(user.length);
    if (user.length < 1) {
      res.json({
        succes: false,
        message: "Почта не зарегистрирована !"
      });
      console.log('mail missing!!!!');
      return;
    }
    if (err) {
      console.log(err);
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
      if (err) {
        return res.json({
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
          expiresIn: 1000,
          loginStatus: true
        });
        console.log('im here');
        return;

      }
      return res.json({
        message: 'Auth faileeeeed'
      });
    });
  });
});






module.exports = router;
