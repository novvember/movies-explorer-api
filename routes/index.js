const express = require('express');
const { celebrate, Joi } = require('celebrate');

const routes = express.Router();

routes.all('*', express.json());

// routes.post('/signup', );

// routes.post('/signin', );

// routes.use('/users', auth, users);

// routes.use('/movies', auth, movies);

// routes.all('*')

module.exports = { routes };
