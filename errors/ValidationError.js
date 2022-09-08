const { STATUS_CODES } = require('../utils/constants');

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = STATUS_CODES.BAD_REQUEST;
  }
}

module.exports = { ValidationError };
