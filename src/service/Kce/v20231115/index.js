const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kce.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kce",
      },
    },
  };
  _apiList = {
    DescribeCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-11-15",
          Action: "DescribeCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        Marker: "Int",
        MaxResults: "Int",
        Search: "String",
        Filter: "Filter",
      },
    },
    UpdateClusterDelProtection: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-11-15",
          Action: "UpdateClusterDelProtection",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        EnableDelProtection: "Boolean",
      },
    },
  };
};
