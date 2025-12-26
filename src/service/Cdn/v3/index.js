const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "cdn.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "cdn",
      },
    },
  };
  _apiList = {
    GetDomainLogs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetDomainLogs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
      },
    },
    GetClientRequestData: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetClientRequestData",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StartTime: "String",
        EndTime: "String",
        Metric: "String",
        Interval: "String",
        CdnType: "String",
        Domains: "String",
        Areas: "String",
        Provinces: "String",
        Isps: "String",
        IpType: "String",
        Schema: "String",
        ResultType: "String",
      },
    },
    GetCdnDomains: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetCdnDomains",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        PageSize: "Int",
        PageNumber: "Int",
        DomainName: "String",
        ProjectId: "Int",
        DomainStatus: "String",
        CdnType: "String",
        FuzzyMatch: "String",
      },
    },
    DeleteCdnDomain: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "DeleteCdnDomain",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
      },
    },
    GetCdnDomainBasicInfo: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetCdnDomainBasicInfo",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
      },
    },
    ModifyCdnDomainBasicInfo: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "ModifyCdnDomainBasicInfo",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Regions: "String",
        OriginType: "String",
        OriginProtocol: "String",
        Origin: "String",
      },
    },
    AddCdnDomain: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "AddCdnDomain",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainName: "String",
        CdnType: "String",
        ProjectId: "String",
        CdnProtocol: "String",
        Regions: "String",
        OriginType: "String",
        OriginProtocol: "String",
        Origin: "String",
      },
    },
    GetDomainConfigs: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetDomainConfigs",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        ConfigList: "String",
      },
    },
    StartStopCdnDomain: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "StartStopCdnDomain",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        ActionType: "String",
      },
    },
    SetCacheRuleConfig: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V3",
          Action: "SetCacheRuleConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        CacheRules: "Array",
      },
    },
    SetBackOriginHostConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetBackOriginHostConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        FollowReqDomain: "String",
        BackOriginHost: "String",
      },
    },
    GetValidDomainList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetValidDomainList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StartTime: "String",
        EndTime: "String",
        CdnType: "String",
      },
    },
    GetDomainAuthContent: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetDomainAuthContent",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainName: "String",
      },
    },
    SetVideoSeekConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetVideoSeekConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
      },
    },
    SetPageCompressConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetPageCompressConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
        CompressType: "String",
        FileType: "String",
        FileSize: "String",
      },
    },
    SetBrCompressConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetBrCompressConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
        CompressType: "String",
        FileType: "String",
        FileSize: "String",
      },
    },
    SetIgnoreQueryStringConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetIgnoreQueryStringConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
        HashKeyArgs: "String",
        Type: "String",
      },
    },
    SetSetOriginAdvancedConfig: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V3",
          Action: "SetSetOriginAdvancedConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
        OriginType: "String",
        Origin: "String",
        BackupOriginType: "String",
        BackupOrigin: "String",
        OriginPolicy: "String",
        OriginPolicyBestCount: "String",
      },
    },
    ValidateDomainOwner: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "ValidateDomainOwner",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainName: "String",
        AuthType: "String",
      },
    },
    SetHttp2OptionConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetHttp2OptionConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
      },
    },
    SetReferProtectionConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetReferProtectionConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
        ReferType: "String",
        ReferList: "String",
        AllowEmpty: "String",
      },
    },
    SetIpProtectionConfig: {
      url: "/",
      method: "POST|GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetIpProtectionConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
        IpType: "String",
        IpList: "String",
      },
    },
    SetHttpHeadersConfig: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V3",
          Action: "SetHttpHeadersConfig",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DomainId: "String",
        HeaderKey: "String",
        HeaderValue: "String",
      },
    },
    DeleteHttpHeadersConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "DeleteHttpHeadersConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        HeaderKey: "String",
      },
    },
    GetHttpHeaderList: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetHttpHeaderList",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    SetRequestAuthConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetRequestAuthConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        Enable: "String",
        AuthType: "String",
        Key1: "String",
        Key2: "String",
        ExpirationTime: "String",
      },
    },
    SetForceRedirectConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetForceRedirectConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        RedirectType: "String",
        RedirectCode: "String",
      },
    },
    SetErrorPageConfig: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "SetErrorPageConfig",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        DomainId: "String",
        ErrorPages: "Array",
      },
    },
    SetTLSVersionConfig: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "V3",
          Action: "SetTLSVersionConfig",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        DomainId: "String",
        TLSVersion: "Array",
      },
    },
    GetBillingMode: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetBillingMode",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StartTime: "String",
        EndTime: "String",
        CdnType: "String",
        DomainIds: "String",
        Regions: "String",
        BillingMode: "String",
      },
    },
    GetBlockUrlQuota: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetBlockUrlQuota",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {},
    },
    GetBandwidthData: {
      url: "/",
      method: "POST|GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetBandwidthData",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        StartTime: "String",
        EndTime: "String",
        CdnType: "String",
        DomainIds: "String",
        Regions: "String",
        ResultType: "Int",
        Granularity: "Int",
        DataType: "String",
        ProtocolType: "String",
      },
    },
    GetFlowData: {
      url: "/",
      method: "POST|GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetFlowData",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StartTime: "String",
        EndTime: "String",
        CdnType: "String",
        DomainIds: "String",
        Regions: "String",
        ResultType: "Int",
        Granularity: "Int",
        DataType: "String",
        ProtocolType: "String",
      },
    },
    GetPvData: {
      url: "/",
      method: "POST|GET",
      config: {
        query: {
          Version: "V3",
          Action: "GetPvData",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        StartTime: "String",
        EndTime: "String",
        CdnType: "String",
        DomainIds: "String",
        Regions: "String",
        ResultType: "Int",
        Granularity: "Int",
        DataType: "String",
        ProtocolType: "String",
      },
    },
  };
};
