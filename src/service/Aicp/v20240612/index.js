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
        GPUNumber: "String",
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
        GPUNumber: "String",
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
    CreateImage: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateImage",
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
      },
    },
    DeleteImage: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteImage",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageId: "String",
      },
    },
    ModifyImage: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyImage",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ImageId: "String",
        ImageName: "String",
        ImagePermission: "String",
      },
    },
    DescribeImages: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeImages",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Page: "Int",
        PageSize: "Int",
        ImageSource: "String",
        ImageStatus: "String",
        ImageType: "String",
        ApplicationScenario: "String",
        ImageId: "Filter",
        ImageName: "String",
        Filter: "Filter",
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
    EnableApikeyStatus: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "EnableApikeyStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        KeyId: "String",
        Status: "String",
      },
    },
    ModifyApikey: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyApikey",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        KeyId: "String",
        Name: "String",
        Description: "String",
        AssociatedModelIds: "Array",
        AllAssociatedModel: "Boolean",
      },
    },
    ActivateApiService: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ActivateApiService",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Status: "String",
      },
    },
    DeleteApikey: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteApikey",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        KeyId: "String",
      },
    },
    DescribeModels: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeModels",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Marker: "Int",
        MaxResults: "Int",
        ModelCategory: "Filter",
        Provider: "Filter",
        ContextLength: "Filter",
        ModelName: "String",
      },
    },
    CreateApikey: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateApikey",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Name: "String",
        Description: "String",
        ProjectId: "Long",
        AssociatedModelIds: "Array",
        AllAssociatedModel: "Boolean",
        AllowedIps: "Array",
      },
    },
    GetModelDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetModelDetail",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ModelId: "String",
      },
    },
    DescribeApikeys: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeApikeys",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Marker: "Int",
        MaxResults: "Int",
        AssociatedModelId: "Filter",
        Status: "Filter",
        Namekeyword: "String",
        DefaultKey: "Boolean",
        KeyId: "Filter",
      },
    },
    QueryTokenData: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "QueryTokenData",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StartTimestamp: "Long",
        EndTimestamp: "Long",
        MaxResults: "Int",
        Keyword: "String",
        GroupBy: "String",
        ReasoningType: "String",
        Marker: "Int",
        IsGlobalServer: "Boolean",
        ModelName: "String",
      },
    },
    DisableApikeyStatus: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DisableApikeyStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        KeyId: "String",
        Status: "String",
      },
    },
    GetApiService: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetApiService",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetBatchInferenceJobsFinalResultDownloadUrl: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetBatchInferenceJobsFinalResultDownloadUrl",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BatchId: "String",
      },
    },
    DescribeInferenceJobsKs3AuthInfo: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeInferenceJobsKs3AuthInfo",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    StopBatchInferenceJob: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StopBatchInferenceJob",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BatchId: "String",
      },
    },
    CreateBatchInferenceJob: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateBatchInferenceJob",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        JobName: "String",
        JobDesc: "String",
        ApikeyId: "String",
        Model: "String",
        ExecuteTimeoutMs: "Long",
        InputDataType: "String",
        Ks3Region: "String",
        Ks3Ak: "String",
        Ks3Sk: "String",
        InBucket: "String",
        OutBucket: "String",
        InObjectName: "String",
        OutObjectName: "String",
      },
    },
    ModifyBatchInferenceJob: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyBatchInferenceJob",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BatchId: "String",
        JobName: "String",
        JobDesc: "String",
      },
    },
    DescribeBatchInferenceJobs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeBatchInferenceJobs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Marker: "Int",
        MaxResults: "Int",
        JobNameKeyword: "String",
        Status: "Filter",
        BatchId: "String",
      },
    },
    DeleteBatchInferenceJob: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteBatchInferenceJob",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        BatchId: "String",
      },
    },
    EnableModels: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "EnableModels",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelIds: "Array",
      },
    },
    DescribeModelQuotas: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeModelQuotas",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Marker: "Int",
        MaxResults: "Int",
        Keyword: "String",
        Type: "String",
      },
    },
    DisableModels: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DisableModels",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelIds: "Array",
      },
    },
    EnableOverFreeLimit: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "EnableOverFreeLimit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelIds: "Array",
      },
    },
    DisableOverFreeLimit: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DisableOverFreeLimit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelIds: "Array",
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
        RestartPolicy: "String",
        Envs: "Array",
        SupportTensorboard: "Boolean",
        ImageId: "String",
        ImageRegistryId: "String",
        ImageRepoId: "String",
        ImageTagId: "String",
        GPUType: "String",
        GPUNumber: "Int",
        CPUNum: "Int",
        Memory: "Int",
        StorageConfigs: "Array",
        AccessType: "String",
        MaxRuntime: "Int",
        SelfHealing: "Boolean",
        RunOnCPU: "Boolean",
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
    DescribeResourcePools: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeResourcePools",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Sort: "String",
        Page: "Int",
        PageSize: "Int",
        ResourcePoolName: "String",
        Component: "String",
        ResourcePoolId: "Filter",
        Filter: "Filter",
      },
    },
    DescribeResourcePoolInstances: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeResourcePoolInstances",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ResourcePoolId: "String",
        PageSize: "Int",
        Page: "Int",
        InstanceName: "String",
        InstanceId: "Filter",
        ProjectId: "Filter",
        Filter: "Filter",
      },
    },
    CreateInferenceEndpoint: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateInferenceEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointName: "String",
        ProjectId: "String",
        ModelName: "String",
        "RateLimit ": "Object",
        ModelId: "String",
      },
    },
    DescribeInferenceEndpoints: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeInferenceEndpoints",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        EndpointId: "Filter",
        EndpointName: "String",
        Marker: "Int",
        MaxResults: "Int",
        ProjectId: "Filter",
        Filter: "Array",
      },
    },
    EnableEndpointRateLimit: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "EnableEndpointRateLimit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointId: "String",
        RateLimit: "Object",
      },
    },
    UpdateInferenceEndpoint: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "UpdateInferenceEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointName: "String",
        ProjectId: "String",
        ModelName: "String",
        "RateLimit ": "Object",
        EndpointId: "String",
      },
    },
    StartInferenceEndpoint: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StartInferenceEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointId: "String",
      },
    },
    StopInferenceEndpoint: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StopInferenceEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointId: "String",
      },
    },
    DeleteInferenceEndpoint: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteInferenceEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointId: "String",
      },
    },
    DisableEndpointRateLimit: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DisableEndpointRateLimit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointId: "String",
      },
    },
    SetKcrPersonalToken: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "SetKcrPersonalToken",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        UserName: "String",
        Password: "String",
      },
    },
  };
};
