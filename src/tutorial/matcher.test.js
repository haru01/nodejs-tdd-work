// toBe 厳密な等価性 (===)
test('1+1は２である', () => {
  expect(1 + 1).toBe(2);
});

// toEqual オブジェクトの値の等価
test('同じオブジェクトであること', () => {
  const value = {one:1, two: 'b'};
  expect(value).toEqual({one:1, two: 'b'});
});

// 等価でない(not)
test('1+1は3ではない', () => {
  expect(1 + 1).not.toBe(3);
});

// 例外のテスト
class ZeroDivisionError extends Error {
  constructor(message) {
    super(message);
  }
}

function div(a, b) {
  if (b === 0) {
    throw new ZeroDivisionError('ゼロでは割れません');
  }
  return a / b;
}

test('divはゼロで割ると例外がでること', () => {
  expect(() => div(10, 0)).toThrow();
  expect(() => div(10, 0)).toThrow(ZeroDivisionError);
  expect(() => div(10, 0)).toThrow('ゼロでは割れません');
});

// 文字列のテスト
test('AB + CD + EF', () => {
  const value = 'AB' + 'CD' + 'EF';
  expect(value).toBe('ABCDEF');
  expect(value).toContain('BCDE');
  expect(value).toMatch(/DE/);
  expect(value).not.toMatch(/AE/);
});

// 配列のテスト
test('AB + CD + EF', () => {
  const value = ['AB', 'CD', 'EF'];
  expect(value).toEqual(['AB', 'CD', 'EF']);
  expect(value).not.toEqual(['ZZ', 'CD', 'EF']);
  expect(value).toContain('CD');
  expect(new Set(value)).toContain('EF');
});

// nullのテスト
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// 数値のマッチャー
test('2+2', () => {
  const value = 2 + 2;
  expect(value).toBe(4);
  expect(value).toEqual(4);

  expect(value).toBeGreaterThan(3.5);
  expect(value).not.toBeGreaterThan(4.5);

  expect(value).toBeGreaterThanOrEqual(3.9);
  expect(value).toBeGreaterThanOrEqual(4);
  expect(value).not.toBeGreaterThanOrEqual(4.1);

  expect(value).toBeLessThan(4.5);
  expect(value).not.toBeLessThan(3.5);

  expect(value).toBeLessThanOrEqual(4.1);
  expect(value).toBeLessThanOrEqual(4);
  expect(value).not.toBeLessThanOrEqual(3.9);
});

// 数値 丸め誤差を考慮
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  // expect(value).toBe(0.3);
  expect(value).toBeCloseTo(0.3);
});

// https://jestjs.io/ja/docs/using-matchers
