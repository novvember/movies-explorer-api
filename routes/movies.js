const express = require('express');

const { getMovies, saveMovie, deleteMovie } = require('../controllers/movies');
const { movieDataValidator } = require('../utils/validators');

const movies = express.Router();

movies.get('/', getMovies);
movies.post('/', movieDataValidator, saveMovie);
movies.delete('/:movieId', deleteMovie);

module.exports = { movies };
