const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "rabbitmq.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "rabbitmq",
      },
    },
  };
  _apiList = {
    CreateInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "CreateInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProjectId: "String",
        InstanceName: "String",
        InstancePassword: "String",
        VpcId: "String",
        SubnetId: "String",
        EngineVersion: "String",
        BillType: "Int",
        Duration: "Int",
        Mode: "String",
        InstanceType: "String",
        SsdDisk: "Int",
        NodeNum: "Int",
      },
    },
    DeleteInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DeleteInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DescribeInstances: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DescribeInstances",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        InstanceName: "String",
        VpcId: "String",
        SubnetId: "String",
        Offset: "Int",
        Limit: "Int",
        OrderBy: "String",
        ProjectId: "String",
      },
    },
    DescribeInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DescribeInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DescribeInstanceNodes: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DescribeInstanceNodes",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DescribeValidRegion: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DescribeValidRegion",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    DescribeRegions: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DescribeRegions",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    DescribeSecurityGroupRules: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DescribeSecurityGroupRules",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    AddSecurityGroupRule: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "AddSecurityGroupRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        Cidrs: "String",
      },
    },
    DeleteSecurityGroupRules: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DeleteSecurityGroupRules",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        Cidrs: "String",
      },
    },
    ResetPassword: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "ResetPassword",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        InstancePassword: "String",
      },
    },
    Rename: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "Rename",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        InstanceName: "String",
      },
    },
    AllocateEip: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "AllocateEip",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DeallocateEip: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DeallocateEip",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    SupportPlugins: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "SupportPlugins",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    RestartInstance: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "RestartInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    ListInstancePlugins: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "ListInstancePlugins",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    EnableInstancePlugins: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "EnableInstancePlugins",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    DisableInstancePlugins: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-10-17",
          Action: "DisableInstancePlugins",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        DisablePlugins: "Array",
      },
    },
  };
};
