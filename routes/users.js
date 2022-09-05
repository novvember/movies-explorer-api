const express = require('express');
// const { celebrate, Joi } = require('celebrate');

const { getUserInfo } = require('../controllers/users');

const users = express.Router();

users.get('/me', getUserInfo);
// users.patch('/me', updateUserInfo);

module.exports = { users };
