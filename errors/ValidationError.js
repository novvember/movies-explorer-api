const constants = require('../utils/constants');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = constants.validationError.STATUS_CODE;
  }
}

module.exports = { ValidationError };
