const constants = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = constants.notFoundError.STATUS_CODE;
  }
}

module.exports = { NotFoundError };
