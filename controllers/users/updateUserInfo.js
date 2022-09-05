const mongoose = require('mongoose');

const { User } = require('../../models/user');
const { NotFoundError, ConflictError } = require('../../errors');
const { handleMongooseError } = require('../../utils/handleMongooseError');

async function updateUserInfo(req, res, next) {
  try {
    const userId = req.user._id;
    const { email, name } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { email, name },
      { new: true, runValidators: true },
    );

    if (!user) {
      throw new NotFoundError('Пользователь не найден');
    }

    res.send(user);
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

module.exports = { updateUserInfo };
