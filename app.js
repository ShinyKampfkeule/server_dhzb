var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

var loginRouter = require('./src/routes/login');
var taskRouter = require('./src/routes/task');
var homeRouter = require('./src/routes/home');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', loginRouter);
app.use('/task', taskRouter);
app.use('/home', homeRouter);

mongoose.connect('mongodb://localhost', {
  user: 'root',
  pass: 'example',
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err =>{
  if(!err) {
    console.log(`Connected`);
  } else {
    console.error('Failed to open a connection to mongo db.', err);
  }
})

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
