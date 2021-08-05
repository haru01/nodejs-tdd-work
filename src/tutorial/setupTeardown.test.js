// テスト同士で共有し干渉するグローバルデータ
let globalUsers = ['abc'];

describe('contextA', () => {
  let copyUsers;
  beforeEach(() => {
    copyUsers = [...globalUsers];
    globalUsers.push('efg');
  });

  // もし後処理がない場合はどうなる？
  afterEach(() => {
    // 元の状態に戻す
    globalUsers = copyUsers;
  });

  test('users', () => {
    expect(globalUsers).toEqual(['abc', 'efg']);
  });

  test('users', () => {
    globalUsers.push('hig');
    expect(globalUsers).toEqual(['abc', 'efg', 'hig']);
  });
});

describe('contextB', () => {
  test('users', () => {
    expect(globalUsers).toEqual(['abc']);
  });
});

describe.skip('BeforeAllBeforeEachAfterEachAfterAll', () => {
  beforeAll(() => {
    console.log('@beforeAll');
  });
  beforeEach(() => {
    console.log('@beforeEach');
  });
  afterEach(() => {
    console.log('@afterEach');
  });
  afterAll(() => {
    console.log('@afterAll');
  });

  test('testA', () => {
    console.log('@testA');
  });

  test('testB', () => {
    console.log('@testB');
  });
});

// https://jestjs.io/ja/docs/setup-teardown
