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
    CreateStorageConfig: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateStorageConfig",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        StorageConfigName: "String",
        Description: "String",
        Type: "String",
        MountPath: "String",
        KpfsInfo: "Object",
        Ks3Info: "Object",
        Users: "Array",
        Ak: "String",
        Sk: "String",
      },
    },
    ModifyStorageConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyStorageConfig",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        StorageConfigId: "String",
        StorageConfigName: "String",
        Description: "String",
        MountPath: "String",
        Ks3Info: "Object",
        Users: "Array",
        Ak: "String",
        Sk: "String",
      },
    },
    DescribeStorageConfigs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeStorageConfigs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StorageConfigId: "Filter",
        Filter: "Filter",
        PageSize: "Int",
        Page: "Int",
      },
    },
    DeleteStorageConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteStorageConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StorageConfigId: "String",
      },
    },
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
        Page: "Int",
        PageSize: "Int",
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
          "Content-Type": "application/json",
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
    CreateInference: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateInference",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InferenceName: "String",
        Description: "String",
        ResourcePoolId: "String",
        QueueName: "String",
        Replicas: "Int",
        AccessType: "String",
        DeploymentType: "String",
        Engine: "String",
        ModelName: "String",
        CmdOptions: "Array",
        ModelStorageEnabled: "Boolean",
        ModelStoragePath: "String",
        EntryPoint: "String",
        ImageSource: "String",
        ImageId: "String",
        ImageRegistryId: "String",
        ImageRepoId: "String",
        ImageTagId: "String",
        SubnetId: "String",
        Port: "Int",
        Env: "Array",
        GPUType: "String",
        GPUNum: "String",
        CPUNum: "Int",
        Memory: "Int",
        AutoScaleEnable: "Boolean",
        AutoScaleStrategy: "Object",
        RunOnCPU: "Boolean",
        Distributed: "Boolean",
        NodeNum: "Boolean",
        StorageConfigs: "Array",
      },
    },
    GetInferenceModels: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetInferenceModels",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetInferencePods: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetInferencePods",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "String",
        State: "String",
      },
    },
    GetInferenceLogs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetInferenceLogs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "String",
        PodName: "String",
        SinceSeconds: "Int",
        TailLines: "Int",
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
          "Content-Type": "application/x-www-form-urlencoded",
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
      paramsType: {
        NotebookId: "String",
        SinceSeconds: "Int",
        TailLines: "String",
      },
    },
    GetInferenceAutoScaleStrategy: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetInferenceAutoScaleStrategy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "String",
      },
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
        ExcludeTypes: "Filter",
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
        LastKey: "String",
        MaxResults: "Int",
        ModelKeyword: "String",
        Keyword: "String",
        GroupBy: "String",
        ReasoningType: "String",
        Marker: "Int",
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
    DescribeInferences: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeInferences",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "Filter",
        Filter: "Filter",
        PageSize: "Int",
        Page: "Int",
      },
    },
    SetInferenceAutoScaleStrategy: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "SetInferenceAutoScaleStrategy",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InferenceId: "String",
        AutoScaleEnable: "Boolean",
        AutoScaleStrategy: "Object",
      },
    },
    DeleteInference: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteInference",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "String",
      },
    },
    StopInference: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StopInference",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "String",
      },
    },
    GetInferenceDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetInferenceDetail",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "String",
      },
    },
    StartInference: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "StartInference",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        InferenceId: "String",
      },
    },
    ModifyInference: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyInference",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InferenceId: "String",
        InferenceName: "String",
        Description: "String",
        EntryPoint: "String",
        ImageSource: "String",
        ImageId: "String",
        ImageRegistryId: "String",
        ImageRepoId: "String",
        ImageTagId: "String",
        Env: "Array",
        CmdOptions: "Array",
        HostNetworkEnabled: "Boolean",
      },
    },
    SetInferenceReplicas: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "SetInferenceReplicas",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InferenceId: "String",
        Replicas: "Int",
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
    EnableKpfsComponent: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "EnableKpfsComponent",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ResourcePoolId: "String",
        FileSystemId: "String",
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
    DescribeResourcePoolInstanceTasks: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeResourcePoolInstanceTasks",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ResourcePoolId: "String",
        InstanceId: "String",
        TaskType: "String",
        PageSize: "Int",
        Page: "Int",
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
    DescribeQueues: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeQueues",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        QueueId: "Filter",
        Page: "Int",
        PageSize: "Int",
        Filter: "Filter",
      },
    },
    CreateQueue: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "CreateQueue",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ResourcePoolId: "String",
        QueueName: "String",
        Capability: "Object",
        AllowBorrowing: "Boolean",
        Description: "String",
        AccessList: "Array",
        WorkloadType: "Array",
      },
    },
    ModifyQueue: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "ModifyQueue",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        QueueId: "String",
        Capability: "Object",
        AllowBorrowing: "Boolean",
        Description: "String",
        AccessList: "Array",
        WorkloadType: "Array",
      },
    },
    DeleteQueue: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DeleteQueue",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        QueueId: "String",
      },
    },
    AddQueueAccessUser: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "AddQueueAccessUser",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        QueueId: "String",
        SubAccountId: "String",
        Permission: "String",
      },
    },
    RemoveQueueAccessUser: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "RemoveQueueAccessUser",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        QueueId: "String",
        SubAccountId: "String",
      },
    },
    DescribeModelTypes: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DescribeModelTypes",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    EnableEndpointQuotaLimit: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "EnableEndpointQuotaLimit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointId: "String",
        QuotaLimitCycle: "String",
        CustomCycle: "Int",
        QuotaLimitAmount: "Long",
      },
    },
    DisableEndpointQuotaLimit: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "DisableEndpointQuotaLimit",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        EndpointId: "String",
        QuotaLimitCycle: "String",
        CustomCycle: "String",
        QuotaLimitAmount: "String",
      },
    },
    GetQueueMember: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2024-06-12",
          Action: "GetQueueMember",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        QueueId: "String",
        SubAccountId: "String",
        Page: "Int",
        PageSize: "Int",
      },
    },
  };
};
