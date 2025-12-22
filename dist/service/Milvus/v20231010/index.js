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
      'endpoint': 'milvus.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'milvus'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'DeleteSecurityRules': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'DeleteSecurityRules'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'RuleIds': 'String'
        }
      },
      'CreateSecurityRules': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'CreateSecurityRules'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'Rules': 'Filter'
        }
      },
      'UnbindSecurityGroupInstances': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'UnbindSecurityGroupInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'InstancesIds': 'String'
        }
      },
      'BindSecurityGroupInstances': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'BindSecurityGroupInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'InstancesIds': 'String'
        }
      },
      'DeleteSecurityGroup': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'DeleteSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupIds': 'String'
        }
      },
      'DescribeSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'DescribeSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String'
        }
      },
      'CreateSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'CreateSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Name': 'String',
          'IpVersion': 'String',
          'Detail': 'String',
          'Rules': 'Filter'
        }
      },
      'ListSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'ListSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Offset': 'Int',
          'Limit': 'Int'
        }
      },
      'DeleteInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'DeleteInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceIds': 'String'
        }
      },
      'DescribeInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
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
      'ListInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'ListInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Offset': 'String',
          'Limit': 'String',
          'FuzzySearch': 'String',
          'SecBindingStatus': 'String'
        }
      },
      'CreateInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'CreateInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceName': 'String',
          'AdminPassword': 'String',
          'SubnetId': 'String',
          'VnetId': 'String',
          'ProjectId': 'String',
          'ProductType': 'String',
          'DBInstanceType': 'String',
          'Az': 'Array',
          'Engine': 'String',
          'EngineVersion': 'String',
          'AdminUser': 'String',
          'Cu': 'String'
        }
      },
      'ReleaseDBInstanceEip': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'ReleaseDBInstanceEip'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'AllocateDBInstanceEip': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'AllocateDBInstanceEip'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'Port': 'Int'
        }
      },
      'ListBackup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'ListBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'BackupName': 'String',
          'Offset': 'Int',
          'Limit': 'Int'
        }
      },
      'CreateBackup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'CreateBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'BackupName': 'String',
          'DBCollection': 'Array'
        }
      },
      'DeleteBackup': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'DeleteBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'BackupIds': 'String'
        }
      },
      'ListCollections': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'ListCollections'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'Offset': 'Int',
          'Limit': 'Int'
        }
      },
      'UpdateInstanceTrialOrder': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2023-10-10',
            'Action': 'UpdateInstanceTrialOrder'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'OperateType': 'String',
          'Duration': 'Int',
          'BillType': 'Int'
        }
      }
    });
  }
};