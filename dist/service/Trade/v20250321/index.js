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
      'endpoint': 'trade.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'trade'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'QueryUnPayOrders': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2025-03-21',
            'Action': 'QueryUnPayOrders'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'page': 'Int',
          'size': 'Int'
        }
      },
      'QueryOrderInfo': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2025-03-21',
            'Action': 'QueryOrderInfo'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'orderId': 'String'
        }
      },
      'CancelOrder': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2025-03-21',
            'Action': 'CancelOrder'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'orderId': 'String'
        }
      },
      'LaunchPayOrder': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2025-03-21',
            'Action': 'LaunchPayOrder'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'OrderId': 'String'
        }
      }
    });
  }
};