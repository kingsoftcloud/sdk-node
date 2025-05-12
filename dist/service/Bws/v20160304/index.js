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
      'endpoint': 'bws.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'bws'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateBandWidthShare': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'CreateBandWidthShare'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'LineId': 'String',
          'BandWidth': 'Int',
          'BandWidthShareName': 'String',
          'ProjectId': 'String',
          'ChargeType': 'String'
        }
      },
      'DescribeBandWidthShares': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DescribeBandWidthShares'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProjectId': 'Filter',
          'BandWidthShareId': 'Filter',
          'Filter': 'Filter',
          'MaxResults': 'Int',
          'NextToken': 'String'
        }
      },
      'AssociateBandWidthShare': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'AssociateBandWidthShare'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BandWidthShareId': 'String',
          'AllocationId': 'String'
        }
      },
      'DisassociateBandWidthShare': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DisassociateBandWidthShare'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BandWidthShareId': 'String',
          'AllocationId': 'String',
          'BandWidth': 'Int'
        }
      },
      'ModifyBandWidthShare': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'ModifyBandWidthShare'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BandWidthShareId': 'String',
          'BandWidth': 'Int',
          'BandWidthShareName': 'String'
        }
      },
      'DeleteBandWidthShare': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'DeleteBandWidthShare'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BandWidthShareId': 'String'
        }
      },
      'QueryBwsTopEipMonitor': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2016-03-04',
            'Action': 'QueryBwsTopEipMonitor'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'BandWidthShareId': 'String',
          'StartTime': 'String',
          'EndTime': 'String',
          'SortType': 'String',
          'PublicIp': 'String'
        }
      }
    });
  }
};