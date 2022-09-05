const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const { User } = require('../../models/user');
const { ConflictError } = require('../../errors');
const { handleMongooseError } = require('../../utils/handleMongooseError');

const { SALT_LENGTH = 10 } = process.env;

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
    if (err.name === 'MongoServerError' && err.code === 11000) {
      next(new ConflictError('Пользователь с таким email уже существует'));
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
