const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kscc.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kscc",
      },
    },
  };
  _apiList = {
    UpdateUserQuota: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V1",
          Action: "UpdateUserQuota",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        UserName: "String",
        QuotaAmount: "Double",
      },
    },
    DescribeUserCostSummary: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V1",
          Action: "DescribeUserCostSummary",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        UserName: "String",
      },
    },
  };
};
