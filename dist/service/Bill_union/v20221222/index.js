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
      'endpoint': 'bill-union.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'bill-union'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'QueryInstanceConsume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2022-12-22',
            'Action': 'QueryInstanceConsume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'StartDay': 'String',
          'EndDay': 'String',
          'ProductCode': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      },
      'QueryProjectConsume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2022-12-22',
            'Action': 'QueryProjectConsume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'StartDay': 'String',
          'EndDay': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      },
      'QueryProductConsume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2022-12-22',
            'Action': 'QueryProductConsume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'StartDay': 'String',
          'EndDay': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      },
      'QueryFinanceUnitConsume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2022-12-22',
            'Action': 'QueryFinanceUnitConsume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'StartDay': 'String',
          'EndDay': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      },
      'QueryFinanceUnitConsumeOfMonth': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2022-12-22',
            'Action': 'QueryFinanceUnitConsumeOfMonth'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'CustomerBillMonth': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      },
      'QueryUserConsume': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2022-12-22',
            'Action': 'QueryUserConsume'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'StartDay': 'String',
          'EndDay': 'String',
          'Page': 'Int',
          'Size': 'Int'
        }
      }
    });
  }
};