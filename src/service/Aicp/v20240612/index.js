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
        NotebookName: "String",
        Description: "String",
        ImageId: "String",
        QueueName: "String",
        GPUType: "String",
        GPUNumber: "Int",
        CPUNum: "Int",
        Memory: "Int",
        AccessType: "String",
        EnablePublicNetworkSsh: "Boolean",
        SshAuthorizedKeys: "String",
        StorageConfigs: "Array",
        ServiceConfigs: "Array",
        AutoSave: "Boolean",
        RunOnCPU: "String",
        EnableSSH: "String",
        SSHPort: "Int",
        SSHAuthorizedKeys: "String",
        EnablePublicNetworkSSH: "Boolean",
        AllocationId: "String",
        ImageTagId: "String",
        ImageSource: "String",
        ImageRepoId: "String",
        ImageRegistryId: "String",
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
        NotebookName: "String",
        Description: "String",
        ResourcePoolId: "String",
        QueueName: "String",
        GPUType: "String",
        GPUNumber: "Int",
        CPUNum: "Int",
        Memory: "Int",
        AccessType: "String",
        StorageConfigs: "Array",
        AutoSave: "Boolean",
        ServiceConfigs: "Array",
        ImageSource: "String",
        ImageId: "String",
        ImageRegistryId: "String",
        ImageRepoId: "String",
        ImageTagId: "String",
        EnableSSH: "Boolean",
        SSHAuthorizedKeys: "String",
        SSHPort: "Int",
        EnablePublicNetworkSSH: "Boolean",
        AllocationId: "String",
        RunOnCPU: "String",
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
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        NotebookId: "String",
      },
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
    CreateTrainJob: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
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
        QueueName: "String",
        Priority: "String",
        Command: "String",
        Framework: "String",
        ImageSource: "String",
        FrameworkReplicas: "Object",
        Envs: "Array",
        SupportTensorboard: "Boolean",
        ImageId: "String",
        ImageRegistryId: "String",
        ImageRepoId: "String",
        ImageTagId: "String",
        GPUType: "String",
        GPUNumber: "Int",
        CpuNum: "Int",
        Memory: "Int",
        StorageConfigs: "Array",
        AccessType: "String",
        MaxRuntime: "Int",
        SelfHealing: "Boolean",
        RunOnCpu: "Boolean",
      },
    },
    DescribeTrainJobEvents: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeTrainJobEvents",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ResourcePoolId: "String",
        TrainJobId: "String",
      },
    },
    StopTrainJob: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StopTrainJob",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TrainJobId: "String",
      },
    },
    DescribeTrainJob: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeTrainJob",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TrainJobId: "Filter",
        Filter: "Filter",
        Marker: "Int",
        MaxResults: "Int",
      },
    },
    StartTrainJob: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StartTrainJob",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TrainJobId: "String",
      },
    },
    DeleteTrainJob: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteTrainJob",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        TrainJobId: "String",
      },
    },
    ModifyTrainJob: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyTrainJob",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        TrainJobId: "String",
        Priority: "String",
      },
    },
    DescribeTrainJobPodLogs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeTrainJobPodLogs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ResourcePoolId: "String",
        TrainJobId: "String",
        PodName: "String",
        SinceSeconds: "Int",
        TailLines: "Int",
      },
    },
    DescribeTrainJobPods: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeTrainJobPods",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Marker: "String",
        MaxResults: "String",
        TrainJobId: "String",
        Filter: "Filter",
      },
    },
  };
};
