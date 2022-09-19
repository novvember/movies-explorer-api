const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
      },
    },
    trailerLink: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
      },
    },
    thumbnail: {
      type: String,
      required: true,
      validate: {
        validator: validator.isURL,
      },
    },
    nameRU: {
      type: String,
      required: true,
    },
    nameEN: {
      type: String,
      required: true,
    },
    movieId: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

movieSchema.index({ owner: 1, movieId: 1 }, { unique: true });

const Movie = mongoose.model('movie', movieSchema);

module.exports = { Movie };
