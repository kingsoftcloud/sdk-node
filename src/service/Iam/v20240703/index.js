const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "iam.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "iam",
      },
    },
  };
  _apiList = {
    ProjectsInfoByInstanceIds: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-07-03",
          Action: "ProjectsInfoByInstanceIds",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceIds: "String",
      },
    },
  };
};
