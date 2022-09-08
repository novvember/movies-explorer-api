const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const configDefault = require('../../utils/configDefault');

const { JWT_SECRET = configDefault.JWT_SECRET } = process.env;

const { User } = require('../../models/user');
const { UnauthorizedError } = require('../../errors');
const { ERROR_MESSAGES } = require('../../utils/constants');

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new UnauthorizedError(ERROR_MESSAGES.WRONG_CREDENTIALS);
    }

    const hasRightPassword = await bcrypt.compare(password, user.password);

    if (!hasRightPassword) {
      throw new UnauthorizedError(ERROR_MESSAGES.WRONG_CREDENTIALS);
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      JWT_SECRET,
      {
        expiresIn: '7d',
      },
    );

    res.send({ token });
  } catch (err) {
    next(err);
  }
}

module.exports = { login };
