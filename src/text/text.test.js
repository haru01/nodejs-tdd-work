function add(a, b) {
  return a + b;
}

test('足し算ができること', () => {
  expect(add(1, 2)).toBe(3);
});

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  clear() {
    this.name = '';
    this.age = 0;
  }

  toString() {
    return `Person<name:"${this.name}",age:${this.age}>`;
  }
}

// 更新系のテスト1. 既存のアクセサー（参照系）で確認
test('Person.clear クリアできること', () => {
  // arrange
  const person = new Person('Taro', 32);
  // act
  person.clear();
  // assert
  expect(person.name).toBe('');
  expect(person.age).toBe(0);
});

// 更新系のテスト2. toEqual を使ってオブジェクトごと比較
test('Person.clear クリアできること2', () => {
  // arrange
  const person = new Person('Taro', 32);
  // act
  person.clear();
  // assert
  expect(person).toEqual(new Person('', 0));
});

// 更新系のテスト3. 文字列化
test('Person.clear クリアできること3', () => {
  // arrange
  const person = new Person('Taro', 32);
  // act
  person.clear();
  // assert
  expect(person.toString()).toBe('Person<name:"",age:0>');
});

test('filter, map ,reduceで書き換えよ', () => {
  // let result = 0;
  // for (const x of [1, 2, 3, 4]) {
  //   let tmp = x * 2;
  //   if (tmp > 4) {
  //     result += tmp;
  //   }
  // }
  const result = [1, 2, 3, 4]
    .map((x) => x * 2)
    .filter((x) => x > 4)
    .reduce((total, x) => total + x);
  expect(result).toBe(14); // 6 + 8
});

const Code = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
};

// eslint-disable-next-line no-unused-vars
function xxamount(code) {
  let result = 0;
  if (code === Code.A) {
    result = 15000;
  } else if (code === Code.B) {
    result = 2000;
  } else if (code === Code.C) {
    result = 1000;
  } else {
    result = 500;
  }
  return result;
}

function amount(code) {
  if (code === Code.A) {
    return 15000;
  }
  if (code === Code.B) {
    return 2000;
  }
  if (code === Code.C) {
    return 1000;
  }
  return 500;
}

test('amount', () => {
  expect(amount(Code.A)).toBe(15000);
  expect(amount(Code.B)).toBe(2000);
  expect(amount(Code.C)).toBe(1000);
  expect(amount(Code.D)).toBe(500);
});

const CardType = {
  Nomal: 1,
  Silver: 2,
  Gold: 3,
};

class XxxContext {
  static calcPoint(cardType, basePoint) {
    if (cardType === CardType.Nomal) {
      return basePoint;
    }
    if (cardType === CardType.Silver) {
      return basePoint + 100;
    }
    if (cardType === CardType.Gold) {
      return (basePoint + 100) * 1.2;
    }
    return 0;
  }
}

test('XxxxContext.calcPoint', () => {
  expect(XxxContext.calcPoint(CardType.Nomal, 1000)).toBe(1000);
  expect(XxxContext.calcPoint(CardType.Silver, 1000)).toBe(1100);
  expect(XxxContext.calcPoint(CardType.Gold, 1000)).toBe(1100 * 1.2);
});

class NomalCard {
  // eslint-disable-next-line class-methods-use-this
  calcPoint(basePoint) {
    return basePoint;
  }
}

class SilverCard {
  // eslint-disable-next-line class-methods-use-this
  calcPoint(basePoint) {
    return basePoint + 100;
  }
}

class GoldCard {
  // eslint-disable-next-line class-methods-use-this
  calcPoint(basePoint) {
    return (basePoint + 100) * 1.2;
  }
}

const CardTypeB = {
  Nomal: new NomalCard(),
  Silver: new SilverCard(),
  Gold: new GoldCard(),
};

class XxxContextB {
  static calcPoint(cardType, basePoint) {
    return cardType.calcPoint(basePoint);
  }
}

test('XxxxContextB.calcPoint', () => {
  expect(XxxContextB.calcPoint(CardTypeB.Nomal, 1000)).toBe(1000);
  expect(XxxContextB.calcPoint(CardTypeB.Silver, 1000)).toBe(1100);
  expect(XxxContextB.calcPoint(CardTypeB.Gold, 1000)).toBe(1100 * 1.2);
});

// eslint-disable-next-line no-unused-vars
class Xxxx {
  init() {
    this.clear();
    this.print();
  }

  clear() {
    this.count = 0;
    this.list = null;
  }

  // eslint-disable-next-line class-methods-use-this
  print() {
    console.log('clear count');
    console.log('clear list');
  }
}
