const { ValidationError } = require('../errors');
const constants = require('./constants');

function handleMongooseError(err) {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
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
