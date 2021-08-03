function add(a, b) {
  return a + b;
}

test('足し算できること', () => {
  expect(add(1, 2)).toBe(3);
});
