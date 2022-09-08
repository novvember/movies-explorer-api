const validator = require('validator');

function validateUrl(value, helpers) {
  if (validator.isURL(value)) {
    return value;
  }

  return helpers.message(`${value} is not valid link`);

  // throw new Error('link is not valid');
}

module.exports = { validateUrl };
