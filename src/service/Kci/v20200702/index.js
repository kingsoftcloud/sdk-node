const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kci.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kci",
      },
    },
  };
  _apiList = {
    CreateContainerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "CreateContainerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ContainerGroupName: "String",
        SubnetId: "String",
        MultiSubnetId: "Filter",
        SecurityGroupId: "Filter",
        KciType: "String",
        InstanceType: "String",
        InstanceFamily: "String",
        ChargeType: "String",
        SpotStrategy: "String",
        ProjectId: "Int",
        Cpu: "Double",
        Memory: "Double",
        Gpu: "Double",
        KubeConfig: "String",
        RetainIp: "Boolean",
        RetainIpHours: "Int",
        EipAllocationId: "String",
        MultiEipAllocationId: "Filter",
        AutoMatchImageCache: "Boolean",
        ImageCacheId: "String",
        AdvanceSettings: "Object",
        MachineDnsConfig: "Object",
        MachineHostAliase: "Filter",
        RestartPolicy: "String",
        ImageRegistryCredential: "Filter",
        Volume: "Filter",
        Container: "Filter",
        DnsConfig: "Object",
        HostAliase: "Filter",
        ClusterDns: "String",
        ClusterDomain: "String",
        Label: "Filter",
        KubeProxy: "Object",
        KlogEnabled: "Boolean",
        DataDisk: "Filter",
        ContainerSpec: "Filter",
      },
    },
    DescribeContainerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeContainerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ContainerGroupId: "Filter",
        MaxResults: "Int",
        Marker: "Int",
        ProjectId: "Filter",
        Search: "String",
        Filter: "Filter",
      },
    },
    DeleteContainerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DeleteContainerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ContainerGroupId: "String",
      },
    },
    DescribeContainerLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeContainerLog",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ContainerGroupId: "String",
        ContainerName: "String",
        Tail: "Int",
      },
    },
    DescribeRegions: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeRegions",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Action: "String",
      },
    },
    ExecContainerCommand: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "ExecContainerCommand",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ContainerGroupId: "String",
        ContainerName: "String",
        Command: "Filter",
        TTY: "Boolean",
      },
    },
    DescribeContainerGroupCount: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeContainerGroupCount",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Label: "Object",
      },
    },
    DescribeContainerGroupEvents: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeContainerGroupEvents",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ContainerGroupId: "String",
      },
    },
    DescribeKciPackages: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeKciPackages",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ChargeType: "String",
        AvailabilityZone: "String",
        KciType: "String",
      },
    },
    CreateImageCache: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "CreateImageCache",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageCacheName: "String",
        SubnetId: "String",
        SecurityGroupId: "String",
        ImageCacheSize: "Int",
        RetentionDays: "Int",
        Image: "Filter",
        ImageRegistryCredential: "Filter",
        ImageCacheType: "String",
        EnableWarm: "Boolean",
      },
    },
    DeleteImageCache: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DeleteImageCache",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageCacheId: "String",
      },
    },
    DescribeImageCache: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeImageCache",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageCacheId: "Filter",
        ImageCacheName: "String",
        Image: "String",
        Marker: "Int",
        MaxResults: "Int",
      },
    },
    MatchImageCache: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "MatchImageCache",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Image: "Filter",
      },
    },
    DescribeImageCacheEvent: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "DescribeImageCacheEvent",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageCacheId: "String",
      },
    },
    UpdateImageCache: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2020-07-02",
          Action: "UpdateImageCache",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageCacheId: "String",
        ImageCacheName: "String",
        SubnetId: "String",
        SecurityGroupId: "String",
        ImageCacheSize: "Int",
        RetentionDays: "Int",
        Image: "Filter",
        ImageCacheType: "String",
        EnableWarm: "Boolean",
        ImageRegistryCredential: "Filter",
      },
    },
  };
};
