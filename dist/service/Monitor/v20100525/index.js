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
      endpoint: "monitor.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "monitor"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      GetMetricStatistics: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2010-05-25",
            Action: "GetMetricStatistics"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Namespace: "String",
          InstanceID: "String",
          MetricName: "String",
          StartTime: "String",
          EndTime: "String",
          Aggregate: "String",
          Period: "String"
        }
      },
      ListMetrics: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2010-05-25",
            Action: "ListMetrics"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          Namespace: "String",
          InstanceID: "String",
          MetricName: "String",
          PageIndex: "Int",
          PageSize: "Int"
        }
      }
    });
  }
};