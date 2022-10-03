const validator = require('validator');
const { getInvalidLinkMessage } = require('../../constants');

const celebrateLinkValidator = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.message(getInvalidLinkMessage(value));
};

module.exports = { celebrateLinkValidator };
