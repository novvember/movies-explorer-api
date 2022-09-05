const { createUserValidator } = require('./createUserValidator');
const { loginValidator } = require('./loginValidator');
const { updateUserInfoValidator } = require('./updateUserInfoValidator');
const { saveMovieValidator } = require('./saveMovieValidator');
const { deleteMovieValidator } = require('./deleteMovieValidator');

module.exports = {
  createUserValidator,
  loginValidator,
  updateUserInfoValidator,
  saveMovieValidator,
  deleteMovieValidator,
};
