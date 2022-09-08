// npm-modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const cors = require('cors');

// modules
const { limiter } = require('./middlewares/limiter');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { routes } = require('./routes');
const { errorHandler } = require('./middlewares/errorHandler');
const configDefault = require('./utils/configDefault');

// config
const {
  PORT = configDefault.PORT,
  DATABASE_URL = configDefault.DATABASE_URL,
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
app.use(cors());
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
