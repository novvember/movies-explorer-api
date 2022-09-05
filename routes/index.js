const express = require('express');
// const { celebrate, Joi } = require('celebrate');

const { movies } = require('./movies');
const { users } = require('./users');
const { NotFoundError } = require('../errors');

const routes = express.Router();

routes.all('*', express.json());

// routes.post('/signup', );

// routes.post('/signin', );

routes.use('/users', users);

routes.use('/movies', movies);

routes.all('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес запроса'));
});

module.exports = { routes };
