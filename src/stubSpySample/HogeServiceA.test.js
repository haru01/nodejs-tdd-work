const ExternalHogeGateway = require('./externalHogeGateway');
const { HogeService, Order, BusinessError } = require('./hogeService');

describe('HogeService.order', () => {
  function createServiceAndSpyOnSend() {
    const gateway = new ExternalHogeGateway();
    const spyGatewaySend = jest.spyOn(gateway, 'send');
    const hogeService = new HogeService(gateway);
    return [hogeService, spyGatewaySend];
  }

  // Stubサンプル
  test('OK: Send を返すこと. 外部サービスHogeに正常sendできたら', async () => {
    expect.assertions(1);
    // arrange
    const [hogeService, sutbGatewaySend] = createServiceAndSpyOnSend();
    sutbGatewaySend.mockResolvedValue({ status: 200 }); // stub:indirect input 正常系
    // act & assert
    await expect(hogeService.order(10)).resolves.toEqual({ status: 'OK', xxx: 'xxxx' });
  });

  // Stubサンプル
  test('NG: Send を返すこと. 外部サービスsend結果のステータスが200でない場合', async () => {
    expect.assertions(1);
    // arrange
    const [hogeService, sutbGatewaySend] = createServiceAndSpyOnSend();
    sutbGatewaySend.mockResolvedValue({ status: 400 }); // stub:indirect input 異常系
    // act & assert
    await expect(hogeService.order(10)).rejects.toEqual(new Error('NG: Send Error. status:400'));
  });

  // Spy サンプル
  test('外部サービスHogeにsendしないこと_quantityが9以下の場合', async () => {
    expect.assertions(2);
    // arrange
    const [hogeService, spyGatewaySend] = createServiceAndSpyOnSend();
    // act
    try {
      await hogeService.order(9);
    } catch (error) {
      expect(error).toEqual(new BusinessError('qunatityは10以上である必要があります'));
      expect(spyGatewaySend).toHaveBeenCalledTimes(0); // spy:indirect output send呼ばれないこと
    }
  });

  // Stub & Spy サンプル
  test('外部サービスHogeにsendすること_quantityが10以上の場合', async () => {
    expect.assertions(2);
    // arrange
    const [hogeService, stubAndspyGatewaySend] = createServiceAndSpyOnSend();
    stubAndspyGatewaySend.mockResolvedValue({ status: 200 }); // stub:indirect input 正常系
    // act
    await hogeService.order(10);
    // assert
    expect(stubAndspyGatewaySend).toHaveBeenCalledTimes(1); // spy:indirect output
    expect(stubAndspyGatewaySend).toHaveBeenCalledWith(new Order(10)); // spy:indirect output
  });

  test('NGを返すこと_quantityが9以下の場合', async () => {
    expect.assertions(1);
    // arrange
    const hogeService = new HogeService();
    // act & assert
    await expect(hogeService.order(9)).rejects.toEqual(new BusinessError('qunatityは10以上である必要があります'));
  });
});
