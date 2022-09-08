const express = require('express');

const { movies } = require('./movies');
const { users } = require('./users');
const { NotFoundError } = require('../errors');
const { auth } = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { createUserValidator, loginValidator } = require('../utils/validators');
const { ERROR_MESSAGES } = require('../utils/constants');

const routes = express.Router();

routes.all('*', express.json());

routes.post('/signup', createUserValidator, createUser);
routes.post('/signin', loginValidator, login);

routes.all('*', auth);

routes.use('/users', users);
routes.use('/movies', movies);

routes.all('*', (req, res, next) => {
  next(new NotFoundError(ERROR_MESSAGES.PAGE_NOT_FOUND));
});

module.exports = { routes };
