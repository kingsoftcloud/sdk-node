const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "klog.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "klog",
      },
    },
  };
  _apiList = {
    CreateProject: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "CreateProject",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        Description: "String",
        Region: "String",
        IamProjectId: "Int",
        IamProjectName: "String",
      },
    },
    DescribeProject: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DescribeProject",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
      },
    },
    UpdateProject: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "UpdateProject",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        Description: "String",
        IamProjectId: "Int",
      },
    },
    DeleteProject: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DeleteProject",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
      },
    },
    ListProjects: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ListProjects",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Page: "Int",
        Size: "Int",
      },
    },
    CreateLogPool: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "CreateLogPool",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        RetentionDays: "Int",
        Partitions: "Int",
        Description: "String",
      },
    },
    DescribeLogPool: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DescribeLogPool",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
      },
    },
    UpdateLogPool: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "UpdateLogPool",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        RetentionDays: "Int",
        Partitions: "Int",
        Description: "String",
      },
    },
    DeleteLogPool: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DeleteLogPool",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
      },
    },
    ListLogPools: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ListLogPools",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        Page: "Int",
        Size: "Int",
        LogPoolName: "String",
      },
    },
    PutLogs: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "PutLogs",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        Time: "String",
        Contents: "String",
        Key: "String",
        Value: "String",
        Logs: "String",
        Filename: "String",
        Source: "String",
      },
    },
    GetLogs: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetLogs",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        From: "Int",
        To: "Int",
        Query: "String",
        LogPoolId: "String",
        HitsOpen: "Boolean",
        Interval: "String",
        SortBy: "String",
        Offset: "Int",
        Size: "Int",
      },
    },
    CreateQuickSearch: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "CreateQuickSearch",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        QuickSearchName: "String",
        Description: "String",
        TimeRange: "String",
        Query: "String",
      },
    },
    ListQuickSearchs: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ListQuickSearchs",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        Filter: "String",
        Page: "Int",
        Size: "Int",
      },
    },
    GetQuickSearch: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetQuickSearch",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        QuickSearchName: "String",
      },
    },
    DeleteQuickSearchs: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DeleteQuickSearchs",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        QuickSearchName: "String",
      },
    },
    CreateDashboard: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "CreateDashboard",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        DashboardName: "String",
      },
    },
    DeleteDashboard: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DeleteDashboard",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DashboardId: "String",
      },
    },
    DescribeDashboard: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DescribeDashboard",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DashboardId: "String",
      },
    },
    ListDashboards: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ListDashboards",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        Page: "Int",
        Size: "Int",
      },
    },
    CreateChart: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "CreateChart",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DashboardId: "String",
        ChartName: "String",
        ChartType: "String",
        Search: "String",
        Display: "String",
        LogPoolName: "String",
        TimeRange: "String",
        Query: "String",
      },
    },
    DeleteChart: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DeleteChart",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ChartId: "String",
      },
    },
    GetDashboardNamesByIds: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetDashboardNamesByIds",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        DashboardIds: "String",
      },
    },
    GetChartNamesByIds: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetChartNamesByIds",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        ChartIds: "String",
      },
    },
    UpdateDashboard: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "UpdateDashboard",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DashboardId: "String",
        DashboardName: "String",
      },
    },
    GetUsage: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetUsage",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Projects: "String",
        Metrics: "String",
        From: "String",
        To: "String",
      },
    },
    SetIndexTemplate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "SetIndexTemplate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
        IndexStatus: "Boolean",
        FullTextIndex: "String",
        IndexFields: "String",
        Lowercase: "Boolean",
        Separator: "String",
        FieldName: "String",
        FieldType: "String",
        FieldAlias: "String",
        SeparatorStatus: "Boolean",
      },
    },
    GetIndexTemplate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetIndexTemplate",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ProjectName: "String",
        LogPoolName: "String",
      },
    },
    CreateDownloadTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "CreateDownloadTask",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        From: "String",
        To: "String",
        LogPoolName: "String",
        ProjectName: "String",
      },
    },
    ListDownloadTasks: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ListDownloadTasks",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Page: "String",
        Size: "String",
        ProjectName: "String",
      },
    },
    GetDownloadUrls: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetDownloadUrls",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DownloadID: "String",
        ProjectName: "String",
      },
    },
    GetMonitorData: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetMonitorData",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    DescribeLogErrorReason: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DescribeLogErrorReason",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    DeleteEtlTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DeleteEtlTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    StopEtlTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "StopEtlTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    StartEtlTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "StartEtlTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    ListEtlTasks: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ListEtlTasks",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    DescribeEtlTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DescribeEtlTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    ModifyEtlTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ModifyEtlTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    CreateEtlTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "CreateEtlTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    DescribeEtlException: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DescribeEtlException",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    DescribeEtlStats: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "DescribeEtlStats",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    ExecuteEtlDemo: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "ExecuteEtlDemo",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetUserRegion: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetUserRegion",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetClustersByType: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2020-07-31",
          Action: "GetClustersByType",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
  };
};
