const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kmr.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kmr",
      },
    },
  };
  _apiList = {
    ListInstances: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2023-12-31",
          Action: "ListInstances",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        PageNumber: "Int",
        PageSize: "Int",
        InstanceStatus: "Array",
        InstanceNameOrId: "String",
      },
    },
    GetInstanceDetail: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2023-12-31",
          Action: "GetInstanceDetail",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    ModifyHosts: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2023-12-31",
          Action: "ModifyHosts",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        TunaHosts: "Array",
      },
    },
    ListAutoScaleHistory: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2023-12-31",
          Action: "ListAutoScaleHistory",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ExecAtStart: "String",
        ExecAtEnd: "String",
        PolicyName: "String",
        PageNumber: "Int",
        PageSize: "Int",
      },
    },
    CreateAutoScalePolicy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2023-12-31",
          Action: "CreateAutoScalePolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        PolicyName: "String",
        ChargeType: "String",
        ExecuteCycle: "String",
        ExecuteRules: "Object",
      },
    },
    ListAutoScalePolicy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2023-12-31",
          Action: "ListAutoScalePolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DeleteAutoScalePolicy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2023-12-31",
          Action: "DeleteAutoScalePolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        PolicyId: "String",
      },
    },
  };
};
