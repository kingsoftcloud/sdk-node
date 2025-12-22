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
      'endpoint': 'clickhouse.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'clickhouse'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'ListInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ListInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'String',
          'TagId': 'String',
          'ProjectIds': 'Filter',
          'FuzzySearch': 'String',
          'OrderBy': 'Filter',
          'Offset': 'Int',
          'Limit': 'Int'
        }
      },
      'DescribeInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'CreateInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'CreateInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'String',
          'InstanceName': 'String',
          'InstanceType': 'String',
          'AdminUser': 'String',
          'AdminPassword': 'String',
          'VpcId': 'String',
          'SubnetId': 'String',
          'Engine': 'String',
          'EngineVersion': 'String',
          'ProjectId': 'String',
          'BillType': 'Int',
          'Duration': 'Int',
          'EbsSize': 'Int',
          'EbsType': 'String',
          'Mem': 'Int',
          'Cpu': 'Int',
          'TcpPort': 'Int',
          'HttpPort': 'Int',
          'Az': 'String',
          'NodeNum': 'Int',
          'PreferredBackupTime': 'String',
          'SecurityGroupId': 'String',
          'ProductWhat': 'Int'
        }
      },
      'DeleteInstance': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DeleteInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceIds': 'Filter',
          'DeleteDirectly': 'Boolean'
        }
      },
      'RestartInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'RestartInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'instanceIds': 'String'
        }
      },
      'RenameInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'RenameInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstanceName': 'String'
        }
      },
      'ListSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ListSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int'
        }
      },
      'DescribeSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupId': 'String'
        }
      },
      'CreateSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'CreateSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupName': 'String',
          'Description': 'String'
        }
      },
      'DeleteSecurityGroup': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DeleteSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'SecurityGroupIds': 'String',
          'ProductType': 'Int'
        }
      },
      'RenameSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'RenameSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupId': 'String',
          'SecurityGroupName': 'String',
          'Description': 'String'
        }
      },
      'CloneSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'CloneSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SrcSecurityGroupId': 'String',
          'SecurityGroupName': 'String',
          'Description': 'String'
        }
      },
      'BindSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'BindSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupIds': 'Array',
          'InstanceIds': 'String'
        }
      },
      'UnbindSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'UnbindSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupId': 'String',
          'InstanceIds': 'Array'
        }
      },
      'CreateSecurityRule': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'CreateSecurityRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupId': 'String',
          'Cidrs': 'Array'
        }
      },
      'DeleteSecurityRule': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DeleteSecurityRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupId': 'String',
          'RuleIds': 'String'
        }
      },
      'ListSecuredInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ListSecuredInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'ProjectIds': 'Filter',
          'FuzzySearch': 'String',
          'Offset': 'Int',
          'Limit': 'Int',
          'OrderBy': 'Filter'
        }
      },
      'ListUnsecuredInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ListUnsecuredInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'FuzzySearch': 'String',
          'Offset': 'Int',
          'Limit': 'Int',
          'OrderBy': 'Filter'
        }
      },
      'ListRecycledInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ListRecycledInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'String',
          'ProjectIds': 'Filter',
          'FuzzySearch': 'String',
          'OrderBy': 'Filter',
          'Offset': 'Int',
          'Limit': 'Int'
        }
      },
      'RecoverRecycledInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'RecoverRecycledInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceIds': 'Array'
        }
      },
      'DropRecycledInstance': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DropRecycledInstance'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceIds': 'Filter'
        }
      },
      'ListRegion': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ListRegion'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int'
        }
      },
      'DescRegion': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescRegion'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'RegionCode': 'String'
        }
      },
      'UpdateSecurityRule': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'UpdateSecurityRule'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'RuleId': 'String',
          'Description': 'String'
        }
      },
      'RebindSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'RebindSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupId': 'String',
          'InstanceId': 'String'
        }
      },
      'DescribeEngineDefaultParameters': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeEngineDefaultParameters'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'EngineVersion': 'String',
          'ConfigType': 'String'
        }
      },
      'ModifyDBParameterGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ModifyDBParameterGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'Parameters': 'String',
          'ConfigType': 'String'
        }
      },
      'DescribeDBInstanceParameters': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeDBInstanceParameters'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'ConfigType': 'String'
        }
      },
      'ResetDBParameter': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ResetDBParameter'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'ConfigType': 'String'
        }
      },
      'DescribeBuckets': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeBuckets'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'OperateHotAndColdSeparation': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'OperateHotAndColdSeparation'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'CreateInstanceAccount': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'CreateInstanceAccount'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Name': 'String',
          'Password': 'String',
          'InstanceId': 'String',
          'Description': 'String'
        }
      },
      'ModifyInstanceAccountPrivileges': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ModifyInstanceAccountPrivileges'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstanceAccountName': 'String',
          'InstanceAccountPrivileges': 'Filter'
        }
      },
      'DeleteInstanceAccount': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DeleteInstanceAccount'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstanceAccountName': 'String'
        }
      },
      'DescribeInstanceAccounts': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeInstanceAccounts'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DescribeInstanceDatabases': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeInstanceDatabases'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'ModifyInstanceAccountInfo': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'ModifyInstanceAccountInfo'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstanceAccountName': 'String',
          'InstanceAccountPassword': 'String',
          'InstanceAccountDescription': 'String'
        }
      },
      'DescribeInstanceShardInfo': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
            'Action': 'DescribeInstanceShardInfo'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'UpdateInstanceTrialOrder': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-01-01',
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