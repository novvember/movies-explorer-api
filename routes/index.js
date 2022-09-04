const express = require('express');
const { movies } = require('./movies');
const { users } = require('./users');
// const { celebrate, Joi } = require('celebrate');

const routes = express.Router();

routes.all('*', express.json());

// routes.post('/signup', );

// routes.post('/signin', );

routes.use('/users', users);

routes.use('/movies', movies);

// routes.all('*')

module.exports = { routes };
