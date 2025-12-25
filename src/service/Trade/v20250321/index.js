const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "trade.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "trade",
      },
    },
  };
  _apiList = {
    QueryUnPayOrders: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-03-21",
          Action: "QueryUnPayOrders",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        page: "Int",
        size: "Int",
      },
    },
    QueryOrderInfo: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-03-21",
          Action: "QueryOrderInfo",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        orderId: "String",
      },
    },
    CancelOrder: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-03-21",
          Action: "CancelOrder",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        orderId: "String",
      },
    },
    LaunchPayOrder: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-03-21",
          Action: "LaunchPayOrder",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        OrderId: "String",
      },
    },
  };
};
