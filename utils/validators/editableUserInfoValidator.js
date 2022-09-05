const { celebrate, Joi } = require('celebrate');

const editableUserInfoValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

module.exports = { editableUserInfoValidator };
