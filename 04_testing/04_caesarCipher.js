const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const cipher = 'bcdefghijklmnopqrstuvwxyza';

// If a string matches with its uppercase as well as its lowercase then it is a special char.

function isUpperCase (char) {
  return (char == char.toUpperCase() && char != char.toLowerCase());
}
function isLowerCase (char) {
  return (char == char.toLowerCase() && char != char.toUpperCase());
}

function singleLowerCipher (char) {
  const index = alphabet.indexOf(char);
  return cipher[index];
}

function caesarCipher (string) {
  if (typeof string !== 'string') return 'Please enter a valid string';

  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (isUpperCase(string[i]) || isLowerCase(string[i])) {
      if (isLowerCase(string[i])) {
        newString += singleLowerCipher(string[i]);
      } else if (isUpperCase(string[i])) {
        newString += singleLowerCipher(string[i].toLowerCase()).toUpperCase();
      }
    } else {
      newString += string[i];
    }
  }
  return newString;
}

module.exports = caesarCipher;
