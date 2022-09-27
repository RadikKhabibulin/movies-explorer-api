const mongoose = require('mongoose');
const linkValidator = require('../validators/linkValidator');
const { nameRuValidator, nameRuErrorMessage } = require('../validators/movies/nameRuValidator');
const { nameEnValidator, nameEnErrorMessage } = require('../validators/movies/nameEnValidator');

const isNotValidLink = (link) => `${link} is not a valid link`;

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
      validator: linkValidator,
      message: (props) => isNotValidLink(props.value),
    },
  },
  trailerLink: {
    type: String,
    required: true,
    validate: {
      validator: linkValidator,
      message: (props) => isNotValidLink(props.value),
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: linkValidator,
      message: (props) => isNotValidLink(props.value),
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
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
