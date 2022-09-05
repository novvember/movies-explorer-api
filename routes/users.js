const express = require('express');

const { getUserInfo, updateUserInfo } = require('../controllers/users');
const { editableUserInfoValidator } = require('../utils/validators');

const users = express.Router();

users.get('/me', getUserInfo);
users.patch('/me', editableUserInfoValidator, updateUserInfo);

module.exports = { users };
