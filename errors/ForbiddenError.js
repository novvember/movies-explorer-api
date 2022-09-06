const constants = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = constants.forbiddenError.STATUS_CODE;
  }
}

module.exports = { ForbiddenError };
