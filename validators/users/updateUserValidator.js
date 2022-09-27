const { celebrate, Joi } = require('celebrate');

const updateUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email(),
    name: Joi.string().min(2).max(30),
  }),
});

module.exports = updateUserValidator;
