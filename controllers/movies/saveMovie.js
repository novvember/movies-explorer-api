const { Movie } = require('../../models/movie');
const { ValidationError, ConflictError } = require('../../errors');

async function saveMovie(req, res, next) {
  try {
    const {
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      nameRU,
      nameEN,
      movieId,
    } = req.body;

    const ownerId = req.user._id;

    const movie = await Movie.create({
      country,
      director,
      duration,
      year,
      description,
      image,
      trailerLink,
      thumbnail,
      nameRU,
      nameEN,
      movieId,
      owner: ownerId,
    });

    await movie.populate('owner');
    res.status(201).send(movie);
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new ValidationError('Неверные данные в запросе'));
      return;
    }
    if (err.code === 11000) {
      next(new ConflictError('Фильм с таким id уже существует'));
      return;
    }

    next(err);
  }
}

module.exports = { saveMovie };
