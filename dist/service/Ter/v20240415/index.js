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
      endpoint: "ter.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "ter"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      DescribeStackOutputs: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-04-15",
            Action: "DescribeStackOutputs"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StackId: "String"
        }
      },
      DescribeStackEvents: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-04-15",
            Action: "DescribeStackEvents"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StackId: "String",
          MaxResults: "Int",
          Offset: "Int"
        }
      },
      DeleteTemplate: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-04-15",
            Action: "DeleteTemplate"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TemplateId: "String"
        }
      },
      DescribeTemplateVersions: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-04-15",
            Action: "DescribeTemplateVersions"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TemplateId: "String"
        }
      },
      DescribeTemplates: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2024-04-15",
            Action: "DescribeTemplates"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          MaxResults: "Int",
          TemplateId: "Filter",
          Offset: "Int",
          TemplateName: "Filter",
          TemplateType: "String"
        }
      }
    });
  }
};