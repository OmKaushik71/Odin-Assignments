const caesarCipher = require('./04_caesarCipher.js');

test('aabbccdd to bbccddee', () => {
  expect(caesarCipher('aabbccdd')).toBe('bbccddee');
});

test('aAbBcCdD to bBcCdDeE', () => {
  expect(caesarCipher('aAbBcCdDeE')).toBe('bBcCdDeEfF');
});

test('aab%c#d to bbc%d#e', () => {
  expect(caesarCipher('aab%c#d')).toBe('bbc%d#e');
});

test('Invalid string', () => {
  expect(caesarCipher(1)).toBe('Please enter a valid string');
});
