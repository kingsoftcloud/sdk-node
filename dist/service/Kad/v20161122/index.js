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
      'endpoint': 'kad.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'kad'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateForwardConf': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'CreateForwardConf'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'KadId': 'String',
          'Protocol': 'String',
          'ServicePort': 'Int'
        }
      },
      'DeleteForwardConf': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'DeleteForwardConf'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ForwardConfId': 'String'
        }
      },
      'DescribeForwardConf': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'DescribeForwardConf'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'KadId': 'String',
          'ForwardConfId': 'Filter'
        }
      },
      'CreateForwardSource': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'CreateForwardSource'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ForwardConfId': 'String',
          'SourceIp': 'String',
          'SourcePort': 'String'
        }
      },
      'DeleteForwardSource': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'DeleteForwardSource'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ForwardSourceId': 'String'
        }
      },
      'DescribeForwardSource': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'DescribeForwardSource'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ForwardConfId': 'String',
          'ForwardSourceId': 'Filter'
        }
      },
      'GetAttackLog': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'GetAttackLog'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'DescribeOverview': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-11-22',
            'Action': 'DescribeOverview'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'KadId': 'String',
          'StartTime': 'String',
          'EndTime': 'String'
        }
      }
    });
  }
};