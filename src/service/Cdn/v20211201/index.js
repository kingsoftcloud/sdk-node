const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "cdn.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "cdn",
      },
    },
  };
  _apiList = {
    GetRefreshOrPreloadTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-01",
          Action: "GetRefreshOrPreloadTask",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Action: "String",
        Version: "String",
      },
    },
  };
};
