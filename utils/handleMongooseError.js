const mongoose = require('mongoose');
const { ValidationError } = require('../errors');

function handleMongooseError(err) {
  if (
    err instanceof mongoose.Error.ValidationError
    || err instanceof mongoose.Error.CastError
  ) {
    const fieldName = Object.keys(err.errors)[0];
    return new ValidationError(`Неверные данные в поле '${fieldName}'`);
  }

  return err;
}

module.exports = {
  handleMongooseError,
};
