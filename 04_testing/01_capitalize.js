const capitalize = (string) => {
  let firstLetter = string.slice(0, 1);
  let remainingLetters = string.slice(1, string.length);
  firstLetter = firstLetter.toUpperCase();
  remainingLetters = remainingLetters.toLowerCase();

  return firstLetter + remainingLetters;
};

module.exports = capitalize;
