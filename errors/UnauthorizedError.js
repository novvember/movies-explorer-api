const constants = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = constants.unauthorizedError.STATUS_CODE;
  }
}

module.exports = { UnauthorizedError };
