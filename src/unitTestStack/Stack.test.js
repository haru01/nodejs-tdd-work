const { Stack, EmptyError, OverflowError } = require('./Stack');

describe('Stack.capacity', () => {
  test('デフォルト容量が10であること', () => {
    const stack = new Stack();
    expect(stack.capacity()).toBe(10);
  });

  test('スタックを作成時に容量を指定できる', () => {
    const stack = new Stack(101);
    expect(stack.capacity()).toBe(101);
  });
});

// 演習A:参照系のテスト例 size
describe('Stack.size', () => {
  test.todo('空の場合は０を返すこと');
  test.todo('複数回Pushしたらその回数を返すこと');
  test.todo('複数回Push＆PopしたらPush数ーPop数を返すこと');
});

// 演習A:参照系のテスト例 isEmpty()
describe('Stack.isEmpty', () => {
  test.todo('空の場合はtrueを返す');
  test.todo('空でない場合はfalseを返す');
});

// 演習B:更新系のテスト(toStringを使って状態変更を確認)
describe('Stackのpush＆pop正常更新系について', () => {
  test.todo('初期は空であること');
  test.todo('２回pushした場合に値が積まれていること');
  test.todo('複数回push&popした場合の値が積まれていること');
});

describe('Stack.pop', () => {
  // 演習C:例外系のテスト
  test.todo('空の場合はEmptyErrorを投げること');

  test('一番上の要素から取得できること', () => {
    // arrenge
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    // act & assert
    expect(stack.pop()).toBe(200);
    expect(stack.pop()).toBe(100);
    expect(stack.size()).toBe(0);
  });
});

describe('Stack.push', () => {
  // 演習C:例外系のテスト
  test.todo('満杯の場合はOverflowErrorを投げること');

  test('pushで順に積まれていくこと', () => {
    // arrenge
    const stack = new Stack();
    // act
    stack.push(100);
    stack.push(200);
    // assert
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(200);
    expect(stack.pop()).toBe(100);
  });
});

// 更新系のテスト(状態変更を確認オブジェクト比較の場合)
describe('Stackのpush＆pop正常更新系について', () => {
  test('初期は空であること', () => {
    const stack = new Stack();
    expect(stack.toNodes()).toEqual([]);
  });

  test('複数回push&popした場合の値が積まれていること', () => {
    const stack = new Stack();
    stack.push(111);
    stack.push(222);
    expect(stack.toNodes()).toEqual([111, 222]);
  });
});
