const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const { User } = require('../../models/user');
const { UnauthorizedError } = require('../../errors');
const constants = require('../../utils/constants');

async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      throw new UnauthorizedError(constants.unauthorizedError.MESSAGE_LOGIN);
    }

    const hasRightPassword = await bcrypt.compare(password, user.password);

    if (!hasRightPassword) {
      throw new UnauthorizedError(constants.unauthorizedError.MESSAGE_LOGIN);
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      NODE_ENV === 'production' ? JWT_SECRET : 'secret',
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
