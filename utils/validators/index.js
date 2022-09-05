const { userInfoValidator } = require('./userInfoValidator');
const { loginValidator } = require('./loginValidator');
const { editableUserInfoValidator } = require('./editableUserInfoValidator');
const { movieDataValidator } = require('./movieDataValidator');
const { deleteMovieValidator } = require('./deleteMovieValidator');

module.exports = {
  userInfoValidator,
  loginValidator,
  editableUserInfoValidator,
  movieDataValidator,
  deleteMovieValidator,
};
