const { Movie } = require('../../models/movie');

async function getMovies(req, res, next) {
  try {
    const movies = await Movie.find({}).populate('owner');
    res.send(movies);
  } catch (err) {
    next(err);
  }
}

module.exports = { getMovies };
