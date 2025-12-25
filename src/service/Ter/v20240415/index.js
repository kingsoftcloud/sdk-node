const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "ter.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "ter",
      },
    },
  };
  _apiList = {
    DescribeStackOutputs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-04-15",
          Action: "DescribeStackOutputs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StackId: "String",
      },
    },
    DescribeStackEvents: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-04-15",
          Action: "DescribeStackEvents",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StackId: "String",
        MaxResults: "Int",
        Offset: "Int",
      },
    },
    DeleteTemplate: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-04-15",
          Action: "DeleteTemplate",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TemplateId: "String",
      },
    },
    DescribeTemplateVersions: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-04-15",
          Action: "DescribeTemplateVersions",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TemplateId: "String",
      },
    },
    DescribeTemplates: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-04-15",
          Action: "DescribeTemplates",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        MaxResults: "Int",
        TemplateId: "Filter",
        Offset: "Int",
        TemplateName: "Filter",
        TemplateType: "String",
      },
    },
  };
};
