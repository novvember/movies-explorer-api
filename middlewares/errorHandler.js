const constants = require('../utils/constants');

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  const { statusCode = constants.unknownError.STATUS_CODE } = err;
  let { message } = err;

  if (statusCode === constants.unknownError.STATUS_CODE) {
    message = constants.unknownError.MESSAGE;
  }

  res.status(statusCode).send({ message });
}

module.exports = { errorHandler };
