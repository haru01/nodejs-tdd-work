const ExternalHogeGateway = require('./ExternalHogeGateway');

class BusinessError extends Error {}

class Order {
  constructor(qunatity) {
    if (qunatity < 10) {
      throw new BusinessError('qunatityは10以上である必要があります');
    }
    this.qunatity = qunatity;
  }
}

class HogeService {
  #externalHogeGateway;

  constructor(externalHogeGateway = new ExternalHogeGateway()) {
    this.#externalHogeGateway = externalHogeGateway;
  }

  // return Promise.reject when quantity パラメーターが 不正の場合
  // return Promise.reject when 外部送信が失敗した場合
  // return Promise.resolve when 外部送信が成功した場合
  order(quantity) {
    let order;
    try {
      order = new Order(quantity);
    } catch (e) {
      return Promise.reject(e);
    }

    return this.#externalHogeGateway
      .send(order) // indirect input であり indirect output
      .then((data) => {
        if (data.status !== 200) {
          // throw new Error(`NG: Send. status:${data.status}`)
          return Promise.reject(new Error(`NG: Send Error. status:${data.status}`));
        }
        // 何かしらの集約を呼び出して状態遷移して永続化は省略

        // return { status: 'OK', xxx: 'xxxx' };
        return Promise.resolve({ status: 'OK', xxx: 'xxxx' });
      });
  }
}

module.exports = {
  HogeService,
  Order,
  BusinessError,
};
