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
      'endpoint': 'rabbitmq.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'rabbitmq'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'CreateInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProjectId': 'String',
          'InstanceName': 'String',
          'InstancePassword': 'String',
          'VpcId': 'String',
          'SubnetId': 'String',
          'EngineVersion': 'String',
          'BillType': 'Int',
          'Duration': 'Int',
          'Mode': 'String',
          'InstanceType': 'String',
          'SsdDisk': 'Int',
          'NodeNum': 'Int'
        }
      },
      'DeleteInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DeleteInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DescribeInstances': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DescribeInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstanceName': 'String',
          'VpcId': 'String',
          'SubnetId': 'String',
          'Offset': 'Int',
          'Limit': 'Int',
          'OrderBy': 'String',
          'ProjectId': 'String'
        }
      },
      'DescribeInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DescribeInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DescribeInstanceNodes': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DescribeInstanceNodes'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DescribeValidRegion': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DescribeValidRegion'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'DescribeRegions': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DescribeRegions'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Action': 'String'
        }
      },
      'DescribeSecurityGroupRules': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DescribeSecurityGroupRules'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'AddSecurityGroupRule': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'AddSecurityGroupRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'Cidrs': 'String'
        }
      },
      'DeleteSecurityGroupRules': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'DeleteSecurityGroupRules'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'Cidrs': 'String'
        }
      },
      'ResetPassword': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'ResetPassword'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstancePassword': 'String'
        }
      },
      'Rename': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2019-10-17',
            'Action': 'Rename'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstanceName': 'String'
        }
      }
    });
  }
};