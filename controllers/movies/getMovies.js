const { Movie } = require('../../models/movie');

async function getMovies(req, res, next) {
  try {
    const userId = req.user._id;
    const movies = await Movie.find({ owner: userId }).populate('owner');
    res.send(movies);
  } catch (err) {
    next(err);
  }
}

module.exports = { getMovies };
