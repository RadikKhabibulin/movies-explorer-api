const nameRuRegex = /^([а-яА-ЯёЁ0-9]+ ?[-+=.?!:]? ?)+$/;
const nameRuErrorMessage = 'must start with a letter or a number; '
                     + 'can contain only the following characters: "а-я, А-Я, 0-9, -+=.?!:"';

function nameRuValidator(name) {
  const regex = new RegExp(nameRuRegex);
  return regex.test(name);
}

module.exports = { nameRuValidator, nameRuRegex, nameRuErrorMessage };
