const { celebrate, Joi } = require('celebrate');

const updateUserValidator = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    name: Joi.string().min(2).max(30).required(),
  }),
});

module.exports = updateUserValidator;
