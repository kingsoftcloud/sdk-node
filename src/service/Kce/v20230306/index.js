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
    CreatePrometheusInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "CreatePrometheusInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceName: "String",
        ChargeType: "String",
        DataRetentionTime: "Int",
      },
    },
    DescribePrometheusInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribePrometheusInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "Filter",
        Marker: "Int",
        MaxResults: "Int",
        Search: "String",
      },
    },
    UpdatePrometheusInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "UpdatePrometheusInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        InstanceName: "String",
        DataRetentionTime: "Int",
      },
    },
    DeletePrometheusInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DeletePrometheusInstance",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    EnableGrafana: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "EnableGrafana",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        EnableGrafana: "Boolean",
        Password: "String",
      },
    },
    UpdateGrafanaPassword: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "UpdateGrafanaPassword",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        Password: "String",
      },
    },
    EnableGrafanaInternet: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "EnableGrafanaInternet",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        EnableInternet: "Boolean",
      },
    },
    DescribeGrafanaWhiteList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribeGrafanaWhiteList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    UpdateGrafanaWhiteList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "UpdateGrafanaWhiteList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        WhiteList: "Filter",
      },
    },
    AssociateCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "AssociateCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
      },
    },
    DisassociateCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DisassociateCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
      },
    },
    DescribeAssociateClusterList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribeAssociateClusterList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        Marker: "Int",
        MaxResults: "Int",
        ClusterId: "Filter",
      },
    },
    DescribeMonitorList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribeMonitorList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorSource: "String",
        Marker: "Int",
        MaxResults: "Int",
      },
    },
    DescribeMonitorCollectionConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribeMonitorCollectionConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorName: "String",
        Type: "String",
      },
    },
    UpdateMonitorCollectionConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "UpdateMonitorCollectionConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorName: "String",
        Type: "String",
        ConfigYaml: "String",
      },
    },
    DescribeMonitorMetricsList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribeMonitorMetricsList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorName: "String",
        Type: "String",
        IsCollect: "Boolean",
        Marker: "Int",
        MaxResults: "Int",
      },
    },
    DescribeTargetsList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribeTargetsList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorName: "String",
        Type: "String",
        Marker: "Int",
        MaxResults: "Int",
      },
    },
    DescribeAgentStatus: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DescribeAgentStatus",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
      },
    },
    CreateMonitorCollectionConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "CreateMonitorCollectionConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        Type: "String",
        ConfigYaml: "String",
      },
    },
    DeleteMonitorCollectionConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DeleteMonitorCollectionConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorName: "String",
        Type: "String",
      },
    },
    EnableMetrics: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "EnableMetrics",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorName: "String",
        Type: "String",
        MetricsName: "Filter",
      },
    },
    DropMetrics: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2023-03-06",
          Action: "DropMetrics",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InstanceId: "String",
        ClusterId: "String",
        MonitorName: "String",
        Type: "String",
        MetricsName: "Filter",
      },
    },
  };
};
