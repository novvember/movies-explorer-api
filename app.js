// npm-modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');

// modules
const { routes } = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { limiter } = require('./middlewares/limiter');

// params
const {
  PORT = 3000,
  DATABASE_URL = 'mongodb://127.0.0.1:27017/moviesdb',
} = process.env;

// initializing
const app = express();

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log(`Connected to database on ${DATABASE_URL}`);
  })
  .catch((err) => {
    console.log('Error on database connection');
    console.error(err);
  });

// middlewares
app.use(limiter);
app.use(requestLogger);
app.use(helmet());
app.use(routes);

// error handlers
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

// app starting
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}...`);
});
