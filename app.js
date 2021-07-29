const createError = require('http-errors');
const express = require('express');
require('dotenv').config()
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 4000;
const cors = require('cors');
const { usersRouter } = require('./routes/users');
// const indexRouter = require('./routes/index');
const { pitchesRouter } = require('./routes/pitches');
const { userPitchesRouter } = require('./routes/user_pitches')
const { banksRouter } = require('./routes/banks')
const { bankAccountsRouter } = require('./routes/bank_accounts')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// app.use('/', indexRouter);
app.use(usersRouter, pitchesRouter, userPitchesRouter, banksRouter, bankAccountsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000, () => {console.log("listening on port 4000")})

module.exports = app;
