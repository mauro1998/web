const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* Redirect every request to angular router handler. */
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

module.exports = app;
