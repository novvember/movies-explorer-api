const { getUserInfo } = require('./getUserInfo');
const { updateUserInfo } = require('./updateUserInfo');
const { createUser } = require('./createUser');
const { login } = require('./login');

module.exports = {
  getUserInfo, updateUserInfo, createUser, login,
};
