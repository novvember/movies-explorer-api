const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const { User } = require('../../models/user');
const { ConflictError } = require('../../errors');
const { handleMongooseError } = require('../../utils/handleMongooseError');
const { ERROR_MESSAGES } = require('../../utils/constants');
const configDefault = require('../../utils/configDefault');

const { SALT_LENGTH = configDefault.SALT_LENGTH } = process.env;

async function createUser(req, res, next) {
  try {
    const { email, password, name } = req.body;
    const passwordHash = await bcrypt.hash(password, +SALT_LENGTH);

    let user = await User.create({
      email,
      password: passwordHash,
      name,
    });

    user = user.toObject();
    delete user.password;
    res.status(201).send(user);
  } catch (err) {
    if (err.code === 11000) {
      next(new ConflictError(ERROR_MESSAGES.USER_CONFLICT));
      return;
    }

    if (err instanceof mongoose.Error) {
      next(handleMongooseError(err));
      return;
    }

    next(err);
  }
}

module.exports = { createUser };
