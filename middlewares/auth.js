const jwt = require('jsonwebtoken');

const { UnauthorizedError } = require('../errors');
const { ERROR_MESSAGES } = require('../utils/constants');
const configDefault = require('../utils/configDefault');

const { JWT_SECRET = configDefault.JWT_SECRET } = process.env;

function auth(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED);
    }

    const token = authorization.replace('Bearer ', '');
    let payload;

    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      throw new UnauthorizedError(ERROR_MESSAGES.UNAUTHORIZED);
    }

    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { auth };
