const mongoose = require('mongoose');
const { ValidationError } = require('../errors');
const constants = require('./constants');

function handleMongooseError(err) {
  if (
    err instanceof mongoose.Error.ValidationError
    || err instanceof mongoose.Error.CastError
  ) {
    const fieldName = Object.keys(err.errors)[0];
    return new ValidationError(
      `${constants.validationError.MESSAGE_DETAILED} ${fieldName}`,
    );
  }

  return err;
}

module.exports = {
  handleMongooseError,
};
