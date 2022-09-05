const { celebrate, Joi } = require('celebrate');

const updateUserInfoValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports = { updateUserInfoValidator };
