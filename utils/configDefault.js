const PORT = 3000;
const DATABASE_URL = 'mongodb://127.0.0.1:27017/moviesdb';
const JWT_SECRET = 'dev-secret';
const SALT_LENGTH = 10;
const LIMITER_WINDOW = 60000; // 1 min
const LIMITER_MAX_LIMIT = 100;

module.exports = {
  PORT,
  DATABASE_URL,
  JWT_SECRET,
  SALT_LENGTH,
  LIMITER_WINDOW,
  LIMITER_MAX_LIMIT,
};
