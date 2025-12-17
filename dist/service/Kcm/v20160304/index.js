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
      endpoint: "kcm.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "kcm"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      ApplyCertificate: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ApplyCertificate"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          MainDomain: "String",
          CertificateCode: "String",
          YearLength: "Int",
          DomainCount: "Int",
          WildcardCount: "Int",
          ProductId: "String",
          SubOrderId: "String",
          ProjectId: "Int"
        }
      },
      UpdateCertificate: {
        url: "/",
        method: "POST",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "UpdateCertificate"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
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
          Algorithm: "String"
        }
      },
      ListCertificates: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "ListCertificates"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          CertificateId: "Filter",
          ProjectId: "Filter",
          Filter: "Filter"
        }
      },
      GetCertificateDetail: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2016-03-04",
            Action: "GetCertificateDetail"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          CertificateId: "String"
        }
      }
    });
  }
};