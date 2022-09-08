const { mongoose } = require('mongoose');

const { Movie } = require('../../models/movie');
const { ConflictError } = require('../../errors');
const { handleMongooseError } = require('../../utils/handleMongooseError');
const constants = require('../../utils/constants');

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
    if (err.code === 11000) {
      next(new ConflictError(constants.conflictError.MESSAGE_MOVIE));
      return;
    }

    if (err instanceof mongoose.Error) {
      next(handleMongooseError(err));
      return;
    }

    next(err);
  }
}

module.exports = { saveMovie };
