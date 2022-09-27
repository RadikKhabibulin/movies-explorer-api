const { celebrate, Joi } = require('celebrate');

const deleteMovieValidator = celebrate({
  params: Joi.object().keys({
    movieId: Joi
      .string()
      .required()
      .hex()
      .min(24)
      .max(24),
  }),
});

module.exports = deleteMovieValidator;
