const { Stack, EmptyError, OverflowError } = require('./stack');

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
  test('空の場合は０を返すこと', () => {
    const stack = new Stack();
    expect(stack.size()).toBe(0);
  });

  test('複数回Pushしたらその回数を返すこと', () => {
    // arrange
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    // act & assert
    expect(stack.size()).toBe(2);
  });

  test('複数回Push＆PopしたらPush数ーPop数を返すこと', () => {
    // arrange
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    stack.pop();
    // act & assert
    expect(stack.size()).toBe(2-1);
  });
});

// 演習A:参照系のテスト例 isEmpty()
describe('Stack.isEmpty', () => {
  test('空の場合はtrueを返す', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  test('空でない場合はfalseを返す', () => {
    // arrange
    const stack = new Stack();
    stack.push(100);
    // act & assert
    expect(stack.isEmpty()).toBe(false);
  });
});

// 演習B:更新系のテスト(toStringを使って状態変更を確認)
describe('Stackのpush＆pop正常更新系について', () => {
  test('push&popしていない場合は空であること', () => {
    // arrenge
    const stack = new Stack();
    // assert
    expect(stack.toString()).toBe('<Stack:[]>');
  });

  test('２回pushした場合に値が積まれていること', () => {
    // arrenge
    // act
    const stack = new Stack();
    stack.push(100);
    stack.push(200);
    // assert
    expect(stack.toString()).toBe('<Stack:[100,200]>');
  });

  test('複数回push&popした場合の値が積まれていること', () => {
    // arrenge
    const stack = new Stack();
    // act
    stack.push(100);
    stack.push(200);
    stack.push(300);
    // assert
    expect(stack.toString()).toBe('<Stack:[100,200,300]>');
    // act
    stack.pop();
    stack.pop();
    // assert
    expect(stack.toString()).toBe('<Stack:[100]>');
    // act
    stack.push(400);
    // assert
    expect(stack.toString()).toBe('<Stack:[100,400]>');
  });
});

describe('Stack.pop', () => {
  // 演習C:例外系のテスト
  test('空の場合はEmptyErrorを投げること', () => {
    // arrenge
    const stack = new Stack();
    // act & assert
    expect(() => stack.pop()).toThrow(new EmptyError('スタックが空でpopできません'));
  });

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
  test('満杯の場合はOverflowErrorを投げること', () => {
    // arrenge
    const stack = new Stack(1);
    stack.push(100);
    // act & assert
    expect(() => stack.push(200)).toThrow(new OverflowError('スタックが満杯でpushできません'));
  });

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
