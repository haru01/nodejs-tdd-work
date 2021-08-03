// Promiseの非同期を伴った関数
const myPromiseFunc = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!message) {
        reject('Fail:'); // 結果は 失敗で Fail:
      } else {
        resolve('Success:' + message); // 結果は 成功で Success:<message>
      }

    }, 100);
  });
};

describe('myPromiseFunc', () => {
  // return & thenで記述
  test('引数があれば成功すること', () => {
    // 想定したアサーションが呼ばれているか確認したい場合は、expect.assertionsを明記する
    expect.assertions(1);

    // returnは省略しないこと。
    //   returnを省略した場合は、thenの中身が実行される前に完了してしまい、
    //   意図通りassertionを評価しない
    return myPromiseFunc('abc').then(data => {
      expect(data).toBe('Success:abc');
    });
  });

  // return & catchで記述
  test('引数が空なら失敗すること', () => {
    return myPromiseFunc('').catch(data => {
      expect(data).toBe('Fail:');
    });
  });

  // return & expect/resolvesを使って記述
  test('引数があれば成功すること.expect & resolvesの利用', () => {
    return expect(myPromiseFunc('abc')).resolves.toBe('Success:abc');
  });

  // return & expect/rejectsを使って記述
  test('引数が空であれば失敗すること. expect & rejectsの利用', () => {
    return expect(myPromiseFunc('')).rejects.toBe('Fail:');
  });

  // async/await & expect/resolvesを使って記述
  test('引数があれば成功すること. async/await & expect & resolvesの利用', async () => {
    await expect(myPromiseFunc('abc')).resolves.toBe('Success:abc');
  });

  // async/await & expect & rejectsを使って記述
  test('引数が空であれば失敗すること. expect & rejectsの利用', async () => {
    await expect(myPromiseFunc('')).rejects.toBe('Fail:');
  });

});

// コールバックは省略
// https://jestjs.io/ja/docs/asynchronous
// https://github.com/facebook/jest/tree/master/examples
