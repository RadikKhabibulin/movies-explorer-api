const nameEnRegex = /^([a-zA-Z0-9]+ ?[-+=.?!:]? ?)+$/;
const nameEnErrorMessage = 'must start with a letter or a number; '
                     + 'can contain only the following characters: "a-z, A-Z, 0-9, -+=.?!:"';

function nameEnValidator(name) {
  const regex = new RegExp(nameEnRegex);
  return regex.test(name);
}

module.exports = { nameEnValidator, nameEnRegex, nameEnErrorMessage };
