const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "slb.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "slb",
      },
    },
  };
  _apiList = {
    DescribeBackendServers: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DescribeBackendServers",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Filter: "Filter",
        BackendServerId: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    ModifyBackendServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "ModifyBackendServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerId: "String",
        Weight: "Int",
        Port: "Int",
        MasterSlaveType: "String",
      },
    },
    DeregisterBackendServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DeregisterBackendServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerId: "String",
      },
    },
    RegisterBackendServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "RegisterBackendServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerGroupId: "String",
        BackendServerIp: "String",
        Port: "Int",
        Weight: "Int",
        NetworkInterfaceId: "String",
        DirectConnectGatewayId: "String",
        MasterSlaveType: "String",
      },
    },
    DescribeBackendServerGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DescribeBackendServerGroups",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Filter: "Filter",
        BackendServerGroupId: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    ModifyBackendServerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "ModifyBackendServerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerGroupId: "String",
        Name: "String",
        UpstreamKeepalive: "String",
        Method: "String",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        CookieType: "String",
        CookieName: "String",
        HealthCheckState: "String",
        Timeout: "Int",
        Interval: "Int",
        HealthyThreshold: "Int",
        UnhealthyThreshold: "Int",
        UrlPath: "String",
        HostName: "String",
        HealthCheckConnectPort: "Int",
        HealthProtocol: "String",
        SlowStartEnabled: "Boolean",
        SlowStartDuration: "Int",
        HttpMethod: "String",
        HealthCode: "String",
        HealthCheckReq: "String",
        HealthCheckExp: "String",
      },
    },
    DeleteBackendServerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DeleteBackendServerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerGroupId: "String",
      },
    },
    CreateBackendServerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "CreateBackendServerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        VpcId: "String",
        Name: "String",
        BackendServerType: "String",
        Method: "String",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        CookieType: "String",
        CookieName: "String",
        UpstreamKeepalive: "String",
        Protocol: "String",
        HealthCheckState: "String",
        Timeout: "Int",
        Interval: "Int",
        HealthyThreshold: "Int",
        UnhealthyThreshold: "Int",
        UrlPath: "String",
        HostName: "String",
        HealthCheckConnectPort: "Int",
        HealthProtocol: "String",
        SlowStartEnabled: "Boolean",
        SlowStartDuration: "Int",
        HttpMethod: "String",
        HealthCheckReq: "String",
        HealthCheckExp: "String",
        HealthCode: "String",
      },
    },
    DescribeListeners: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DescribeListeners",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    ModifyListener: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "ModifyListener",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        ListenerId: "String",
        ListenerName: "String",
        ListenerState: "String",
        CertificateId: "String",
        TlsCipherPolicy: "String",
        ListenerAclId: "String",
        HttpProtocol: "String",
        EnableHttp2: "Boolean",
        CaEnabled: "Boolean",
        CaCertificateId: "String",
        EnableQuicUpgrade: "Boolean",
        QuicListenerId: "String",
        IdleTimeout: "Int",
        ServerGroupId: "String",
      },
    },
    DeleteListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DeleteListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "String",
      },
    },
    CreateListener: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "CreateListener",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        ListenerName: "String",
        Protocol: "String",
        Port: "Int",
        CertificateId: "String",
        TlsCipherPolicy: "String",
        ListenerAclId: "String",
        ListenerState: "String",
        RedirectListenerId: "String",
        RedirectHttpCode: "String",
        EnableHttp2: "Boolean",
        BackendServerGroupId: "String",
        FixedResponseConfig: "Object",
        RewriteConfig: "Object",
        CaEnabled: "Boolean",
        CaCertificateId: "String",
        EnableQuicUpgrade: "Boolean",
        QuicListenerId: "String",
        IdleTimeout: "Int",
        ServerGroupId: "String",
      },
    },
    SetAccessLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "SetAccessLog",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        ProjectName: "String",
        LogpoolName: "String",
      },
    },
    SetEnableAccessLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "SetEnableAccessLog",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        EnabledLog: "Boolean",
      },
    },
    SetLbProtocolLayers: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "SetLbProtocolLayers",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        ProtocolLayers: "String",
      },
    },
    SetLoadBalancerStatus: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "SetLoadBalancerStatus",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        State: "String",
      },
    },
    SetLoadBalancerName: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "SetLoadBalancerName",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        LoadBalancerName: "String",
      },
    },
    DescribeLoadBalancers: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DescribeLoadBalancers",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "Filter",
        Filter: "Filter",
        IsContainTag: "Boolean",
        TagKey: "Filter",
        TagKV: "Filter",
        ProjectId: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    DeleteLoadBalancer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DeleteLoadBalancer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
      },
    },
    CreateLoadBalancer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "CreateLoadBalancer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerName: "String",
        LoadBalancerVersion: "String",
        LoadBalancerType: "String",
        VpcId: "String",
        IpVersion: "String",
        ProjectId: "String",
        AllocationId: "String",
        ChargeType: "String",
        SubnetId: "String",
        PrivateIpAddress: "String",
        EnabledQuic: "Boolean",
        EnableHpa: "Boolean",
        ProtocolLayers: "String",
        DeleteProtection: "String",
        ModificationProtection: "String",
      },
    },
    ModifyCertificateWithGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "ModifyCertificateWithGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerCertGroupId: "String",
        OldCertificateId: "String",
        CertificateId: "String",
      },
    },
    DissociateCertificateWithGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DissociateCertificateWithGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerCertGroupId: "String",
        CertificateId: "String",
      },
    },
    AssociateCertificateWithGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "AssociateCertificateWithGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerCertGroupId: "String",
        CertificateId: "String",
      },
    },
    DescribeListenerCertGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DescribeListenerCertGroups",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerCertGroupId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    DeleteListenerCertGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DeleteListenerCertGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerCertGroupId: "String",
      },
    },
    CreateListenerCertGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "CreateListenerCertGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "String",
      },
    },
    AddRules: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "AddRules",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        RuleGroupId: "String",
        RuleType: "String",
        RuleValue: "String",
        MethodValue: "Array",
        SourceIpValue: "Array",
        HeaderValue: "Array",
        QueryValue: "Array",
        CookieValue: "Array",
      },
    },
    DeleteRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DeleteRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RuleGroupId: "String",
        RuleType: "String",
        RuleValue: "String",
      },
    },
    AddRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "AddRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RuleGroupId: "String",
        RuleType: "String",
        RuleValue: "String",
      },
    },
    ModifyRuleGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "ModifyRuleGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        RuleGroupId: "String",
        RuleGroupName: "String",
        BackendServerGroupId: "String",
        Type: "String",
        RuleSet: "Array",
        RedirectListenerId: "String",
        RedirectHttpCode: "String",
        FixedResponseConfig: "Object",
        RewriteConfig: "Object",
      },
    },
    DescribeRuleGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DescribeRuleGroups",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RuleGroupId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    DeleteRuleGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "DeleteRuleGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RuleGroupId: "String",
      },
    },
    CreateRuleGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "CreateRuleGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        RuleGroupName: "String",
        ListenerId: "String",
        BackendServerGroupId: "String",
        Type: "String",
        RuleSet: "Array",
        RedirectListenerId: "String",
        RedirectHttpCode: "String",
        FixedResponseConfig: "Object",
        RewriteConfig: "Object",
      },
    },
    SetLBModificationProtection: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "SetLBModificationProtection",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        ModificationProtection: "Boolean",
      },
    },
    SetLBDeleteProtection: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2025-04-30",
          Action: "SetLBDeleteProtection",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        DeleteProtection: "Boolean",
      },
    },
  };
};
