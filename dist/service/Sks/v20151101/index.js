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
      'endpoint': 'sks.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'sks'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'CreateKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'ImportKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'ImportKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'KeyName': 'String',
          'PublicKey': 'String',
          'Description': 'String',
          'IsCheck': 'Boolean'
        }
      },
      'DeleteKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'DeleteKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'KeyId': 'String'
        }
      },
      'ModifyKey': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'ModifyKey'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'KeyName': 'String',
          'KeyId': 'String'
        }
      },
      'DescribeKeys': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2015-11-01',
            'Action': 'DescribeKeys'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'MaxResults': 'Int',
          'NextToken': 'String',
          'KeyId': 'Filter',
          'Filter': 'Filter'
        }
      }
    });
  }
};