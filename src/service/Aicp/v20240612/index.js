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
    SaveNotebookImage: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "SaveNotebookImage",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageName: "String",
        Description: "String",
        ImageType: "String",
        Namespace: "String",
        NamespacePermission: "String",
        ImageRepo: "String",
        ImageVersion: "String",
        OfficialInstance: "String",
        UserName: "String",
        Password: "String",
        ImagePermission: "String",
        NotebookId: "String",
        ImageDomain: "String",
      },
    },
    ModifyNotebook: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyNotebook",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        NotebookId: "String",
        DisplayName: "String",
        Description: "String",
        ImageId: "String",
        QueueName: "String",
        GPUType: "String",
        GPUNumber: "Int",
        AccessType: "String",
        AllocationId: "String",
        EnableSsh: "String",
        SshPort: "Int",
        EnablePublicNetworkSsh: "Boolean",
        SshAuthorizedKeys: "String",
        CpuNum: "Int",
        Memory: "Int",
        StorageConfigs: "Array",
        ServiceConfigs: "Array",
        AutoSave: "Boolean",
        RunOnCPU: "String",
        NotebookName: "String",
        SSHPort: "Int",
        SSHAuthorizedKeys: "String",
        CPUNum: "Int",
        ImageTagId: "String",
        ImageSource: "String",
        ImageRepoId: "String",
        ImageRegistryId: "String",
        EnableSSH: "String",
        EnablePublicNetworkSSH: "Boolean",
      },
    },
    DeleteNotebook: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteNotebook",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NotebookId: "String",
      },
    },
    DescribeNotebooks: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeNotebooks",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NotebookId: "Filter",
        Name: "String",
        Marker: "Int",
        MaxResults: "Int",
        State: "String",
        Filter: "Filter",
        QueueId: "String",
      },
    },
    CreateNotebook: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateNotebook",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DisplayName: "String",
        Description: "String",
        ImageId: "String",
        QueueName: "String",
        GPUType: "String",
        GPUNumber: "Int",
        AccessType: "String",
        EnablePublicNetworkSsh: "Boolean",
        AllocationId: "String",
        CpuNum: "Int",
        Memory: "Int",
        EnableSsh: "Boolean",
        SshAuthorizedKeys: "String",
        SshPort: "Int",
        StorageConfigs: "Array",
        ResourcePoolId: "String",
        AutoSave: "Boolean",
        ServiceConfigs: "Array",
        ImageRegistryId: "String",
        ImageRepoId: "String",
        ImageSource: "String",
        ImageTagId: "String",
        CPUNum: "Int",
        EnableSSH: "Boolean",
        NotebookName: "String",
        SSHAuthorizedKeys: "String",
        RunOnCPU: "String",
        SSHPort: "Int",
        EnablePublicNetworkSSH: "Boolean",
      },
    },
    StopNotebook: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StopNotebook",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        NotebookId: "String",
      },
    },
    StartNotebook: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StartNotebook",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    GetWebIdeUrl: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetWebIdeUrl",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NotebookId: "String",
        ExpirationMinute: "String",
      },
    },
    DescribeNotebookEvents: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeNotebookEvents",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NotebookId: "String",
      },
    },
    DescribeNotebookLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeNotebookLog",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    StopNotebookSavingImage: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StopNotebookSavingImage",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NotebookId: "String",
      },
    },
  };
};
