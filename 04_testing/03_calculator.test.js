const calculator = require('./03_calculator.js');

test('add', () => {
  expect(calculator.add(3, 4)).toBe(7);
});
test('sub', () => {
  expect(calculator.sub(4, 3)).toBe(1);
});
test('mul', () => {
  expect(calculator.mul(3, 4)).toBe(12);
});
test('div', () => {
  expect(calculator.div(4, 2)).toBe(2);
});
