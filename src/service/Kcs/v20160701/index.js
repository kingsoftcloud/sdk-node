const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kcs.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kcs",
      },
    },
  };
  _apiList = {
    CreateCacheCluster: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "CreateCacheCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        PassWord: "String",
        Mode: "Int",
        Vip: "String",
        Capacity: "Int",
        VpcId: "String",
        VnetId: "String",
        BillType: "Int",
        Duration: "Int",
        IamProjectId: "String",
        Protocol: "String",
        BackupTimezone: "String",
        SecurityGroupId: "String",
        SlaveNum: "Int",
        SlaveVip: "String",
        PrepareAzName: "String",
        RrAzName: "String",
        ShardNum: "Int",
        ShardSize: "Int",
        Separation: "Int",
      },
    },
    DeleteCacheCluster: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeleteCacheCluster",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
      },
    },
    DescribeCacheCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        AvailableZone: "String",
      },
    },
    DescribeCacheClusters: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheClusters",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        Name: "String",
        Vip: "String",
        VpcId: "String",
        VnetId: "String",
        Offset: "String",
        Limit: "String",
        OrderBy: "String",
        IamProjectId: "String",
        FuzzySearch: "String",
        Protocol: "String",
        TagKey: "String",
        TagValue: "String",
        Mode: "String",
      },
    },
    FlushCacheCluster: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "FlushCacheCluster",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        DatabaseNo: "String",
      },
    },
    RenameCacheCluster: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "RenameCacheCluster",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CacheId: "String",
        Name: "String",
      },
    },
    ResizeCacheCluster: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "ResizeCacheCluster",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        Capacity: "Int",
        ShardSize: "Int",
        ShardNum: "Int",
      },
    },
    DescribeCacheParameters: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheParameters",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
      },
    },
    SetCacheParameters: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "SetCacheParameters",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        Protocol: "String",
        "Parameters.ParameterName": "Filter",
        "Parameters.ParameterValue": "Filter",
        ResetAllParameters: "Boolean",
      },
    },
    DescribeCacheDefaultParameters: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheDefaultParameters",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        ParamVersion: "String",
      },
    },
    SetCacheParameterGroup: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "SetCacheParameterGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheParameterGroupIds: "String",
        CacheId: "String",
      },
    },
    CreateCacheParameterGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "CreateCacheParameterGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        Description: "String",
        ParamVersion: "String",
        Parameters: "Filter",
      },
    },
    DeleteCacheParameterGroup: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeleteCacheParameterGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheParameterGroupId: "String",
      },
    },
    ModifyCacheParameterGroup: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "ModifyCacheParameterGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        Description: "String",
        ParamVersion: "String",
        CacheParameterGroupId: "String",
        Parameters: "Filter",
      },
    },
    DescribeCacheParameterGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheParameterGroups",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        CacheParameterGroupId: "String",
        ParamVersion: "String",
        Offset: "String",
        Limit: "String",
      },
    },
    DescribeCacheParameterGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheParameterGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheParameterGroupId: "String",
      },
    },
    SetTimingSnapshot: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "SetTimingSnapshot",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        TimingSwitch: "String",
        CacheId: "String",
        Timezone: "String",
        Bigkey: "Boolean",
      },
    },
    DeleteSnapshot: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeleteSnapshot",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        SnapshotId: "String",
      },
    },
    RenameSnapshot: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "RenameSnapshot",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        SnapshotId: "String",
      },
    },
    RestoreSnapshot: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "RestoreSnapshot",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Cacheld: "String",
        Type: "String",
        SnapshotId: "String",
        BucketName: "String",
        ObjectName: "String",
      },
    },
    DescribeSnapshots: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeSnapshots",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
      },
    },
    DownloadSnapshot: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DownloadSnapshot",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        SnapshotId: "String",
      },
    },
    ExportSnapshot: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "ExportSnapshot",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        SnapshotId: "String",
        BucketName: "String",
        ObjectName: "String",
        CacheId: "String",
      },
    },
    DescribeRegions: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeRegions",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    DescribeAvailabilityZones: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeAvailabilityZones",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    DescribeCacheByRole: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheByRole",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        Proxy: "String",
      },
    },
    StatisticDBInstances: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "StatisticDBInstances",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    UpdatePassword: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "UpdatePassword",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        Password: "String",
      },
    },
    RestartCacheCluster: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "RestartCacheCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
      },
    },
    AllocateEip: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AllocateEip",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        InsType: "String",
      },
    },
    DeallocateEip: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeallocateEip",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        InsType: "String",
      },
    },
    DescribeInstances: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeInstances",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        SecurityGroupId: "String",
        Offset: "Int",
        Limit: "Int",
        FilterCache: "Boolean",
        SearchKey: "String",
      },
    },
    DeleteSecurityGroupRule: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeleteSecurityGroupRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        SecurityGroupId: "String",
        SecurityGroupRuleId: "Filter",
      },
    },
    CreateSecurityGroupRule: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "CreateSecurityGroupRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Cidrs: "Filter",
        SecurityGroupId: "String",
      },
    },
    DeallocateSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeallocateSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "Filter",
        SecurityGroupId: "String",
      },
    },
    AllocateSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AllocateSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "Filter",
        SecurityGroupId: "Filter",
      },
    },
    DescribeSecurityGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        SecurityGroupId: "String",
        SearchKey: "String",
        Offset: "String",
        Limit: "Int",
      },
    },
    DescribeSecurityGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeSecurityGroups",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Offset: "String",
        Limit: "Int",
        CacheId: "String",
        FilterCache: "Boolean",
        SearchKey: "String",
      },
    },
    ModifySecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "ModifySecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        Description: "String",
        SecurityGroupId: "String",
      },
    },
    DeleteSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeleteSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        SecurityGroupId: "Filter",
      },
    },
    CloneSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "CloneSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        Description: "String",
        SrcSecurityGroupId: "String",
      },
    },
    CreateSecurityGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "CreateSecurityGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        Name: "String",
        Description: "String",
      },
    },
    DescribeCacheReadonlyNode: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCacheReadonlyNode",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CacheId: "String",
      },
    },
    AddCacheSlaveNode: {
      url: "/",
      method: "PUT",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AddCacheSlaveNode",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CacheId: "String",
        SlaveVip: "String",
      },
    },
    DescribeHotKeys: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeHotKeys",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        Limit: "Int",
        Offset: "Int",
        SortKey: "String",
        SortDir: "String",
      },
    },
    AnalyzeHotKeys: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AnalyzeHotKeys",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
      },
    },
    CloseDirectAccessToCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "CloseDirectAccessToCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
      },
    },
    OpenDirectAccessToCluster: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "OpenDirectAccessToCluster",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AvailableZone: "String",
        CacheId: "String",
        SubnetId: "String",
        VpcId: "String",
      },
    },
    DescribeParentBackUpsSnapshots: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeParentBackUpsSnapshots",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
      },
    },
    DescribeBackUpsSnapshotsDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeBackUpsSnapshotsDetail",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        SnapshotId: "String",
      },
    },
    DeleteLevelSnapshots: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeleteLevelSnapshots",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        SnapshotId: "String",
      },
    },
    DownloadLevelSnapshot: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DownloadLevelSnapshot",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        SnapshotId: "String",
      },
    },
    DescribeBigKeys: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeBigKeys",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
      },
    },
    DeleteBigKeysAnalyseResult: {
      url: "/",
      method: "DELETE",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DeleteBigKeysAnalyseResult",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        TaskId: "String",
      },
    },
    AnalyzeBigKeys: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AnalyzeBigKeys",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TaskId: "String",
        QueryType: "Int",
      },
    },
    DescribeCreateSnapshotStatus: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeCreateSnapshotStatus",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetDailyAnalyzeSwitchState: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "GetDailyAnalyzeSwitchState",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
      },
    },
    AnalyzeDaily: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AnalyzeDaily",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        StartQueryTime: "String",
        EndQueryTime: "String",
        PageNum: "String",
        PageSize: "String",
        ShardId: "String",
        OperationType: "String",
      },
    },
    AnalyzeSlowDaily: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AnalyzeSlowDaily",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        StartQueryTime: "String",
        EndQueryTime: "String",
        PageNum: "Int",
        PageSize: "Int",
        ShardId: "String",
        IsProxy: "Boolean",
        OperationType: "String",
      },
    },
    AnalyzeDailySwitch: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "AnalyzeDailySwitch",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        ServiceLog: "Boolean",
        SlowLog: "Boolean",
      },
    },
    RestoreByTimePointSwitch: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "RestoreByTimePointSwitch",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        RestoreSwitch: "String",
      },
    },
    DescribeRestoreTimePoints: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeRestoreTimePoints",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
      },
    },
    DescribeBigHotKeys: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribeBigHotKeys",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        NodeId: "String",
        QueryType: "String",
        KeyType: "Int",
        KeyName: "String",
        StartQueryTime: "String",
        EndQueryTime: "String",
        PageSize: "Int",
        PageNum: "Int",
      },
    },
    DescribePlugins: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "DescribePlugins",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CacheId: "String",
        Installed: "Boolean",
        FuzzySearch: "String",
        Offset: "Int",
        Limit: "Int",
      },
    },
    InstallPlugins: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "InstallPlugins",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CacheId: "String",
        Plugins: "Array",
      },
    },
    UninstallPlugins: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-07-01",
          Action: "UninstallPlugins",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CacheId: "String",
        PluginNames: "Array",
      },
    },
  };
};
