const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kcs.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kcs",
      },
    },
  };
  _apiList = {
    DeleteCacheSlaveNode: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2017-04-01",
          Action: "DeleteCacheSlaveNode",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        NodeId: "String",
      },
    },
  };
};
