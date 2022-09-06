const express = require('express');

const { movies } = require('./movies');
const { users } = require('./users');
const { NotFoundError } = require('../errors');
const { auth } = require('../middlewares/auth');
const { createUser, login } = require('../controllers/users');
const { createUserValidator, loginValidator } = require('../utils/validators');
const constants = require('../utils/constants');

const routes = express.Router();

routes.all('*', express.json());

routes.post('/signup', createUserValidator, createUser);
routes.post('/signin', loginValidator, login);

routes.use('/users', auth, users);
routes.use('/movies', auth, movies);

routes.all('*', (req, res, next) => {
  next(new NotFoundError(constants.notFoundError.MESSAGE_PAGE));
});

module.exports = { routes };
