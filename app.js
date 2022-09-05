// npm-modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');

// modules
const { routes } = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');

// params
const { PORT = 3000, DATABASE_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

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
app.use(routes);

// error handlers
app.use(errors());
app.use(errorHandler);

// app starting
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}...`);
});
