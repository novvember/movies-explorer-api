const bcrypt = require('bcryptjs');

const { User } = require('../../models/user');
const { ConflictError, ValidationError } = require('../../errors');

const { SALT_LENGTH = 10 } = process.env;

async function createUser(req, res, next) {
  try {
    const { email, password, name } = req.body;
    const passwordHash = await bcrypt.hash(password, SALT_LENGTH);

    let user = await User.create({
      email,
      password: passwordHash,
      name,
    });

    user = user.toObject();
    delete user.password;
    res.status(201).send(user);
  } catch (err) {
    if (err.name === 'CastError' || err.name === 'ValidationError') {
      next(new ValidationError('Неверные данные в запросе'));
      return;
    }
    if (err.code === 11000) {
      next(new ConflictError('Пользователь с таким email уже существует'));
      return;
    }

    next(err);
  }
}

module.exports = { createUser };
