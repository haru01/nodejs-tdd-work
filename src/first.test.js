function add(a, b) {
  return a + b;
}

test('足し算できること', () => {
  expect(add(1, 2)).toBe(3);
});

describe('Stack#size.スタックに積まれている値の数を取得する', () => {
  test.todo('からの場合は ０ であること');
  test.todo('複数回Push したら回数分 であること');
});

describe('Stack#push.スタックの一番上に積む', () => {
  test.todo('Pushしていない場合');
  test.todo('1回Pushした場合');
  test.todo('複数回Pushした場合');
});

describe('Stack#pop.スタックの一番上の値を返し、取り除く', () => {
  test.todo('上の要素が取れること');
  test.todo('上の要素が取り除かれること');
  test.todo('スタックが空の場合EmptyErrorが発生');
});
