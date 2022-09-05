const { mongoose } = require('mongoose');

const { Movie } = require('../../models/movie');
const { NotFoundError, ForbiddenError } = require('../../errors');
const { handleMongooseError } = require('../../utils/handleMongooseError');

async function deleteMovie(req, res, next) {
  try {
    const { movieId } = req.params;

    const movie = await Movie.findById(movieId).populate('owner');

    if (!movie) {
      throw new NotFoundError('Фильм не найден');
    }

    const ownerId = movie.owner.id;
    const userId = req.user._id;

    if (ownerId !== userId) {
      throw new ForbiddenError('Удалить фильм может только владелец');
    }

    await Movie.findByIdAndRemove(movieId);

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
