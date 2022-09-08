const mongoose = require('mongoose');

const { User } = require('../../models/user');
const { NotFoundError, ConflictError } = require('../../errors');
const { handleMongooseError } = require('../../utils/handleMongooseError');
const { ERROR_MESSAGES } = require('../../utils/constants');

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
      throw new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND);
    }

    res.send(user);
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

module.exports = { updateUserInfo };
