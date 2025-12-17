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
      endpoint: "kcs.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "kcs"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      DescribeCacheReadonlyNode: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2017-04-01",
            Action: "DescribeCacheReadonlyNode"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          CacheId: "String",
          AvailableZone: "String"
        }
      },
      AddCacheSlaveNode: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2017-04-01",
            Action: "AddCacheSlaveNode"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          AvailableZone: "String",
          CacheId: "String",
          SlaveVip: "String"
        }
      },
      DeleteCacheSlaveNode: {
        url: "/",
        method: "PUT",
        config: {
          query: {
            Version: "2017-04-01",
            Action: "DeleteCacheSlaveNode"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          AvailableZone: "String",
          CacheId: "String",
          NodeId: "String"
        }
      }
    });
  }
};