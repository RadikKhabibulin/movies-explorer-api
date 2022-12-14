const { celebrate, Joi } = require('celebrate');

const signinValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
  }),
});

module.exports = signinValidator;
