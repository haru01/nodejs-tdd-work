const { HogeService, Order, BusinessError } = require('../stubSpySample/HogeService');

describe('HogeService.order', () => {
  // Stubサンプル
  test('OK: Send を返すこと. 外部サービスHogeに正常sendできたら', async () => {
    expect.assertions(1);
    const hogeService = new HogeService({
      // indirect input: 固定値を返す
      // eslint-disable-next-line no-unused-vars
      send: (order) => Promise.resolve({ status: 200 }),
    });
    // act & assert
    await expect(hogeService.order(10)).resolves.toEqual({ status: 'OK', xxx: 'xxxx' });
  });

  // Stubサンプル
  test('NG: Send を返すこと. 外部サービスsend結果のステータスが200でない場合', async () => {
    expect.assertions(1);
    const hogeService = new HogeService({
      // indirect input: 固定値を返す
      // eslint-disable-next-line no-unused-vars
      send: (order) => Promise.resolve({ status: 400 }),
    });
    await expect(hogeService.order(10)).rejects.toEqual(new Error('NG: Send Error. status:400'));
  });

  function stubAndSpyGateway() {
    let sendCalledTimes = 0;
    const sendParams = [];

    return {
      // 差し替え
      send: (send) => {
        // indirect outputをSpyとして記録
        sendCalledTimes += 1;
        sendParams.push(send);
        // indirect inputをStubとして固定値を返す。
        return Promise.resolve({ status: 200 });
      },
      sendCalledTimes: () => sendCalledTimes,
      sendParams: () => sendParams,
    };
  }
  // Spy サンプル
  test('外部サービスHogeにsendしないこと_quantityが9以下の場合', async () => {
    // arrange
    expect.assertions(2);
    const spy = stubAndSpyGateway();
    const hogeService = new HogeService(spy);
    // act
    await expect(hogeService.order(9)).rejects.toEqual(new BusinessError('qunatityは10以上である必要があります'));
    // assert
    expect(spy.sendCalledTimes()).toBe(0); // spy:indirect output send呼ばれないこと
  });

  // Stub & Spy サンプル
  test('外部サービスHogeにsendすること_quantityが10以上の場合', async () => {
    // arrange
    expect.assertions(2);
    const spy = stubAndSpyGateway();
    const hogeService = new HogeService(spy);
    // act
    await hogeService.order(10);
    // assert
    expect(spy.sendCalledTimes()).toBe(1); // spy:indirect output
    expect(spy.sendParams()[0]).toEqual(new Order(10)); // spy:indirect output
  });

  test('rejectsを返すこと_quantityが9以下の場合', async () => {
    expect.assertions(1);
    // arrange
    const hogeService = new HogeService();
    // act & assert
    await expect(hogeService.order(9)).rejects.toEqual(new BusinessError('qunatityは10以上である必要があります'));
  });

  function stubAndMockGateway() {
    let actualSendCalledTimes = 0;

    return {
      // 差し替え
      send: (send) => {
        // indirect outputをSpyとして記録
        actualSendCalledTimes += 1;
        // indirect inputをStubとして固定値を返す。
        setTimeout(() => Promise.resolve({ status: 200 }), 10000);
        // return Promise.resolve({ status: 200 });
      },
      expectedSendCalledTimes: (expected) => expect(actualSendCalledTimes).toBe(expected),
    };
  }

  test('take2:外部サービスHogeにsendしないこと_quantityが9以下の場合', async () => {
    expect.assertions(2);
    const mock = stubAndMockGateway();
    const hogeService = new HogeService(mock);
    // act
    await expect(hogeService.order(9)).rejects.toEqual(new BusinessError('qunatityは10以上である必要があります'));
    // assert
    mock.expectedSendCalledTimes(0); // spy:indirect output send呼ばれないこと
  });
});
