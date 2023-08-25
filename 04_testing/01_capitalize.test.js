const capitalize = require('./01_capitalize.js');

test('All lowercase strings', () => {
  expect(capitalize('abcd')).toBe('Abcd');
});

test('All uppercase strings', () => {
  expect(capitalize('ABCD')).toBe('Abcd');
});
