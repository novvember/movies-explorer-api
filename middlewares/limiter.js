const rateLimit = require('express-rate-limit');

const configDefault = require('../utils/configDefault');

const {
  LIMITER_WINDOW = configDefault.LIMITER_WINDOW,
  LIMITER_MAX_LIMIT = configDefault.LIMITER_MAX_LIMIT,
} = process.env;

const limiter = rateLimit({
  windowMs: LIMITER_WINDOW,
  max: LIMITER_MAX_LIMIT,
});

module.exports = { limiter };
