"use strict";

function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const BaseClient = require("../../../base/BaseClient.js");
module.exports = class Client extends BaseClient {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "_baseConfig", {
      'protocol': 'http://',
      'endpoint': 'kead.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kead'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'DescribeBlockIp': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-01-01',
            'Action': 'DescribeBlockIp'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SearchStr': 'String',
          'Status': 'String',
          'InstanceType': 'String',
          'RegionCode': 'String',
          'StartTime': 'String',
          'endTime': 'String'
        }
      }
    });
  }
};