const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => { // ülemine testi deklaratsioon
  expect(sum(1, 2)).toBe(3);        // see siin real on test ise
});