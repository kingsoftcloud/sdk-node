const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "aicp.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "aicp",
      },
    },
  };
  _apiList = {
    CreateTrainJob: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "CreateTrainJob",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        TrainJobName: "String",
        Description: "String",
        ResourcePoolId: "String",
        Priority: "String",
        QueueName: "String",
        Framework: "String",
        AccessType: "String",
        SelfHealing: "Boolean",
        MaxRuntimeHour: "Long",
        JobRunOnCPU: "Boolean",
        SupportTensorboard: "Boolean",
        StorageConfigs: "Array",
        Roles: "Array",
      },
    },
    DescribeTrainJobs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "DescribeTrainJobs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TrainJobId: "Filter",
        Filter: "Filter",
        PageSize: "Int",
        Page: "Int",
        TrainJobName: "String",
      },
    },
    ModifyModelAccess: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "ModifyModelAccess",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelId: "String",
        Users: "Array",
      },
    },
    CreateModelAndVersion: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "CreateModelAndVersion",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelName: "String",
        ModelDescription: "String",
        ModelVersionName: "String",
        ModelVersionDescription: "String",
        SourceType: "String",
        StorageConfigId: "String",
        Format: "String",
        Framework: "String",
        Users: "Array",
      },
    },
    ModifyModel: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "ModifyModel",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ModelId: "String",
        ModelName: "String",
        ModelDescription: "String",
      },
    },
    DescribeModels: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "DescribeModels",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        "ModelId.N": "Array",
        ModelName: "String",
        Page: "Int",
        PageSize: "Int",
      },
    },
    DeleteModel: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "DeleteModel",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ModelId: "String",
      },
    },
    CreateModelVersion: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "CreateModelVersion",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelId: "String",
        ModelVersionName: "String",
        ModelVersionDescription: "String",
        SourceType: "String",
        StorageConfigId: "String",
        Format: "String",
        Framework: "String",
      },
    },
    DeleteModelVersion: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "DeleteModelVersion",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ModelVersionId: "String",
      },
    },
    ModifyModelVersion: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "ModifyModelVersion",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelVersionId: "String",
        ModelVersionName: "String",
        ModelVersionDescription: "String",
        Format: "String",
        Framework: "String",
        SourceType: "String",
        StorageConfigId: "String",
      },
    },
    DescribeModelVersions: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "DescribeModelVersions",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        "ModelVersionId.N": "Array",
        ModelVersionName: "String",
        ModelId: "String",
        Page: "Int",
        PageSize: "Int",
      },
    },
    DescribeFormatAndFrameworks: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-12-12",
          Action: "DescribeFormatAndFrameworks",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
  };
};
