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
      'endpoint': 'monitor.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'monitor'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'ListAlarmPolicy': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ListAlarmPolicy'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PageIndex': 'Int',
          'PageSize': 'Int'
        }
      },
      'DescribeAlarmPolicy': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeAlarmPolicy'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PolicyId': 'Int'
        }
      },
      'DescribePolicyObject': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribePolicyObject'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PolicyId': 'Int',
          'PageIndex': 'Int',
          'PageSize': 'Int'
        }
      },
      'DescribeAlarmReceives': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeAlarmReceives'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'PolicyId': 'Int'
        }
      },
      'AddAlarmReceives': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'AddAlarmReceives'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PolicyId': 'Int',
          'ContactFlag': 'Int',
          'ContactWay': 'Int',
          'ContactId': 'Array'
        }
      },
      'DeleteAlarmReceives': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DeleteAlarmReceives'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'PolicyId': 'Int',
          'ContactFlag': 'Int',
          'ContactId': 'Array'
        }
      },
      'GetUserGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'GetUserGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'GetAlertUser': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'GetAlertUser'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'UserGrpId': 'Filter'
        }
      },
      'UpdateAlertUserStatus': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'UpdateAlertUserStatus'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'UserId': 'Array',
          'UserStatus': 'Int'
        }
      }
    });
  }
};