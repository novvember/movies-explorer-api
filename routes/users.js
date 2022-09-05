const express = require('express');

const { getUserInfo, updateUserInfo } = require('../controllers/users');
const { updateUserInfoValidator } = require('../utils/validators');

const users = express.Router();

users.get('/me', getUserInfo);
users.patch('/me', updateUserInfoValidator, updateUserInfo);

module.exports = { users };
