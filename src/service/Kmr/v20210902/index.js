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
    DescribeCluster: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "DescribeCluster",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    LaunchCluster: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "LaunchCluster",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterName: "String",
        Distribution: "String",
        MainVersion: "String",
        ChargeType: "String",
        DatabaseInfo: "Object",
        Services: "Array",
        ProjectId: "Int",
        VpcDomainId: "String",
        SecurityGroupId: "String",
        InstanceGroups: "Array",
      },
    },
    ScaleInInstanceGroups: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ScaleInInstanceGroups",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceGroups: "Array",
        GracefulScaleIn: "Boolean",
        GracefulScaleInTimeout: "Int",
      },
    },
    ScaleOutInstanceGroups: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ScaleOutInstanceGroups",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceGroups: "Array",
        ProjectId: "Int",
      },
    },
    DescribeClusterInfo: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "DescribeClusterInfo",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    ListServiceStatus: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListServiceStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    ListClusters: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListClusters",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Marker: "String",
      },
    },
    ListClusterVersions: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListClusterVersions",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DistributionVersion: "String",
      },
    },
    DescribeService: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "DescribeService",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    ListConfigurations: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListConfigurations",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        ServiceName: "String",
      },
    },
    ListConfigurationHistory: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListConfigurationHistory",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        ServiceName: "String",
        Marker: "String",
      },
    },
    ListTagValues: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListTagValues",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    ListTagKeys: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListTagKeys",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    BindTags: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "BindTags",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        Tags: "Array",
      },
    },
    StartInstances: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "StartInstances",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceIds: "Array",
      },
    },
    RestartInstances: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "RestartInstances",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceIds: "Array",
        Interval: "Int",
        RollingRestart: "Boolean",
        ForceReboot: "Boolean",
      },
    },
    StopInstances: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "StopInstances",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceIds: "Array",
      },
    },
    ListScaleStrategy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListScaleStrategy",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    ModifyScaleStrategy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ModifyScaleStrategy",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    DeleteScaleStrategy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "DeleteScaleStrategy",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
        StrategyId: "String",
        StrategyModule: "String",
      },
    },
    ListScaleHistory: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ListScaleHistory",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    AddLoadBasedScaleStrategy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "AddLoadBasedScaleStrategy",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    ModifyLoadBasedScaleStrategy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2021-09-02",
          Action: "ModifyLoadBasedScaleStrategy",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
  };
};
