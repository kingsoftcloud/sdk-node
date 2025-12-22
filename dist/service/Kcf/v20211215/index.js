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
      'endpoint': 'kcf.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kcf'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'GetLogDate': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'GetLogDate'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'id': 'Int'
        }
      },
      'CreateFunction': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'CreateFunction'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Id': 'String',
          'Name': 'String',
          'Namespace': 'String',
          'Runtime': 'String',
          'CaPort': 'Int',
          'StartupCommand': 'Array',
          'Description': 'String',
          'Timeout': 'Int',
          'MemorySize': 'Int',
          'SingleInstanceConcurrency': 'Int',
          'InternetAccess': 'Boolean',
          'Code': 'Object',
          'Environment': 'Object',
          'VpcConfig': 'Object',
          'LogConfig': 'Object',
          'LivenessProbeConfig': 'Object',
          'ReadinessProbeConfig': 'Object',
          'Layers': 'Array'
        }
      },
      'CheckFunctionService': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'CheckFunctionService'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'OpenFunctionService': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'OpenFunctionService'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {}
      },
      'DeleteFunction': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'DeleteFunction'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Id': 'String'
        }
      },
      'CreateTrigger': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'CreateTrigger'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'FunctionId': 'String',
          'TriggerName': 'String',
          'Type': 'String',
          'Enable': 'Boolean',
          'TriggerDesc': 'Object'
        }
      },
      'DeleteTrigger': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'DeleteTrigger'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Id': 'String'
        }
      },
      'ModifyFunction': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'ModifyFunction'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Id': 'String',
          'Runtime': 'String',
          'CaPort': 'Int',
          'StartupCommand': 'Array',
          'Timeout': 'Int',
          'MemorySize': 'Int',
          'SingleInstanceConcurrency': 'Int',
          'InternetAccess': 'Boolean',
          'Code': 'Object',
          'Environment': 'Object',
          'VpcConfig': 'Object',
          'LogConfig': 'Object',
          'LivenessProbeConfig': 'Object',
          'ReadinessProbeConfig': 'Object',
          'Layers': 'Array'
        }
      },
      'DescribeTriggers': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-12-15',
            'Action': 'DescribeTriggers'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FunctionId': 'String'
        }
      }
    });
  }
};