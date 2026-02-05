const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kce.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kce",
      },
    },
  };
  _apiList = {
    DescribeClusterInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeClusterInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        MaxResults: "Int",
        Marker: "Int",
        Filter: "Filter",
        Search: "String",
      },
    },
    DeleteCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DeleteCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceDeleteMode: "String",
      },
    },
    DownloadClusterConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DownloadClusterConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        IsPublic: "Boolean",
      },
    },
    ModifyClusterInfo: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "ModifyClusterInfo",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        ClusterName: "String",
        ClusterDesc: "String",
        EnableKMSE: "Boolean",
        ControlPlaneLog: "Object",
      },
    },
    DescribeInstanceImage: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeInstanceImage",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    AddClusterInstances: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "AddClusterInstances",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceSet: "Filter",
      },
    },
    DeleteClusterInstances: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DeleteClusterInstances",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceId: "Filter",
        InstanceDeleteMode: "String",
      },
    },
    DescribeEpcForCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeEpcForCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceId: "Filter",
        Filter: "Filter",
        Marker: "Int",
        MaxResults: "Int",
        OperatorType: "String",
      },
    },
    AddClusterEpcInstances: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "AddClusterEpcInstances",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceId: "Filter",
        EpcPara: "Filter",
        AdvancedSetting: "Object",
      },
    },
    DescribeExistedInstances: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeExistedInstances",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        InstanceId: "Filter",
        Marker: "Int",
        MaxResults: "String",
        Filter: "Filter",
        Search: "String",
      },
    },
    AddExistedInstances: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "AddExistedInstances",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        ExistedInstanceKecSet: "Filter",
      },
    },
    CreateNodePool: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "CreateNodePool",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NodePoolName: "String",
        ClusterId: "String",
        EnableAutoScale: "Boolean",
        NodeTemplate: "Object",
        Label: "Filter",
        Taint: "Filter",
        MinSize: "Int",
        MaxSize: "Int",
        DesiredCapacity: "Int",
        EnableDelProtection: "Boolean",
        FailureAutoDelete: "Boolean",
      },
    },
    DescribeNodePool: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeNodePool",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        NodePoolId: "Filter",
        Marker: "Int",
        MaxResults: "Int",
        NodePoolName: "String",
      },
    },
    DeleteNodePool: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DeleteNodePool",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        NodePoolId: "Filter",
        InstanceDeleteMode: "String",
      },
    },
    ModifyNodePool: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "ModifyNodePool",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        NodePoolId: "String",
        NodePoolName: "String",
        EnableAutoScale: "Boolean",
        MinSize: "Int",
        MaxSize: "Int",
        DesiredCapacity: "Int",
        Label: "Filter",
        Taint: "Filter",
        UpdateExistingNodes: "Boolean",
      },
    },
    ModifyNodeTemplate: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "ModifyNodeTemplate",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        NodePoolId: "String",
        NodeTemplate: "Object",
      },
    },
    ModifyNodePoolScaleUpPolicy: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "ModifyNodePoolScaleUpPolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        ScaleUpPolicy: "String",
      },
    },
    ModifyNodePoolScaleDownPolicy: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "ModifyNodePoolScaleDownPolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        MaxEmptyBulkDelete: "Int",
        ScaleDownDelayAfterAdd: "Int",
        ScaleDownEnabled: "Boolean",
        ScaleDownUnneededTime: "Int",
        ScaleDownUtilizationThreshold: "Int",
      },
    },
    AddClusterInstanceToNodePool: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "AddClusterInstanceToNodePool",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        NodePoolId: "String",
        InstanceIds: "Filter",
      },
    },
    ProtectedFromScaleDown: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "ProtectedFromScaleDown",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        NodePoolId: "String",
        InstanceIds: "Filter",
        ProtectedFromScaleDown: "Boolean",
      },
    },
    DeleteClusterInstancesFromNodePool: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DeleteClusterInstancesFromNodePool",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        NodePoolId: "String",
        InstanceIds: "Filter",
        InstanceDeleteMode: "Boolean",
      },
    },
    DescribeEpcImage: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeEpcImage",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ImageId: "Filter",
      },
    },
    EditEventCollecting: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "EditEventCollecting",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        EnableEventCollecting: "Boolean",
      },
    },
    DescribeNodePoolSummary: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeNodePoolSummary",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
      },
    },
    CreateLogRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "CreateLogRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        RuleName: "String",
        InputConfig: "Object",
        OutputConfig: "Object",
      },
    },
    DescribeClusterSummary: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeClusterSummary",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    UpdateNodePoolDelProtection: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "UpdateNodePoolDelProtection",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NodePoolId: "String",
        EnableDelProtection: "Boolean",
      },
    },
    DescribeRelease: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeRelease",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        Filter: "String",
      },
    },
    DescribeReleaseHistory: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeReleaseHistory",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        ReleaseName: "String",
        Namespace: "String",
      },
    },
    DescribeReleaseDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DescribeReleaseDetail",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        ReleaseName: "String",
        Namespace: "String",
      },
    },
    DeleteRelease: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "DeleteRelease",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        ReleaseName: "String",
        Namespace: "String",
      },
    },
    RollbackRelease: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "RollbackRelease",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        ReleaseName: "String",
        Namespace: "String",
        ReleaseVersion: "Int",
      },
    },
    InstallRelease: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "InstallRelease",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        Namespace: "String",
        ReleaseName: "String",
        ChartSource: "String",
        ChartNamespace: "String",
        ChartName: "String",
        ChartVersion: "String",
        ChartUrl: "String",
        ChartRepoType: "String",
        ChartRepoUsername: "String",
        ChartRepoPassword: "String",
        Values: "String",
      },
    },
    UpgradeRelease: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "UpgradeRelease",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        Namespace: "String",
        ReleaseName: "String",
        ChartSource: "String",
        ChartNamespace: "String",
        ChartName: "String",
        ChartVersion: "String",
        ChartUrl: "String",
        ChartRepoType: "String",
        ChartRepoUsername: "String",
        ChartRepoPassword: "String",
        Values: "String",
      },
    },
    CreateWebSocketPublicUri: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2019-08-06",
          Action: "CreateWebSocketPublicUri",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ClusterId: "String",
        Namespace: "String",
        PodName: "String",
        ContainerName: "String",
        Command: "String",
        Tty: "Boolean",
      },
    },
  };
};
