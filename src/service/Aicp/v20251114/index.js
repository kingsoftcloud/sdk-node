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
    DescribeKnowledgeBaseModels: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DescribeKnowledgeBaseModels",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ModelType: "String",
      },
    },
    ActivateKnowledgeBaseService: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "ActivateKnowledgeBaseService",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {},
    },
    RetrieveKnowledge: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "RetrieveKnowledge",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        Query: "String",
        RetrievalModel: "Object",
      },
    },
    DescribeChunk: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DescribeChunk",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        DocumentId: "String",
      },
    },
    BatchDisplayStatus: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "BatchDisplayStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        DocumentIds: "Array",
      },
    },
    DisplayStatus: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DisplayStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        DocumentId: "String",
      },
    },
    IndexingStatus: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "IndexingStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        Batch: "String",
      },
    },
    DeleteDocument: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DeleteDocument",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        DocumentId: "String",
      },
    },
    DescribeDocument: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DescribeDocument",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        DocumentId: "String",
        Metadata: "String",
      },
    },
    DescribeDocuments: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DescribeDocuments",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        Keyword: "String",
        Page: "Int",
        Limit: "Int",
      },
    },
    ImportDocuments: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "ImportDocuments",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        Data: "Object",
        AddType: "String",
        Ks3Path: "Array",
      },
    },
    DeleteKnowledgeBase: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DeleteKnowledgeBase",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
      },
    },
    ModifyKnowledgeBase: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "ModifyKnowledgeBase",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
        Name: "String",
        IndexingTechnique: "String",
        EmbeddingModelProvider: "String",
        EmbeddingModel: "String",
        RetrievalModel: "Object",
      },
    },
    DescribeKnowledgeBase: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DescribeKnowledgeBase",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DatasetId: "String",
      },
    },
    DescribeKnowledgeBases: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "DescribeKnowledgeBases",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Page: "Int",
        Limit: "Int",
        Keyword: "String",
      },
    },
    CreateKnowledgeBase: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-11-14",
          Action: "CreateKnowledgeBase",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        Name: "String",
        IndexingTechnique: "String",
        RetrievalModel: "Object",
      },
    },
  };
};
