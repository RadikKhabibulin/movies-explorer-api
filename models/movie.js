const mongoose = require('mongoose');
const validator = require('validator');

const { getInvalidLinkMessage } = require('../constants');
const { nameRuValidator, nameRuErrorMessage } = require('../validators/movies/nameRuValidator');
const { nameEnValidator, nameEnErrorMessage } = require('../validators/movies/nameEnValidator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 1000,
    max: new Date().getFullYear(),
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: validator.isURL,
      message: (props) => getInvalidLinkMessage(props.value),
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: validator.isURL,
      message: (props) => getInvalidLinkMessage(props.value),
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: validator.isURL,
      message: (props) => getInvalidLinkMessage(props.value),
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    min: 1,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
    validate: {
      validator: nameRuValidator,
      message: (props) => `${nameRuErrorMessage}. Received "${props.value}"`,
    },
  },
  nameEN: {
    type: String,
    required: true,
    validate: {
      validator: nameEnValidator,
      message: (props) => `${nameEnErrorMessage}. Received "${props.value}"`,
    },
  },
}, { versionKey: false });

module.exports = mongoose.model('movie', movieSchema);
