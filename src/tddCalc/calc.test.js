const Calc = require('./calc');

describe('Calcについて', () => {
  test('お試し', () => {
    expect(1+2).toBe(3);
  });
  test('add 足し算が計算できる', () => {
    const calc = new Calc();
    expect(calc.add(1, 2)).toBe(3);
  });
  test.todo('sub 引き算が計算できる');
  test.todo('mul 掛け算が計算できる');
  test.todo('div 割り算が計算できる');
});