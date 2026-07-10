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
      DescribeKnowledgeBaseModels: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeKnowledgeBaseModels"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          ModelType: "String"
        }
      },
      ActivateKnowledgeBaseService: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ActivateKnowledgeBaseService"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      RetrieveKnowledge: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "RetrieveKnowledge"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          Query: "String",
          RetrievalModel: "Object"
        }
      },
      DescribeChunk: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeChunk"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          DocumentId: "String"
        }
      },
      BatchDisplayStatus: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "BatchDisplayStatus"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          DocumentIds: "Array"
        }
      },
      DisplayStatus: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DisplayStatus"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          DocumentId: "String"
        }
      },
      IndexingStatus: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "IndexingStatus"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          Batch: "String"
        }
      },
      DeleteDocument: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DeleteDocument"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          DocumentId: "String"
        }
      },
      DescribeDocument: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeDocument"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          DocumentId: "String",
          Metadata: "String"
        }
      },
      DescribeDocuments: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeDocuments"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          Keyword: "String",
          Page: "Int",
          Limit: "Int"
        }
      },
      ImportDocuments: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ImportDocuments"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          Data: "Object",
          AddType: "String",
          Ks3Path: "Array"
        }
      },
      DeleteKnowledgeBase: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DeleteKnowledgeBase"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String"
        }
      },
      ModifyKnowledgeBase: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ModifyKnowledgeBase"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          Name: "String",
          IndexingTechnique: "String",
          EmbeddingModelProvider: "String",
          EmbeddingModel: "String",
          RetrievalModel: "Object",
          ComputeUnit: "Int"
        }
      },
      DescribeKnowledgeBase: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeKnowledgeBase"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String"
        }
      },
      DescribeKnowledgeBases: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeKnowledgeBases"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Page: "Int",
          Limit: "Int",
          Keyword: "String"
        }
      },
      CreateKnowledgeBase: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "CreateKnowledgeBase"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Name: "String",
          IndexingTechnique: "String",
          RetrievalModel: "Object",
          ComputeUnit: "Int",
          ProjectId: "String",
          ChargeType: "String"
        }
      },
      CreateMemorySdk: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "CreateMemorySdk"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          AgentId: "String",
          SessionId: "String",
          SceneId: "String",
          DataType: "String",
          Data: "Object",
          AgentUserId: "String",
          MemoryCollectionId: "String",
          Flush: "Boolean"
        }
      },
      QueryMemorySdk: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "QueryMemorySdk"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Query: "String",
          SceneId: "String",
          OccurredAfter: "Long",
          OccurredBefore: "Long",
          Mode: "String",
          ReturnCitations: "Boolean",
          Limit: "Int",
          SceneIds: "Array",
          MemoryCollectionId: "String",
          AgentUserId: "String"
        }
      },
      CreateMemoryCollection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "CreateMemoryCollection"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Name: "String",
          Description: "String",
          LongTermConfiguration: "Object",
          MemoryType: "String",
          ProjectId: "String",
          ChargeType: "String"
        }
      },
      GetMemoryCollection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetMemoryCollection"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          MemoryCollectionId: "String"
        }
      },
      ListMemoryCollections: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ListMemoryCollections"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          CreateTimeAfter: "Long",
          CreateTimeBefore: "Long",
          UpdateTimeAfter: "Long",
          UpdateTimeBefore: "Long",
          MemoryCollectionId: "String",
          Name: "String",
          NameKeyword: "String",
          Status: "String",
          Marker: "Long",
          MaxResults: "Long"
        }
      },
      DeleteMemoryCollection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DeleteMemoryCollection"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          MemoryCollectionId: "String"
        }
      },
      GetMemoryBaseService: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetMemoryBaseService"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      ActivateMemoryBaseService: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ActivateMemoryBaseService"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      UpdateMemoryCollection: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "UpdateMemoryCollection"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          MemoryCollectionId: "String",
          Description: "String",
          Name: "String",
          LongTermConfiguration: "Object"
        }
      },
      DeleteMcpServer: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DeleteMcpServer"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          McpServerId: "String"
        }
      },
      ModifyMcpServer: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ModifyMcpServer"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          McpServerId: "String",
          McpServerName: "String",
          Description: "String",
          Introduction: "String",
          OutboundAuthFieldValue: "String",
          HttpApiConfig: "String",
          HttpApiConfigUpdateType: "String"
        }
      },
      CreateMcpServer: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "CreateMcpServer"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          McpServerName: "String",
          McpServerNameEn: "String",
          Description: "String",
          Introduction: "String",
          ServiceProtocol: "String",
          BackendServiceUrl: "String",
          AllowCustomAuth: "Boolean",
          ServiceCustomHeaders: "String",
          OutboundAuthLocation: "String",
          OutboundAuthFieldName: "String",
          OutboundAuthFieldValue: "String",
          McpRuntimeConfig: "Object",
          HttpApiConfig: "String",
          McpType: "String"
        }
      },
      DescribeMcpServers: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeMcpServers"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          McpServerIds: "Array",
          NameKeyword: "String",
          Region: "String"
        }
      },
      DescribeMcpOfficialServers: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeMcpOfficialServers"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          McpServerIds: "Array",
          NameKeyword: "String",
          Region: "String"
        }
      },
      DeactivateMcpOfficialServer: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DeactivateMcpOfficialServer"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          McpServerId: "String"
        }
      },
      ActivateMcpOfficialServer: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ActivateMcpOfficialServer"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          McpServerId: "String",
          AuthFieldValue: "String"
        }
      },
      DescribeMcpSquares: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeMcpSquares"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          McpServerIds: "Array",
          NameKeyword: "String"
        }
      },
      GetMcpOfficialServerDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetMcpOfficialServerDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          McpServerId: "String"
        }
      },
      GetMcpServerDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetMcpServerDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          McpServerId: "String"
        }
      },
      GetMcpSquareDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetMcpSquareDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          McpServerId: "String"
        }
      },
      ListSessions: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ListSessions"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          MemoryCollectionId: "String",
          AgentUserId: "String",
          Query: "String",
          Page: "Int",
          PageSize: "Int",
          CreatedAfter: "Int",
          CreatedBefore: "Int"
        }
      },
      AddSession: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "AddSession"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      },
      QueryMemoryCollectionMetrics: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "QueryMemoryCollectionMetrics"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          MemoryCollectionId: "String",
          StartTime: "Long",
          EndTime: "Long"
        }
      },
      QuerySessionMemories: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "QuerySessionMemories"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          MemoryCollectionId: "String",
          SessionId: "String"
        }
      },
      RetrieveHistories: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "RetrieveHistories"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          Page: "Int",
          Limit: "Int"
        }
      },
      ReindexDocuments: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ReindexDocuments"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          DocumentIds: "Array"
        }
      },
      ModifyDocumentStatus: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "ModifyDocumentStatus"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          DocumentId: "String",
          Status: "String"
        }
      },
      GetApiDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetApiDetail"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ApiService: "String",
          ApiName: "String",
          ApiVersion: "String"
        }
      },
      GetApiOverview: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetApiOverview"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          ApiService: "String",
          ApiVersion: "String"
        }
      },
      GetProductList: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "GetProductList"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {}
      },
      DescribeMcpRuntimeMetrics: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeMcpRuntimeMetrics"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          McpServerId: "String",
          StartTime: "Long",
          EndTime: "Long",
          Interval: "Int"
        }
      },
      QueryMcpMetrics: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "QueryMcpMetrics"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          StartTime: "Long",
          EndTime: "Long",
          Interval: "Int",
          McpType: "String",
          McpServerId: "String"
        }
      },
      DescribeKnowledgeTokenMonitor: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeKnowledgeTokenMonitor"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          StartTime: "Long",
          EndTime: "Long",
          Granularity: "String"
        }
      },
      DescribeKnowledgeStorageMonitor: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeKnowledgeStorageMonitor"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          DatasetId: "String",
          StartTime: "Long",
          EndTime: "Long",
          Granularity: "String"
        }
      },
      DescribeMcpRuntimeLogs: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2025-11-14",
            Action: "DescribeMcpRuntimeLogs"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          McpServerId: "String",
          StartTime: "Long",
          EndTime: "Long",
          Keyword: "String",
          Page: "Int",
          Limit: "Int"
        }
      }
    });
  }
};