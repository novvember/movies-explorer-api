const { ValidationError } = require('../errors');
const { ERROR_MESSAGES } = require('./constants');

function handleMongooseError(err) {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    const fieldName = Object.keys(err.errors)[0];
    return new ValidationError(
      `${ERROR_MESSAGES.WRONG_DATA_AT_FIELD} ${fieldName}`,
    );
  }

  return err;
}

module.exports = {
  handleMongooseError,
};
