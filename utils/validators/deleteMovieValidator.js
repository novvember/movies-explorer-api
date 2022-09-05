const { celebrate, Joi } = require('celebrate');

const { validateObjectId } = require('../validateObjectId');

const deleteMovieValidator = celebrate({
  params: Joi.object().keys({
    id: Joi.string().custom(validateObjectId),
  }),
});

module.exports = { deleteMovieValidator };
