const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kcrs.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kcrs",
      },
    },
  };
  _apiList = {
    CreateNamespace: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "CreateNamespace",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        Public: "String",
      },
    },
    DescribeNamespace: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeNamespace",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        Public: "String",
        MaxResults: "String",
        Marker: "String",
      },
    },
    ModifyNamespaceType: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "ModifyNamespaceType",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        Public: "String",
      },
    },
    DescribeNamespaceExist: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeNamespaceExist",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
      },
    },
    DeleteNamespace: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteNamespace",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
      },
    },
    DescribeImages: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeImages",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "String",
        ImageId: "String",
        MaxResults: "String",
        Marker: "String",
      },
    },
    DeleteImages: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteImages",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "String",
        ImageId: "String",
      },
    },
    DeleteRepoTag: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteRepoTag",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "String",
        TagName: "String",
      },
    },
    DescribeRepository: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeRepository",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "Filter",
        MaxResults: "String",
        Marker: "String",
      },
    },
    ModifyRepoDesc: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "ModifyRepoDesc",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "String",
        Desc: "String",
      },
    },
    DeleteRepository: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteRepository",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "String",
      },
    },
    StartImageScan: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "StartImageScan",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "String",
        ImageId: "String",
      },
    },
    DescribeImageScan: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeImageScan",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        RepoName: "String",
        ImageId: "String",
      },
    },
    CreateInstanceToken: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "CreateInstanceToken",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        TokenType: "String",
        TokenTime: "String",
        Desc: "String",
      },
    },
    DescribeInternalEndpoint: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeInternalEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DescribeInstanceToken: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeInstanceToken",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Marker: "String",
        MaxResults: "String",
      },
    },
    CreateInternalEndpoint: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "CreateInternalEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        VpcId: "String",
        ReserveSubnetId: "String",
      },
    },
    ModifyInstanceTokenStatus: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "ModifyInstanceTokenStatus",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        TokenId: "String",
        Enable: "String",
      },
    },
    DeleteInternalEndpoint: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteInternalEndpoint",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        VpcId: "String",
        EniLBIp: "String",
      },
    },
    ModifyInstanceTokenInformation: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "ModifyInstanceTokenInformation",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        TokenId: "String",
        TokenType: "String",
        TokenTime: "String",
        Desc: "String",
      },
    },
    DescribeInternalEndpointDns: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeInternalEndpointDns",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        VpcId: "String",
        EniLBIp: "String",
        InternalEndpointDns: "String",
      },
    },
    DeleteInstanceToken: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteInstanceToken",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        TokenId: "String",
      },
    },
    CreateInternalEndpointDns: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "CreateInternalEndpointDns",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        VpcId: "String",
        EniLBIp: "String",
        InternalEndpointDns: "String",
      },
    },
    DeleteInternalEndpointDns: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteInternalEndpointDns",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        VpcId: "String",
        EniLBIp: "String",
        InternalEndpointDns: "String",
      },
    },
    CreateInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "CreateInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceName: "String",
        ChargeType: "String",
        InstanceType: "String",
        PurchaseTime: "String",
        ProjectId: "String",
      },
    },
    DeleteInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        DeleteBucket: "String",
      },
    },
    DescribeInstanceUsage: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeInstanceUsage",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
      },
    },
    DescribeInstance: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeInstance",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "Filter",
        Marker: "String",
        MaxResults: "String",
        ProjectId: "Filter",
        InstanceName: "String",
      },
    },
    CreateWebhookTrigger: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "CreateWebhookTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        Trigger: "String",
        TriggerName: "String",
        EventType: "Filter",
        TriggerUrl: "String",
        Header: "Filter",
        Enabled: "String",
        Key: "String",
        Value: "Filter",
      },
    },
    DescribeWebhookTrigger: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeWebhookTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        TriggerId: "String",
        Marker: "String",
        MaxResults: "String",
      },
    },
    ModifyWebhookTrigger: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "ModifyWebhookTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        Trigger: "String",
        TriggerId: "String",
        TriggerName: "String",
        EventType: "Filter",
        TriggerUrl: "String",
        Header: "Filter",
        Enabled: "String",
        Key: "String",
        Value: "Filter",
      },
    },
    DescribeWebhookTriggerLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeWebhookTriggerLog",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        TriggerId: "String",
        Marker: "String",
        MaxResults: "String",
      },
    },
    DeleteWebhookTrigger: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteWebhookTrigger",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        InstanceId: "String",
        Namespace: "String",
        TriggerId: "String",
      },
    },
    DescribeAllRepository: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeAllRepository",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetMetadata: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "GetMetadata",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    CreateRetentionRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "CreateRetentionRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    UpdateRetentionRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "UpdateRetentionRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    DeleteRetentionRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DeleteRetentionRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    DescribeRetentionRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "DescribeRetentionRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    RunRetentionPolicy: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "RunRetentionPolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetRetentionPolicyLogs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "GetRetentionPolicyLogs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetRetentionPolicyLogDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "GetRetentionPolicyLogDetail",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetRetentionPolicyLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "GetRetentionPolicyLog",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetRetentionTrigger: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "GetRetentionTrigger",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    UpdateRetentionTrigger: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "UpdateRetentionTrigger",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetNamespacePolicy: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "GetNamespacePolicy",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    Schedule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2021-11-09",
          Action: "Schedule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
  };
};
