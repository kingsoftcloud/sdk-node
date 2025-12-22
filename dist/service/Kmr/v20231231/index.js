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
      'endpoint': 'kmr.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kmr'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'ListInstances': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-12-31',
            'Action': 'ListInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PageNumber': 'Int',
          'PageSize': 'Int',
          'InstanceStatus': 'Array',
          'InstanceNameOrId': 'String'
        }
      },
      'GetInstanceDetail': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-12-31',
            'Action': 'GetInstanceDetail'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'ModifyHosts': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-12-31',
            'Action': 'ModifyHosts'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'TunaHosts': 'Array'
        }
      },
      'ListAutoScaleHistory': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-12-31',
            'Action': 'ListAutoScaleHistory'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'ExecAtStart': 'String',
          'ExecAtEnd': 'String',
          'PolicyName': 'String',
          'PageNumber': 'Int',
          'PageSize': 'Int'
        }
      },
      'CreateAutoScalePolicy': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-12-31',
            'Action': 'CreateAutoScalePolicy'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'PolicyName': 'String',
          'ChargeType': 'String',
          'ExecuteCycle': 'String',
          'ExecuteRules': 'Object'
        }
      },
      'ListAutoScalePolicy': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-12-31',
            'Action': 'ListAutoScalePolicy'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DeleteAutoScalePolicy': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-12-31',
            'Action': 'DeleteAutoScalePolicy'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'PolicyId': 'String'
        }
      }
    });
  }
};