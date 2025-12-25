const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "mongodb.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "mongodb",
      },
    },
  };
  _apiList = {
    DescribeDefaultParams: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-01-01",
          Action: "DescribeDefaultParams",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DbVersion: "Double",
      },
    },
  };
};
