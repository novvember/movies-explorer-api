const rateLimit = require('express-rate-limit');

const {
  LIMITER_WINDOW = 15 * 60 * 1000,
  LIMITER_MAX_LIMIT = 100,
} = process.env;

const limiter = rateLimit({
  windowMs: LIMITER_WINDOW,
  max: LIMITER_MAX_LIMIT,
});

module.exports = { limiter };
