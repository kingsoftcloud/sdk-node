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
    DescribeListeners: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
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
    DeleteListeners: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteListeners",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "String",
      },
    },
    ModifyListeners: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyListeners",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "String",
        ListenerName: "String",
        ListenerState: "String",
        Method: "String",
        BandWidthIn: "Int",
        BandWidthOut: "Int",
        HttpProtocol: "String",
        TlsCipherPolicy: "String",
        EnableHttp2: "Boolean",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        CookieType: "String",
        CookieName: "String",
        CertificateId: "String",
        RedirectListenerId: "String",
      },
    },
    CreateListeners: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateListeners",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        ListenerName: "String",
        ListenerState: "String",
        ListenerProtocol: "String",
        ListenerPort: "Int",
        Method: "String",
        BandWidthIn: "Int",
        BandWidthOut: "Int",
        LoadBalancerAclId: "String",
        HttpProtocol: "String",
        TlsCipherPolicy: "String",
        EnableHttp2: "Boolean",
        RedirectListenerId: "String",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        CookieType: "String",
        CookieName: "String",
        CertificateId: "String",
      },
    },
    ModifyInstancesWithListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyInstancesWithListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RegisterId: "String",
        Weight: "Int",
        RealServerPort: "Int",
        MasterSlaveType: "String",
        Tag: "String",
      },
    },
    RegisterInstancesWithListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "RegisterInstancesWithListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RealServerType: "String",
        ListenerId: "String",
        Weight: "Int",
        RealServerIp: "String",
        RealServerPort: "Int",
        InstanceId: "String",
        Tag: "String",
        MasterSlaveType: "String",
      },
    },
    DeregisterInstancesFromListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeregisterInstancesFromListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RegisterId: "String",
      },
    },
    DescribeInstancesWithListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeInstancesWithListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RegisterId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    ModifyHealthCheck: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyHealthCheck",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        HealthCheckId: "String",
        HealthCheckState: "String",
        HealthCheckConnectPort: "Int",
        HealthyThreshold: "Int",
        Interval: "Int",
        Timeout: "Int",
        UnhealthyThreshold: "Int",
        HttpMethod: "String",
        UrlPath: "String",
        HostName: "String",
        HealthCheckReq: "String",
        HealthCheckExp: "String",
      },
    },
    DeleteHealthCheck: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteHealthCheck",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        HealthCheckId: "String",
      },
    },
    DescribeHealthChecks: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeHealthChecks",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        HealthCheckId: "Filter",
        Filter: "Filter",
        Limit: "Int",
        Marker: "String",
      },
    },
    ConfigureHealthCheck: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ConfigureHealthCheck",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "String",
        HealthCheckState: "String",
        HealthCheckConnectPort: "Int",
        HealthyThreshold: "Int",
        Interval: "Int",
        Timeout: "Int",
        UnhealthyThreshold: "Int",
        HttpMethod: "String",
        UrlPath: "String",
        HostName: "String",
        HealthCheckReq: "String",
        HealthCheckExp: "String",
      },
    },
    DescribeLoadBalancers: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeLoadBalancers",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ProjectId: "Filter",
        LoadBalancerId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
        State: "String",
      },
    },
    DeleteLoadBalancer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
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
    ModifyLoadBalancer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyLoadBalancer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerId: "String",
        LoadBalancerName: "String",
        LoadBalancerState: "String",
      },
    },
    CreateLoadBalancer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateLoadBalancer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        VpcId: "String",
        LoadBalancerName: "String",
        Type: "String",
        SubnetId: "String",
        PrivateIpAddress: "String",
        IpVersion: "String",
        LbType: "String",
        ProjectId: "String",
      },
    },
    CreateHostHeader: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateHostHeader",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "String",
        CertificateId: "String",
        HostHeader: "String",
      },
    },
    ModifyHostHeader: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyHostHeader",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        HostHeaderId: "String",
        CertificateId: "String",
      },
    },
    DeleteHostHeader: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteHostHeader",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        HostHeaderId: "String",
      },
    },
    DescribeHostHeaders: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeHostHeaders",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        HostHeaderId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    DeleteRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RuleId: "String",
      },
    },
    DescribeRules: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeRules",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RuleId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    CreateBackendServerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateBackendServerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        VpcId: "String",
        BackendServerGroupName: "String",
        BackendServerGroupType: "String",
        HostName: "String",
        HealthCheckState: "String",
        HealthyThreshold: "Int",
        Interval: "Int",
        Timeout: "Int",
        UnhealthyThreshold: "Int",
        UrlPath: "String",
        Region: "String",
        Type: "String",
      },
    },
    DeleteBackendServerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
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
    ModifyBackendServerGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyBackendServerGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerGroupId: "String",
        BackendServerGroupName: "String",
      },
    },
    DescribeBackendServerGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeBackendServerGroups",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerGroupId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    RegisterBackendServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "RegisterBackendServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        BackendServerGroupId: "String",
        BackendServerIp: "String",
        BackendServerPort: "Int",
        Weight: "Int",
      },
    },
    DeregisterBackendServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeregisterBackendServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RegisterId: "String",
      },
    },
    DescribeBackendServers: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeBackendServers",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        RegisterId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    CreateLoadBalancerAcl: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateLoadBalancerAcl",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclName: "String",
        IpVersion: "String",
      },
    },
    DeleteLoadBalancerAcl: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteLoadBalancerAcl",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclId: "String",
      },
    },
    ModifyLoadBalancerAcl: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyLoadBalancerAcl",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclId: "String",
        LoadBalancerAclName: "String",
      },
    },
    CreateLoadBalancerAclEntry: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateLoadBalancerAclEntry",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclId: "String",
        CidrBlock: "String",
        RuleNumber: "Int",
        RuleAction: "String",
        Protocol: "String",
        Description: "String",
      },
    },
    DeleteLoadBalancerAclEntry: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteLoadBalancerAclEntry",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclEntryId: "String",
      },
    },
    AssociateLoadBalancerAcl: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "AssociateLoadBalancerAcl",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclId: "String",
        ListenerId: "String",
      },
    },
    DisassociateLoadBalancerAcl: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DisassociateLoadBalancerAcl",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        ListenerId: "String",
      },
    },
    DescribeLoadBalancerAcls: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeLoadBalancerAcls",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclId: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    CreateSlbRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateSlbRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Path: "String",
        HostHeaderId: "String",
        BackendServerGroupId: "String",
        ListenerSync: "String",
        Method: "String",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        cookieType: "String",
        CookieName: "String",
        HealthCheckState: "String",
        HealthyThreshold: "String",
        Interval: "Int",
        Timeout: "Int",
        UnhealthyThreshold: "Int",
        UrlPath: "String",
        HostName: "String",
      },
    },
    ModifySlbRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifySlbRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        Path: "String",
        RuleId: "String",
        BackendServerGroupId: "String",
        ListenerSync: "String",
        Method: "String",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        cookieType: "String",
        CookieName: "String",
        HealthCheckState: "String",
        HealthyThreshold: "String",
        Interval: "Int",
        Timeout: "Int",
        UnhealthyThreshold: "Int",
        UrlPath: "String",
        HostName: "String",
      },
    },
    CreatePrivateLinkServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreatePrivateLinkServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkServerName: "String",
        ListenerId: "String",
        Description: "String",
        ProjectId: "String",
      },
    },
    DescribePrivateLinkServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribePrivateLinkServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkServerId: "Filter",
        ProjectId: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    DeletePrivateLinkServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeletePrivateLinkServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkServerId: "String",
      },
    },
    ModifyPrivateLinkServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyPrivateLinkServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkServerId: "String",
        PrivateLinkServerName: "String",
        Description: "String",
      },
    },
    AssociatePrivateLinkServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "AssociatePrivateLinkServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkServerId: "String",
        LoadBalancerId: "String",
        ListenerPort: "Int",
        ProjectId: "String",
      },
    },
    DescribePrivateLink: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribePrivateLink",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkId: "Filter",
        ProjectId: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    DeletePrivateLink: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeletePrivateLink",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkId: "String",
      },
    },
    ModifyLoadBalancerAclEntry: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyLoadBalancerAclEntry",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        LoadBalancerAclEntryId: "String",
        RuleNumber: "Int",
        RuleAction: "String",
        Description: "String",
      },
    },
    AcceptPrivateLink: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "AcceptPrivateLink",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkId: "String",
      },
    },
    RejectPrivateLink: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "RejectPrivateLink",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkId: "String",
      },
    },
    ListPrivateLinkServer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ListPrivateLinkServer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkServerId: "String",
        Filter: "Filter",
      },
    },
    RemovePrivateLink: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "RemovePrivateLink",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PrivateLinkServerId: "String",
        PrivateLinkId: "String",
      },
    },
    CreateAlb: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateAlb",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbName: "String",
        AlbVersion: "String",
        AlbType: "String",
        VpcId: "String",
        IpVersion: "String",
        ProjectId: "String",
        AllocationId: "String",
        ChargeType: "String",
      },
    },
    DeleteAlb: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteAlb",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbId: "String",
      },
    },
    SetAlbName: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "SetAlbName",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbId: "String",
        AlbName: "String",
      },
    },
    SetAlbStatus: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "SetAlbStatus",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbId: "String",
        State: "String",
      },
    },
    DescribeAlbs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeAlbs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    CreateAlbListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateAlbListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbId: "String",
        AlbListenerName: "String",
        Method: "String",
        Protocol: "String",
        Port: "Int",
        CertificateId: "String",
        TlsCipherPolicy: "String",
        AlbListenerAclId: "String",
        AlbListenerState: "String",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        CookieType: "String",
        CookieName: "String",
        EnableHttp2: "Boolean",
        HttpProtocol: "String",
      },
    },
    ModifyAlbListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyAlbListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerId: "String",
        AlbListenerName: "String",
        AlbListenerState: "String",
        Method: "String",
        CertificateId: "String",
        TlsCipherPolicy: "String",
        AlbListenerAclId: "String",
        HttpProtocol: "String",
        SessionState: "String",
        SessionPersistencePeriod: "Int",
        CookieType: "String",
        CookieName: "String",
        EnableHttp2: "Boolean",
      },
    },
    DeleteAlbListener: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteAlbListener",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerId: "String",
      },
    },
    DescribeAlbListeners: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeAlbListeners",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    CreateAlbRuleGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateAlbRuleGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AlbRuleGroupName: "String",
        AlbListenerId: "String",
        BackendServerGroupId: "String",
        ListenerSync: "String",
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
        AlbRuleSet: "Array",
        RedirectHttpCode: "String",
        RedirectAlbListenerId: "String",
      },
    },
    DeleteAlbRuleGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteAlbRuleGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbRuleGroupId: "String",
      },
    },
    DescribeAlbRuleGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeAlbRuleGroups",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbRuleGroupId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    ModifyAlbRuleGroup: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ModifyAlbRuleGroup",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AlbRuleGroupId: "String",
        AlbRuleGroupName: "String",
        BackendServerGroupId: "String",
        ListenerSync: "String",
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
        AlbRuleSet: "Array",
        RedirectHttpCode: "String",
        RedirectAlbListenerId: "String",
      },
    },
    AddAlbRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "AddAlbRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbRuleGroupId: "String",
        AlbRuleType: "String",
        AlbRuleValue: "String",
      },
    },
    DeleteAlbRule: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteAlbRule",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbRuleGroupId: "String",
        AlbRuleType: "String",
        AlbRuleValue: "String",
      },
    },
    CreateAlbListenerCertGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CreateAlbListenerCertGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerId: "String",
      },
    },
    DeleteAlbListenerCertGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DeleteAlbListenerCertGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerCertGroupId: "String",
      },
    },
    DescribeAlbListenerCertGroups: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DescribeAlbListenerCertGroups",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerCertGroupId: "Filter",
        Filter: "Filter",
        MaxResults: "Int",
        NextToken: "String",
      },
    },
    AssociateCertificateWithGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "AssociateCertificateWithGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerCertGroupId: "String",
        CertificateId: "String",
      },
    },
    DissociateCertificateWithGroup: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "DissociateCertificateWithGroup",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbListenerCertGroupId: "String",
        CertificateId: "String",
      },
    },
    SetEnableAlbAccessLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "SetEnableAlbAccessLog",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        AlbId: "String",
        EnabledLog: "Boolean",
      },
    },
    SetAlbAccessLog: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "SetAlbAccessLog",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        AlbId: "String",
        ProjectName: "String",
        LogpoolName: "String",
      },
    },
    CloneLoadBalancer: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "CloneLoadBalancer",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        VpcId: "String",
        LoadBalancerName: "String",
        Type: "String",
      },
    },
  };
};
