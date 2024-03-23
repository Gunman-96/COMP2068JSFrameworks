const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const users = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(favicon(path.join(images, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// handle errors
app.use(function(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  if (process.env.NODE_ENV === 'development') {
    res.status(err.status || 500).json({
      error: {
        message: err.message,
        status: err.status,
        stack: err.stack,
        url: req.originalUrl
      }
    });
  } else {
    res.status(err.status || 500).send({
      error: {
        message: err.message,
        status: err.status,
        url: req.originalUrl
      }
    });
  }
});

module.exports = app;