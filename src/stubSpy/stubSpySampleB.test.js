const ExternalHogeGateway = require('./externalHogeGateway');
const { HogeService, Order,BusinessError } = require('./hogeService');

jest.mock('./externalHogeGateway');


describe('HogeService.order', () => {
  beforeEach(() => {
    ExternalHogeGateway.mockClear();
  });

  // Stubサンプル
  test('OK: Send を返すこと. 外部サービスHogeに正常sendできたら', async () => {
    // arrange
    const hogeService = new HogeService();
    const stubHogeGateway = ExternalHogeGateway.mock.instances[0];
    stubHogeGateway.send.mockResolvedValue({status:200});

    // act & assert
    await expect(hogeService.order(10)).resolves.toEqual({ status: 'OK', xxx: 'xxxx' });
  });

  // Stubサンプル
  test('NG: Send を返すこと. 外部サービスsend結果のステータスが200でない場合', async () => {
    // arrange
    const hogeService = new HogeService();
    const stubHogeGateway = ExternalHogeGateway.mock.instances[0];
    stubHogeGateway.send.mockResolvedValue({status:400});

    // act & assert
    await expect(hogeService.order(10)).rejects.toEqual(new Error('NG: Send Error. status:400'));
  });

  // Stub & Spy サンプル
  test('外部サービスHogeにsendすること_quantityが10以上の場合', async () => {
    // arrange
    const hogeService = new HogeService();
    const stubAndSpySend = ExternalHogeGateway.mock.instances[0].send;
    stubAndSpySend.mockResolvedValue({status:200}); // indirect & Input

    // act
    hogeService.order(10);

    // assert
    expect(stubAndSpySend).toHaveBeenCalledTimes(1);
    expect(stubAndSpySend).toHaveBeenCalledWith(new Order(10));
  });

  // Spy サンプル
  test('外部サービスHogeにsendしないこと_quantityが9以下の場合', () => {
    // arrange
    const hogeService = new HogeService();
    // act
    hogeService.order(9);
    // assert
    const spySend = ExternalHogeGateway.mock.instances[0].send;
    expect(spySend).toHaveBeenCalledTimes(0);
  });

  test('NGを返すこと_quantityが9以下の場合', async () => {
    // arrange
    const hogeService = new HogeService();
    // act & assert
    await expect(hogeService.order(9)).rejects.toEqual(new BusinessError('qunatityは10以上である必要があります'));
  });
});