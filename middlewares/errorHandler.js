const constants = require('../utils/constants');

function errorHandler(err, req, res, next) {
  const { statusCode = constants.unknownError.STATUS_CODE } = err;
  let { message } = err;

  if (statusCode === constants.unknownError.STATUS_CODE) {
    message = constants.unknownError.MESSAGE;
  }

  res.status(statusCode).send({ message });

  next(err); // needs to avoid eslint error, will be never executed
}

module.exports = { errorHandler };
