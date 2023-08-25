const reverseString = require('./02_reverseString.js');

test('Reverse a single string', () => {
  expect(reverseString('abcd')).toBe('dcba');
});

test('Reverse a sentence', () => {
  expect(reverseString('abcd efgh')).toBe('dcba hgfe');
});
