const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getMovies, createMovie, deleteMovie,
} = require('../controllers/movies');
const linkRegex = require('../validators/linkValidator');
const { nameRuRegex, nameRuErrorMessage } = require('../validators/nameRuValidator');
const { nameEnRegex, nameEnErrorMessage } = require('../validators/nameEnValidator');

const moviesRouter = router;

moviesRouter.get('/', getMovies);

moviesRouter.post('/', celebrate({
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
    image: Joi.string().required().regex(linkRegex),
    trailerLink: Joi.string().required().regex(linkRegex),
    thumbnail: Joi.string().required().regex(linkRegex),
    movieId: Joi
      .string()
      .required()
      .hex()
      .min(24)
      .max(24),
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
}), createMovie);

moviesRouter.delete('/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi
      .string()
      .required()
      .hex()
      .min(24)
      .max(24),
  }),
}), deleteMovie);

module.exports = moviesRouter;
