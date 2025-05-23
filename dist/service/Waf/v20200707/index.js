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
      'endpoint': 'waf.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'waf'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateDomain': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'CreateDomain'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceRecord': 'String',
          'HttpRewrite': 'Boolean',
          'HttpSource': 'Boolean',
          'CertificateId': 'String',
          'CertificateRegion': 'String',
          'LbMethod': 'String',
          'HasProxy': 'Boolean',
          'ProjectId': 'Int',
          'HeaderMark': 'String',
          'HeaderValue': 'String',
          'HealthMonitor': 'String',
          'HttpPort': 'Filter',
          'HttpsPort': 'Filter',
          'Sources': 'String'
        }
      },
      'DescribeDomains': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'DescribeDomains'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceRecord': 'String'
        }
      },
      'ModifyDomain': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'ModifyDomain'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceRecordId': 'String',
          'HttpRewrite': 'Boolean',
          'HttpSource': 'Boolean',
          'CertificateId': 'String',
          'CertificateRegion': 'String',
          'LbMethod': 'String',
          'HasProxy': 'Boolean',
          'ProjectId': 'Int',
          'HeaderMark': 'String',
          'HeaderValue': 'String',
          'HealthMonitor': 'String',
          'HttpPort': 'Filter',
          'HttpsPort': 'Filter',
          'Sources': 'String'
        }
      },
      'DeleteDomain': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'DeleteDomain'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceRecordId': 'String'
        }
      },
      'CreateAccessControlRule': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'CreateAccessControlRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceRecordId': 'String',
          'RuleName': 'String',
          'RuleType': 'String',
          'ArgName': 'String',
          'RuleData': 'String',
          'MatchRule': 'Int',
          'Level': 'Int',
          'RuleAction': 'Int',
          'Status': 'Boolean'
        }
      },
      'DescribeAccessControlRules': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'DescribeAccessControlRules'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RuleId': 'String',
          'ResourceRecordId': 'String',
          'RuleName': 'String'
        }
      },
      'ModifyAccessControlRule': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'ModifyAccessControlRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RuleId': 'String',
          'RuleName': 'String',
          'RuleType': 'String',
          'RuleData': 'String',
          'MatchRule': 'String',
          'ArgName': 'String',
          'Level': 'Int',
          'RuleAction': 'Int',
          'Status': 'Boolean'
        }
      },
      'DeleteAccessControlRule': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'DeleteAccessControlRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RuleId': 'String'
        }
      },
      'DescribeCertificates': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'DescribeCertificates'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'Request': 'String'
        }
      },
      'CreateIpv6Protection': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'CreateIpv6Protection'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceRecordId': 'Array'
        }
      },
      'DeleteIpv6Protection': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2020-07-07',
            'Action': 'DeleteIpv6Protection'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ResourceRecordId': 'Array'
        }
      }
    });
  }
};