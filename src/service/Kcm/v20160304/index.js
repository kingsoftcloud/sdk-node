const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
  _baseConfig = {
    protocol: "http://",
    endpoint: "kcm.api.ksyun.com",
    config: {
      timeout: 60, //设置timeout
      headers: {
        Accept: "application/json",
      },
      credentials: {
        region: "cn-shanghai-3",
        service: "kcm",
      },
    },
  };
  _apiList = {
    ApplyCertificate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ApplyCertificate",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        MainDomain: "String",
        CertificateCode: "String",
        YearLength: "Int",
        DomainCount: "Int",
        WildcardCount: "Int",
        ProductId: "String",
        SubOrderId: "String",
        ProjectId: "Int",
      },
    },
    UpdateCertificate: {
      url: "/",
      method: "POST",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "UpdateCertificate",
        },
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
      paramsType: {
        CertificateId: "String",
        AuthMethod: "String",
        CSR: "String",
        ContactId: "Int",
        CompanyId: "Int",
        CompanyName: "String",
        Department: "String",
        State: "String",
        City: "String",
        Address: "String",
        CompanyPhone: "String",
        PostalCode: "String",
        DcvEmail: "String",
        AdditionalDomains: "String",
        Wildcards: "String",
        Contact: "String",
        IsSubmit: "String",
        BusinessLicence: "String",
        CsrSource: "String",
        Algorithm: "String",
      },
    },
    ListCertificates: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "ListCertificates",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CertificateId: "Filter",
        ProjectId: "Filter",
        Filter: "Filter",
      },
    },
    GetCertificateDetail: {
      url: "/",
      method: "GET",
      config: {
        query: {
          Version: "2016-03-04",
          Action: "GetCertificateDetail",
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      paramsType: {
        CertificateId: "String",
      },
    },
  };
};
