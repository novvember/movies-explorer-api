const { mongoose } = require('mongoose');

const { Movie } = require('../../models/movie');
const { NotFoundError, ForbiddenError } = require('../../errors');
const { handleMongooseError } = require('../../utils/handleMongooseError');
const { ERROR_MESSAGES } = require('../../utils/constants');

async function deleteMovie(req, res, next) {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id).populate('owner');

    if (!movie) {
      throw new NotFoundError(ERROR_MESSAGES.MOVIE_NOT_FOUND);
    }

    const ownerId = movie.owner.id;
    const userId = req.user._id;

    if (ownerId !== userId) {
      throw new ForbiddenError(ERROR_MESSAGES.UNAUTHORIZED);
    }

    await Movie.findByIdAndRemove(id);

    res.send(movie);
  } catch (err) {
    if (err instanceof mongoose.Error) {
      next(handleMongooseError(err));
      return;
    }

    next(err);
  }
}

module.exports = { deleteMovie };
