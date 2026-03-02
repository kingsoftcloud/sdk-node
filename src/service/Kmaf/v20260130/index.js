const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kmaf.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kmaf",
      },
    },
  };
  _apiList = {
    QueryAnswer: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2026-01-30",
          Action: "QueryAnswer",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AppId: "String",
        MsgId: "String",
        UseStream: "Int",
      },
    },
    CheckModerate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2026-01-30",
          Action: "CheckModerate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AppId: "String",
        MsgId: "String",
        UseStream: "Int",
        Message: "Object",
        History: "Array",
      },
    },
  };
};
