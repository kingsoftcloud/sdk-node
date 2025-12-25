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
      method: "GET",
      config: {
        query: {
          Version: "2016-09-01",
          Action: "GetRefreshOrPreloadTask",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DomainIds: "String",
      },
    },
    RefreshCaches: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-09-01",
          Action: "RefreshCaches",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Files: "String",
        Dirs: "String",
      },
    },
    GetDomainPidDimensionUsageData: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-09-01",
          Action: "GetDomainPidDimensionUsageData",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
  };
};
