const { User } = require('../../models/user');
const { NotFoundError, ValidationError, ConflictError } = require('../../errors');

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

module.exports = { updateUserInfo };
