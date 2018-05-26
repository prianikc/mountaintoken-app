const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

const usersRoutes = require('./api/routes/users');


app.use(morgan('prod'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/guest', express.static(path.join(__dirname, 'dist')));
app.use('/signup', express.static(path.join(__dirname, 'dist')));
app.use('/profile', express.static(path.join(__dirname, 'dist')));
app.use('/edit-profile', express.static(path.join(__dirname, 'dist')));
app.use('/login', express.static(path.join(__dirname, 'dist')));


app.use(bodyParser.urlencoded({
  extended: true
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



app.use('/', usersRoutes);


app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
 