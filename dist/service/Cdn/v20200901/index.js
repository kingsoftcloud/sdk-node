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
      endpoint: "cdn.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "cdn"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      CreateUserUsageDataExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-09-01",
            Action: "CreateUserUsageDataExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StartTime: "String",
          EndTime: "String",
          CdnType: "String",
          TaskName: "String",
          Language: "String"
        }
      },
      GetUserUsageDataExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-09-01",
            Action: "GetUserUsageDataExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          PageSize: "String",
          PageNumber: "String"
        }
      },
      DeleteUserUsageDataExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-09-01",
            Action: "DeleteUserUsageDataExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TaskID: "String"
        }
      },
      GetDomainUsageData: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-09-01",
            Action: "GetDomainUsageData"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StartTime: "String",
          EndTime: "String",
          Metric: "String",
          CdnType: "String",
          Domains: "String",
          Areas: "String",
          Interval: "String",
          RequestId: "String",
          PeakTime: "String",
          Time: "String",
          Value: "String"
        }
      },
      CreateUsageDetailDataExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-09-01",
            Action: "CreateUsageDetailDataExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          StartTime: "String",
          EndTime: "String",
          Type: "String",
          CdnType: "String",
          Domains: "String",
          TaskName: "String",
          Language: "String"
        }
      },
      GetUsageDetailDataExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-09-01",
            Action: "GetUsageDetailDataExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          PageSize: "String",
          PageNumber: "String"
        }
      },
      DeleteUsageDetailDataExportTask: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2020-09-01",
            Action: "DeleteUsageDetailDataExportTask"
          },
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        },
        paramsType: {
          TaskID: "String"
        }
      }
    });
  }
};