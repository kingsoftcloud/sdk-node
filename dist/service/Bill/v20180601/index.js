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
      endpoint: "bill.api.ksyun.com",
      config: {
        timeout: 60,
        //设置timeout
        headers: {
          Accept: "application/json"
        },
        credentials: {
          region: "cn-shanghai-3",
          service: "bill"
        }
      }
    });
    _defineProperty(this, "_apiList", {
      GetMonthBill: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-01",
            Action: "GetMonthBill"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          BillStartMonth: "String",
          BillEndMonth: "String"
        }
      },
      GetPostpayDetailBill: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-01",
            Action: "GetPostpayDetailBill"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {
          BillStartMonth: "String",
          BillEndMonth: "String",
          ProductCode: "String",
          ProjectId: "String"
        }
      },
      GetProductCode: {
        url: "/",
        method: "GET",
        config: {
          query: {
            Version: "2018-06-01",
            Action: "GetProductCode"
          },
          headers: {
            "Content-Type": "application/json"
          }
        },
        paramsType: {}
      }
    });
  }
};