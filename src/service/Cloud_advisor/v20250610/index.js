const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "cloud-advisor.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "cloud-advisor",
      },
    },
  };
  _apiList = {
    GetReport: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-06-10",
          Action: "GetReport",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        taskIDs: "Array",
        startTime: "String",
        endTime: "String",
      },
    },
    CreateTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-06-10",
          Action: "CreateTask",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        inspectionItemIDs: "Array",
        productGroupIds: "Array",
        inspectionItemTypes: "Array",
      },
    },
    ListInspectionItem: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-06-10",
          Action: "ListInspectionItem",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        pageNum: "Int",
        pageSize: "Int",
      },
    },
  };
};
