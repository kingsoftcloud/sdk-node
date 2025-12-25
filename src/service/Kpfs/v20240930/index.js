const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kpfs.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kpfs",
      },
    },
  };
  _apiList = {
    UpdatePerformanceOnePosixAcl: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "UpdatePerformanceOnePosixAcl",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        PosixAclId: "String",
        FileSystemList: "Array",
        Ips: "Array",
        AutoMount: "Boolean",
        Desc: "String",
      },
    },
    DescribePerformanceOnePosixAclList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "DescribePerformanceOnePosixAclList",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        PosixAclId: "String",
        FileSystemId: "String",
        FileSystemName: "String",
        Ip: "String",
        PageNum: "Int",
        PageSize: "Int",
      },
    },
    ManageDataFlowTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "ManageDataFlowTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        FileSystemId: "String",
      },
    },
    CreateDataFlowStrategy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "CreateDataFlowStrategy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        FileSystemId: "String",
      },
    },
    ModifyDataFlowTask: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "ModifyDataFlowTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        FileSystemId: "String",
      },
    },
    DescribeDataFlowTaskList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "DescribeDataFlowTaskList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        FileSystemId: "String",
      },
    },
    ActivateDataFlowTask: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "ActivateDataFlowTask",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        FileSystemId: "String",
      },
    },
    DeleteDataFlowStrategy: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "DeleteDataFlowStrategy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        FileSystemId: "String",
      },
    },
    DescribeDataFlowStrategyList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-09-30",
          Action: "DescribeDataFlowStrategyList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        FileSystemId: "String",
      },
    },
  };
};
