const { STATUS_CODES, ERROR_MESSAGES } = require('../utils/constants');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const { statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR } = err;
  let { message } = err;

  if (statusCode === STATUS_CODES.INTERNAL_SERVER_ERROR) {
    message = ERROR_MESSAGES.UNKNOWN_ERROR;
  }

  res.status(statusCode).send({ message });
}

module.exports = { errorHandler };
