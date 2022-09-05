const express = require('express');

const { getMovies, saveMovie, deleteMovie } = require('../controllers/movies');
const {
  saveMovieValidator,
  deleteMovieValidator,
} = require('../utils/validators');

const movies = express.Router();

movies.get('/', getMovies);
movies.post('/', saveMovieValidator, saveMovie);
movies.delete('/:id', deleteMovieValidator, deleteMovie);

module.exports = { movies };
