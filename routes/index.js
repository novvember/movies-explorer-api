const express = require('express');
// const { celebrate, Joi } = require('celebrate');

const { movies } = require('./movies');
const { users } = require('./users');
const { NotFoundError } = require('../errors');
const { auth } = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');

const routes = express.Router();

routes.all('*', express.json());

routes.post('/signup', createUser);

routes.post('/signin', login);

routes.use('/users', auth, users);

routes.use('/movies', auth, movies);

routes.all('*', (req, res, next) => {
  next(new NotFoundError('Неверный адрес запроса'));
});

module.exports = { routes };
