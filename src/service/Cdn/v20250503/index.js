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
    GetDomainLogs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetDomainLogs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
      },
    },
    GetClientRequestData: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetClientRequestData",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StartTime: "String",
        EndTime: "String",
        Metric: "String",
        Interval: "String",
        CdnType: "String",
        Domains: "String",
        Areas: "String",
        Provinces: "String",
        Isps: "String",
        IpType: "String",
        Schema: "String",
        ResultType: "String",
      },
    },
  };
};
