const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kcf.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kcf",
      },
    },
  };
  _apiList = {
    GetLogDate: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "GetLogDate",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        id: "Int",
      },
    },
    CreateFunction: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "CreateFunction",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Id: "String",
        Name: "String",
        Namespace: "String",
        Runtime: "String",
        CaPort: "Int",
        StartupCommand: "Array",
        Description: "String",
        Timeout: "Int",
        MemorySize: "Int",
        SingleInstanceConcurrency: "Int",
        InternetAccess: "Boolean",
        Code: "Object",
        Environment: "Object",
        VpcConfig: "Object",
        LogConfig: "Object",
        LivenessProbeConfig: "Object",
        ReadinessProbeConfig: "Object",
        Layers: "Array",
        CodeType: "String",
        CustomContainerConfig: "Object",
      },
    },
    CheckFunctionService: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "CheckFunctionService",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    OpenFunctionService: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "OpenFunctionService",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    DeleteFunction: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DeleteFunction",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Id: "String",
      },
    },
    CreateTrigger: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "CreateTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FunctionId: "String",
        TriggerName: "String",
        Type: "String",
        Enable: "Boolean",
        TriggerDesc: "Object",
      },
    },
    DeleteTrigger: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DeleteTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Id: "String",
      },
    },
    CreateOrModifyAutoScalingConfig: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "CreateOrModifyAutoScalingConfig",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FunctionId: "String",
        IdleReplicaCount: "Int",
        MaxReplicaCount: "Int",
        MinReplicaCount: "Int",
        CooldownPeriod: "Int",
        StabilizationWindowSeconds: "Int",
      },
    },
    DescribeAutoScalingConfig: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DescribeAutoScalingConfig",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FunctionId: "String",
      },
    },
    CreateAutoScaledTrigger: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "CreateAutoScaledTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FunctionId: "String",
        Triggers: "Array",
      },
    },
    ModifyAutoScaledTrigger: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "ModifyAutoScaledTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FucntionId: "String",
        Name: "String",
        TriggerConfig: "Object",
      },
    },
    DescribeAutoScaledTriggers: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DescribeAutoScaledTriggers",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FunctionId: "String",
        Name: "String",
        Type: "String",
      },
    },
    DeleteAutoScaledTrigger: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DeleteAutoScaledTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Functionid: "String",
        TriggerName: "String",
      },
    },
    DescribeFunctions: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DescribeFunctions",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Namespace: "String",
      },
    },
    DescribeFunction: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DescribeFunction",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        id: "String",
      },
    },
    ModifyFunction: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "ModifyFunction",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Id: "String",
        Runtime: "String",
        CaPort: "Int",
        StartupCommand: "Array",
        Timeout: "Int",
        MemorySize: "Int",
        SingleInstanceConcurrency: "Int",
        InternetAccess: "Boolean",
        Code: "Object",
        Environment: "Object",
        VpcConfig: "Object",
        LogConfig: "Object",
        LivenessProbeConfig: "Object",
        ReadinessProbeConfig: "Object",
        Layers: "Array",
        CustomContainerConfig: "Object",
      },
    },
    DescribeTriggers: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-12-15",
          Action: "DescribeTriggers",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        FunctionId: "String",
      },
    },
  };
};
