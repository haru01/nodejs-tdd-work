import div from './div';

test('割り算ができること', () => {
  expect(div(12, 3)).toBe(4);
});

test('0で割れば無限大（Infinity）が返ってくる。例外は発生しない', () => {
  expect(div(12, 0)).toBe(Infinity);
});
