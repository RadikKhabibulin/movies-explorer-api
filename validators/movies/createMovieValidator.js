const { celebrate, Joi } = require('celebrate');

const { celebrateLinkValidator } = require('./linkValidator');
const { nameRuRegex, nameRuErrorMessage } = require('./nameRuValidator');
const { nameEnRegex, nameEnErrorMessage } = require('./nameEnValidator');

const createMovieValidator = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi
      .number()
      .integer()
      .min(1000)
      .max(new Date().getFullYear())
      .required(),
    description: Joi.string().required(),
    image: Joi.string().required().custom(celebrateLinkValidator),
    trailerLink: Joi.string().required().custom(celebrateLinkValidator),
    thumbnail: Joi.string().required().custom(celebrateLinkValidator),
    movieId: Joi
      .number()
      .integer()
      .min(1)
      .required(),
    nameRU: Joi
      .string()
      .regex(nameRuRegex)
      .required()
      .messages({
        'string.pattern.base': nameRuErrorMessage,
      }),
    nameEN: Joi
      .string()
      .regex(nameEnRegex)
      .required()
      .messages({
        'string.pattern.base': nameEnErrorMessage,
      }),
  }),
});

module.exports = createMovieValidator;
