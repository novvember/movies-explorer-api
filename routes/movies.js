const express = require('express');
// const { celebrate, Joi } = require('celebrate');

const { getMovies } = require('../controllers/movies');

const movies = express.Router();

movies.get('/', getMovies);
// movies.post('/', saveMovie);
// movies.delete('/:movieId', deleteMovie);

module.exports = { movies };
