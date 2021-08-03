test('filter, map ,reduceで書き換えよ', () => {
  let result = 0;
  for (const x of [1, 2, 3, 4]) {
    if (x % 2 === 1) {
      let tmp = x * x;
      result += tmp;
    }
  }
  expect(result).toBe(10); // 1*1 + 3*3
});
