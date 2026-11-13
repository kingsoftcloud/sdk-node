"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      protocol: "http://",
      endpoint: "aicp.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "aicp"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateResourcePool: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateResourcePool"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ResourcePoolName: "String",
          Description: "String",
          VpcId: "String",
          ResourcePoolType: "String",
          ClusterId: "String",
          EnableKPFSPerformance: "Boolean",
          FileSystemId: "String",
          EnableKlog: "String",
          LogProjectName: "String",
          Overallocate: "Boolean",
          Components: "Array",
          EnableVolume: "Boolean",
          VolumeChargeType: "String",
          ProjectId: "String",
          VolumeQuota: "Int"
        }
      },
      CreateStorageConfig: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateStorageConfig"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          StorageConfigName: "String",
          Description: "String",
          Type: "String",
          MountPath: "String",
          KpfsInfo: "Object",
          Ks3Info: "Object",
          Users: "Array",
          DatasetPermission: "String",
          SharedGroupList: "Array",
          Prefetch: "Boolean",
          Ak: "String",
          Sk: "String"
        }
      },
      ModifyStorageConfig: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyStorageConfig"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          StorageConfigId: "String",
          StorageConfigName: "String",
          Description: "String",
          MountPath: "String",
          Ks3Info: "Object",
          Users: "Array",
          DatasetPermission: "String",
          SharedGroupList: "Array",
          Prefetch: "Boolean",
          Ak: "String",
          Sk: "String"
        }
      },
      DescribeStorageConfigs: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeStorageConfigs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StorageConfigId: "Filter",
          Filter: "Filter",
          PageSize: "Int",
          Page: "Int"
        }
      },
      DeleteStorageConfig: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteStorageConfig"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StorageConfigId: "String"
        }
      },
      SaveNotebookImage: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "SaveNotebookImage"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
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
          ImageDomain: "String"
        }
      },
      ModifyNotebook: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyNotebook"
          },
          headers: {
            "Content-Type": "application/json"
          }
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
          AutoSaveConfig: "Object",
          Envs: "Array"
        }
      },
      DeleteNotebook: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteNotebook"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String",
          VolumeReclaimPolicy: "String"
        }
      },
      DescribeNotebooks: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeNotebooks"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "Filter",
          Name: "String",
          Page: "Int",
          PageSize: "Int",
          Filter: "Filter",
          QueueId: "String",
          EnableVolume: "Boolean"
        }
      },
      CreateNotebook: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateNotebook"
          },
          headers: {
            "Content-Type": "application/json"
          }
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
          AutoSaveConfig: "Object",
          EnableVolume: "Boolean",
          VolumeConfig: "Object",
          Envs: "Array"
        }
      },
      EnableKlog: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "EnableKlog"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          EnableKlog: "Boolean",
          LogProjectName: "String"
        }
      },
      CreateImage: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateImage"
          },
          headers: {
            "Content-Type": "application/json"
          }
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
          AccessList: "Array",
          SharedGroupList: "Array"
        }
      },
      DeleteImage: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteImage"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ImageId: "String"
        }
      },
      ModifyImage: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyImage"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ImageId: "String",
          ImageName: "String",
          ImagePermission: "String",
          AccessList: "Array",
          SharedGroupList: "Array"
        }
      },
      DescribeImages: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeImages"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
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
          Filter: "Filter"
        }
      },
      CreateInference: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateInference"
          },
          headers: {
            "Content-Type": "application/json"
          }
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
          StorageConfigs: "Array"
        }
      },
      GetInferenceModels: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetInferenceModels"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      GetInferenceLogs: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetInferenceLogs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "String",
          PodName: "String",
          SinceSeconds: "Int",
          TailLines: "Int"
        }
      },
      StopNotebook: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StopNotebook"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String"
        }
      },
      StartNotebook: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StartNotebook"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String"
        }
      },
      GetWebIdeUrl: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetWebIdeUrl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String",
          ExpirationMinute: "String"
        }
      },
      DescribeNotebookEvents: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeNotebookEvents"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String",
          Sort: "String",
          SortKey: "String"
        }
      },
      DescribeNotebookLog: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeNotebookLog"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String",
          SinceSeconds: "Int",
          TailLines: "String"
        }
      },
      ModifyComponents: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyComponents"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          Components: "Array"
        }
      },
      GetInferenceAutoScaleStrategy: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetInferenceAutoScaleStrategy"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "String"
        }
      },
      ModifyTerminatePolicy: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyTerminatePolicy"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Name: "String",
          InstanceIds: "Array",
          UseRatePolicy: "Object",
          TerminatePolicyId: "String"
        }
      },
      DescribeTerminatePolicy: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeTerminatePolicy"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          QueueId: "String",
          TerminatePolicyId: "Filter",
          CreateUser: "String",
          Filter: "Filter",
          PageSize: "Int",
          Page: "Int"
        }
      },
      CreateTerminatePolicy: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateTerminatePolicy"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Name: "String",
          QueueId: "String",
          TerminatePolicyType: "String",
          TerminatePolicyTarget: "String",
          InstanceIds: "Array",
          UseRatePolicy: "Object"
        }
      },
      DeleteTerminatePolicy: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteTerminatePolicy"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TerminatePolicyId: "String"
        }
      },
      StopNotebookSavingImage: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StopNotebookSavingImage"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String"
        }
      },
      EnableApikeyStatus: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "EnableApikeyStatus"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          KeyId: "String",
          Status: "String"
        }
      },
      ModifyApikey: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyApikey"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          KeyId: "String",
          Name: "String",
          Description: "String",
          AssociatedModelIds: "Array",
          AllAssociatedModel: "Boolean",
          AllowEndpoints: "Array",
          AllAssociatedProjectResources: "Boolean",
          AllAssociatedEndpoint: "Boolean",
          LowPriceModels: "Array",
          HighPriceModels: "Array",
          OffpeakModels: "Array",
          CostQuotas: "Array"
        }
      },
      ActivateApiService: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ActivateApiService"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      DeleteApikey: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteApikey"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          KeyId: "String"
        }
      },
      DescribeModels: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeModels"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Marker: "Int",
          MaxResults: "Int",
          ModelCategory: "Filter",
          Provider: "Filter",
          ContextLength: "Filter",
          ModelName: "String",
          Capabilities: "Filter",
          Status: "Int",
          ContextLengthRanges: "Filter"
        }
      },
      CreateApikey: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateApikey"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Name: "String",
          Description: "String",
          ProjectId: "Long",
          AssociatedModelIds: "Array",
          AllAssociatedModel: "Boolean",
          AllowedIps: "Array",
          AllowEndpoints: "Array",
          AllAssociatedEndpoint: "Boolean",
          AllAssociatedProjectResources: "Boolean",
          LowPriceModels: "Array",
          HighPriceModels: "Array",
          OffpeakModels: "Array",
          CostQuotas: "Array"
        }
      },
      GetModelDetail: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetModelDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ModelId: "String"
        }
      },
      DescribeApikeys: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeApikeys"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Marker: "Int",
          MaxResults: "Int",
          AssociatedModelId: "Filter",
          Status: "Filter",
          Namekeyword: "String",
          DefaultKey: "Boolean",
          SelfCreated: "Boolean",
          SortOrder: "String"
        }
      },
      GetApiService: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetApiService"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      GetBatchInferenceJobsFinalResultDownloadUrl: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetBatchInferenceJobsFinalResultDownloadUrl"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          BatchId: "String"
        }
      },
      DescribeInferenceJobsKs3AuthInfo: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeInferenceJobsKs3AuthInfo"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      StopBatchInferenceJob: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StopBatchInferenceJob"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      CreateBatchInferenceJob: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateBatchInferenceJob"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      ModifyBatchInferenceJob: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyBatchInferenceJob"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          BatchId: "String",
          JobName: "String",
          JobDesc: "String"
        }
      },
      DescribeBatchInferenceJobs: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeBatchInferenceJobs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Marker: "Int",
          MaxResults: "Int",
          JobNameKeyword: "String",
          Status: "Filter",
          BatchId: "String"
        }
      },
      DeleteBatchInferenceJob: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteBatchInferenceJob"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      EnableModels: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "EnableModels"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      DescribeModelQuotas: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeModelQuotas"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Marker: "Int",
          MaxResults: "Int",
          Keyword: "String",
          Type: "String"
        }
      },
      DisableModels: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DisableModels"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ModelIds: "Array"
        }
      },
      EnableOverFreeLimit: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "EnableOverFreeLimit"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ModelIds: "Array"
        }
      },
      DescribeTrainJobEvents: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeTrainJobEvents"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          TrainJobId: "String"
        }
      },
      StopTrainJob: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StopTrainJob"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TrainJobId: "String"
        }
      },
      StartTrainJob: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StartTrainJob"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TrainJobId: "String"
        }
      },
      DeleteTrainJob: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteTrainJob"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TrainJobId: "String"
        }
      },
      ModifyTrainJob: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyTrainJob"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          TrainJobId: "String",
          Priority: "String",
          HoldingTimeMinutes: "Int"
        }
      },
      DescribeTrainJobPodLogs: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeTrainJobPodLogs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          TrainJobId: "String",
          PodName: "String",
          SinceSeconds: "Int",
          TailLines: "Int"
        }
      },
      DescribeTrainJobPods: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeTrainJobPods"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Marker: "String",
          MaxResults: "String",
          TrainJobId: "String",
          Filter: "Filter"
        }
      },
      DescribeInferences: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeInferences"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "Filter",
          Filter: "Filter",
          PageSize: "Int",
          Page: "Int"
        }
      },
      SetInferenceAutoScaleStrategy: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "SetInferenceAutoScaleStrategy"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          InferenceId: "String",
          AutoScaleEnable: "Boolean",
          AutoScaleStrategy: "Object"
        }
      },
      DeleteInference: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteInference"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "String"
        }
      },
      StopInference: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StopInference"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "String"
        }
      },
      GetInferenceDetail: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetInferenceDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "String"
        }
      },
      StartInference: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StartInference"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "String"
        }
      },
      ModifyInference: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyInference"
          },
          headers: {
            "Content-Type": "application/json"
          }
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
          HostNetworkEnabled: "Boolean"
        }
      },
      SetInferenceReplicas: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "SetInferenceReplicas"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          InferenceId: "String",
          Replicas: "Int"
        }
      },
      DescribeResourcePools: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeResourcePools"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Sort: "String",
          Page: "Int",
          PageSize: "Int",
          ResourcePoolName: "String",
          Component: "String",
          ResourcePoolId: "Filter",
          Filter: "Filter",
          EnableVolume: "Boolean"
        }
      },
      DescribeResourcePoolInstances: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeResourcePoolInstances"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          PageSize: "Int",
          Page: "Int",
          InstanceName: "String",
          InstanceId: "Filter",
          ProjectId: "Filter",
          Filter: "Filter"
        }
      },
      EnableKpfsComponent: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "EnableKpfsComponent"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          FileSystemId: "String"
        }
      },
      CreateInferenceEndpoint: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateInferenceEndpoint"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointName: "String",
          ProjectId: "String",
          ModelName: "String",
          "RateLimit ": "Object",
          ModelId: "String",
          QuotaLimit: "Object"
        }
      },
      DescribeInferenceEndpoints: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeInferenceEndpoints"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          EndpointId: "Filter",
          EndpointName: "String",
          Marker: "Int",
          MaxResults: "Int",
          ProjectId: "Filter",
          Filter: "Array"
        }
      },
      EnableEndpointRateLimit: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "EnableEndpointRateLimit"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointId: "String",
          RateLimit: "Object"
        }
      },
      StartInferenceEndpoint: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StartInferenceEndpoint"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointId: "String"
        }
      },
      StopInferenceEndpoint: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "StopInferenceEndpoint"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointId: "String"
        }
      },
      DeleteInferenceEndpoint: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteInferenceEndpoint"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointId: "String"
        }
      },
      DisableEndpointRateLimit: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DisableEndpointRateLimit"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointId: "String"
        }
      },
      DescribeResourcePoolInstanceTasks: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeResourcePoolInstanceTasks"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          InstanceId: "String",
          TaskType: "String",
          PageSize: "Int",
          Page: "Int",
          UseIdleResource: "Boolean"
        }
      },
      SetKcrPersonalToken: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "SetKcrPersonalToken"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          UserName: "String",
          Password: "String"
        }
      },
      DescribeQueues: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeQueues"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          QueueId: "Filter",
          Page: "Int",
          PageSize: "Int",
          Filter: "Filter"
        }
      },
      CreateQueue: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateQueue"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          QueueName: "String",
          QueueType: "String",
          NodeSelectType: "String",
          Capability: "Object",
          NodeSpec: "Array",
          AllowBorrowing: "Boolean",
          Description: "String",
          AccessList: "Array",
          SharedGroupList: "Array",
          WorkloadType: "Array",
          ResourceReservation: "Object"
        }
      },
      ModifyQueue: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyQueue"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          QueueId: "String",
          Capability: "Object",
          AllowBorrowing: "Boolean",
          Description: "String",
          AccessList: "Array",
          SharedGroupList: "Array",
          WorkloadType: "Array",
          NodeSpec: "Array",
          NodeSelectType: "String",
          ResourceReservation: "Object"
        }
      },
      DeleteQueue: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteQueue"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          QueueId: "String"
        }
      },
      AddQueueAccessUser: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "AddQueueAccessUser"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          QueueId: "String",
          SubAccountId: "String",
          Permission: "String"
        }
      },
      RemoveQueueAccessUser: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RemoveQueueAccessUser"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          QueueId: "String",
          SubAccountId: "String"
        }
      },
      CreateAgentProduct: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateAgentProduct"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Name: "String",
          Description: "String",
          ClientToken: "String",
          Framework: "String",
          DeploymentType: "String",
          CodeConfig: "Object",
          ContainerConfig: "Object",
          Resource: "Object",
          Scaling: "Object",
          Storage: "Object",
          KS3MountConfig: "Object",
          SessionAffinity: "Object",
          Network: "Object",
          Access: "Object",
          Advanced: "Object",
          ComponentConfig: "Object",
          UiConfig: "Object",
          DeployMode: "String",
          MemoryConfig: "Object",
          AutoPay: "Boolean"
        }
      },
      ListAgents: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListAgents"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Page: "Int",
          PageSize: "Int",
          Name: "String",
          Id: "String",
          Status: "String",
          Framework: "String"
        }
      },
      GetAgent: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetAgent"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String"
        }
      },
      UpdateAgent: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "UpdateAgent"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DeleteAgent: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteAgent"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String"
        }
      },
      ListVersions: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListVersions"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String",
          Page: "Int",
          PageSize: "Int"
        }
      },
      RollbackVersion: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RollbackVersion"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String",
          TargetVersionId: "String",
          TargetTag: "String"
        }
      },
      RunAgent: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RunAgent"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String",
          Messages: "Array",
          SessionId: "String",
          Model: "String",
          Stream: "Boolean",
          Background: "Boolean",
          ApiFormat: "String",
          ResponsesInput: "String",
          PreviousResponseId: "String",
          InvocationId: "String"
        }
      },
      DescribeModelTypes: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeModelTypes"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      EnableEndpointQuotaLimit: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "EnableEndpointQuotaLimit"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointId: "String",
          QuotaLimitCycle: "String",
          CustomCycle: "Int",
          QuotaLimitAmount: "Long"
        }
      },
      DisableEndpointQuotaLimit: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DisableEndpointQuotaLimit"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          EndpointId: "String",
          QuotaLimitCycle: "String",
          CustomCycle: "String",
          QuotaLimitAmount: "String"
        }
      },
      GetQueueMember: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetQueueMember"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          QueueId: "String",
          SubAccountId: "String",
          Page: "Int",
          PageSize: "Int"
        }
      },
      DescribeInferencePods: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeInferencePods"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          InferenceId: "String",
          Filter: "Filter",
          Page: "Int",
          PageSize: "Int"
        }
      },
      CreateSession: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateSession"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Tags: "Object",
          AgentId: "String",
          SessionId: "String",
          ExpiresHours: "Int"
        }
      },
      GetSession: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetSession"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SessionId: "String",
          Id: "String"
        }
      },
      ListSessions: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListSessions"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TagFilters: "Object",
          TagMatch: "String",
          AgentId: "String",
          Page: "Int",
          PageSize: "Int"
        }
      },
      DeleteSession: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteSession"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SessionId: "String",
          Id: "String"
        }
      },
      ListSkillVersions: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListSkillVersions"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillId: "String",
          PageNumber: "Int",
          PageSize: "Int"
        }
      },
      GetSkill: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetSkill"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillId: "String"
        }
      },
      ListSkills: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListSkills"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillId: "String",
          Name: "String",
          Status: "String",
          PageNumber: "Int",
          PageSize: "Int"
        }
      },
      ListSkillSpaces: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListSkillSpaces"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillspaceId: "String",
          Name: "String",
          PageNumber: "Int",
          PageSize: "Int"
        }
      },
      ListSkillsBySkillSpace: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListSkillsBySkillSpace"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillspaceId: "String",
          PageNumber: "Int",
          PageSize: "Int"
        }
      },
      CreateSkill: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateSkill"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SourceType: "String",
          SourceUrl: "String",
          SkillSpaces: "Array"
        }
      },
      CreateSkillVersion: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateSkillVersion"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SourceType: "String",
          SourceUrl: "String",
          SkillSpaces: "Array"
        }
      },
      GetSkillVersionTree: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetSkillVersionTree"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      GetSkillUploadUrl: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetSkillUploadUrl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          FileName: "String",
          SkillName: "String"
        }
      },
      DeleteSkillVersion: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteSkillVersion"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SkillId: "String",
          VersionId: "String"
        }
      },
      UpdateSkill: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "UpdateSkill"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SkillId: "String",
          Name: "String",
          Description: "String"
        }
      },
      DeleteSkill: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteSkill"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SkillId: "String"
        }
      },
      UpdateSkillSpaceSkillVersion: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "UpdateSkillSpaceSkillVersion"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SpaceId: "String",
          SkillId: "String",
          VersionName: "String"
        }
      },
      RemoveSkillFromSpace: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RemoveSkillFromSpace"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SpaceId: "String",
          SkillId: "String"
        }
      },
      DeleteSkillSpace: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteSkillSpace"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillSpaceId: "String"
        }
      },
      GetSkillSpace: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetSkillSpace"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          SkillSpaceId: "String"
        }
      },
      CreateSkillSpace: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateSkillSpace"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          Name: "String",
          Description: "String",
          Skills: "Array"
        }
      },
      ModifyResourcePool: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyResourcePool"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          ResourcePoolName: "String",
          Overallocate: "Boolean"
        }
      },
      GetSkillDownloadUrl: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetSkillDownloadUrl"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillId: "String",
          VersionId: "String"
        }
      },
      DescribeResourcePoolInstanceSpecs: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeResourcePoolInstanceSpecs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ResourcePoolId: "String",
          GPUModel: "String",
          OnlyCPU: "Boolean"
        }
      },
      AddSkillsToSkillSpace: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "AddSkillsToSkillSpace"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          SkillSpaceId: "String",
          Skills: "Object"
        }
      },
      DescribeInferenceAndPodEvents: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeInferenceAndPodEvents"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          InferenceId: "String",
          PodNames: "Array",
          SortKey: "String",
          Sort: "String"
        }
      },
      DescribeTrainJobAndPodEvents: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeTrainJobAndPodEvents"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          TrainJobId: "String",
          PodNames: "Array",
          SortKey: "String",
          Sort: "String"
        }
      },
      DescribeTerminateStopRecords: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeTerminateStopRecords"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          QueueId: "String",
          TerminatePolicyIds: "Array",
          NotebookIds: "Array",
          StartTime: "String",
          EndTime: "String",
          Page: "Int",
          PageSize: "Int"
        }
      },
      CreateAccessGroup: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateAccessGroup"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          AccessGroupName: "String",
          AccessGroupDescription: "String",
          Users: "Array"
        }
      },
      ModifyAccessGroup: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyAccessGroup"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          AccessGroupId: "String",
          AccessGroupName: "String",
          AccessGroupDescription: "String",
          Users: "Array"
        }
      },
      DescribeAccessGroups: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeAccessGroups"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AccessGroupId: "Filter",
          Filter: "Filter",
          Page: "Int",
          PageSize: "Int"
        }
      },
      DescribeAccessGroupAssociatedPermission: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeAccessGroupAssociatedPermission"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AccessGroupId: "String",
          ResourceType: "String"
        }
      },
      DeleteAccessGroup: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteAccessGroup"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AccessGroupId: "String"
        }
      },
      AddAccessGroupMembers: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "AddAccessGroupMembers"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          AccessGroupId: "String",
          Users: "Array"
        }
      },
      RemoveAccessGroupMembers: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RemoveAccessGroupMembers"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          AccessGroupId: "String",
          UserIds: "Array"
        }
      },
      ModifyAccessGroupMemberRole: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyAccessGroupMemberRole"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AccessGroupId: "String",
          UserId: "String",
          Permission: "String"
        }
      },
      DeleteAccessGroupAssociatedPermission: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteAccessGroupAssociatedPermission"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AccessGroupId: "String",
          AssociatedResourceId: "String"
        }
      },
      GetAccountBillRules: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetAccountBillRules"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      ResumeRun: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ResumeRun"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String",
          SessionId: "String",
          RunId: "String",
          CheckpointId: "String",
          ResumeAttemptId: "String",
          InvocationId: "String",
          Stream: "Boolean",
          Background: "Boolean",
          Model: "String",
          ResumeInstructionEnabled: "Boolean",
          ResumeInstruction: "String"
        }
      },
      ListSessionMessages: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListSessionMessages"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String",
          SessionId: "String",
          AfterSeqId: "Int",
          BeforeSeqId: "Int",
          CursorSource: "String",
          HistoryEpoch: "String",
          SnapshotSeqId: "Int",
          Limit: "Int",
          IncludeReasoning: "Boolean",
          IncludeToolEvents: "Boolean",
          IncludeAttachments: "Boolean"
        }
      },
      CancelRun: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CancelRun"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          AgentId: "String",
          SessionId: "String",
          InvocationId: "String",
          ScopeId: "String",
          ClientToken: "String"
        }
      },
      CreateUsageDownloadTask: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateUsageDownloadTask"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          StartTimestamp: "Long",
          EndTimestamp: "Long",
          Filter: "Object"
        }
      },
      GetUsageDownloadTask: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetUsageDownloadTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TaskId: "String"
        }
      },
      AddStorageConfigAccess: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "AddStorageConfigAccess"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          StorageConfigId: "String",
          KsyunUserId: "String",
          SharedGroupId: "String",
          Permission: "String"
        }
      },
      ModifyStorageConfigAccessRole: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyStorageConfigAccessRole"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          StorageConfigId: "String",
          KsyunUserId: "String",
          SharedGroupId: "String",
          Permission: "String"
        }
      },
      RemoveStorageConfigAccess: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RemoveStorageConfigAccess"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          StorageConfigId: "String",
          KsyunUserId: "String",
          SharedGroupId: "String"
        }
      },
      CheckKlogServiceStatus: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CheckKlogServiceStatus"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      CreateLogPoolConfig: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "CreateLogPoolConfig"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ProjectName: "String",
          LogPoolName: "String",
          ModelName: "String",
          EndpointId: "String",
          Region: "String"
        }
      },
      DeleteLogPoolConfig: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DeleteLogPoolConfig"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ProjectName: "String",
          LogPoolName: "String",
          ModelName: "String",
          EndpointId: "String",
          Region: "String"
        }
      },
      AddImageAccess: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "AddImageAccess"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ImageId: "String",
          KsyunUserId: "String",
          SharedGroupId: "String",
          Permission: "String"
        }
      },
      ModifyImageAccessRole: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ModifyImageAccessRole"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ImageId: "String",
          KsyunUserId: "String",
          SharedGroupId: "String",
          Permission: "String"
        }
      },
      RemoveImageAccess: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RemoveImageAccess"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ImageId: "String",
          KsyunUserId: "String",
          SharedGroupId: "String"
        }
      },
      RemovePhysicalQueueInstances: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "RemovePhysicalQueueInstances"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          QueueId: "String",
          InstanceIds: "Array"
        }
      },
      DescribeNotebookTimeLine: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeNotebookTimeLine"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          NotebookId: "String"
        }
      },
      DescribeTrainJobTimeLine: {
        url: "/",
        method: "GET",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "DescribeTrainJobTimeLine"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TrainJobId: "String"
        }
      },
      GetComponentObservabilityOverview: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "GetComponentObservabilityOverview"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ComponentType: "String",
          StartTime: "Int",
          EndTime: "Int",
          IntervalSeconds: "Int"
        }
      },
      ListComponentStats: {
        url: "/",
        method: "POST",
        responseMode: 0,
        config: {
          query: {
            Version: "2024-06-12",
            Action: "ListComponentStats"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      }
    });
  }
};