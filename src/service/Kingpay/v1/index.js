const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kingpay.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kingpay",
      },
    },
  };
  _apiList = {
    QueryCashWalletAction: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "QueryCashWalletAction",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        subject: "Int",
      },
    },
  };
};
