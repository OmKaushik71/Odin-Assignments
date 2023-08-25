const analyzeArray = require('./05_analyzeArray.js');

test('normal array', () => {
  expect(analyzeArray([3, 2, 1, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5
  });
});

test('array with string', () => {
  expect(analyzeArray([1, 2, 3, '4'])).toBe('not an array');
});
