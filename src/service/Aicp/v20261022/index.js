const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "aicp.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "aicp",
      },
    },
  };
  _apiList = {
    GetModelIdleResource: {
      url: "/",
      method: "GET",
      responseMode: 0,
      config: {
        query: {
          Version: "2026-10-22",
          Action: "GetModelIdleResource",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
  };
};
