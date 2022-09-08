const { User } = require('../../models/user');
const { NotFoundError } = require('../../errors');
const { ERROR_MESSAGES } = require('../../utils/constants');

async function getUserInfo(req, res, next) {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError(ERROR_MESSAGES.USER_NOT_FOUND);
    }

    res.send(user);
  } catch (err) {
    next(err);
  }
}

module.exports = { getUserInfo };
