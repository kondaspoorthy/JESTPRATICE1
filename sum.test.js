const sum1 = require('./functions')
const sub1 = require('./functions')
test('adds 1 + 2 to equal 3', () => {
  expect(sum1.sum(1, 2)).toBe(3);
});
test('subs 2-1 equal to 3', () => {
    expect(sub1.sub(2, 1)).toBe(3);
  });