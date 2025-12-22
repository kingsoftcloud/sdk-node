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
      'endpoint': 'tidb.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'tidb'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CreateInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceName': 'String',
          'EnableModules': 'String',
          'ModuleConfigs': 'Filter',
          'AdminUser': 'String',
          'AdminPassword': 'String',
          'VpcId': 'String',
          'SubnetId': 'String',
          'BillType': 'Int',
          'Duration': 'String',
          'ProductType': 'Int',
          'ProjectId': 'String',
          'EnableAutoBackup': 'Boolean',
          'Engine': 'String',
          'EngineVersion': 'String',
          'ClientPort': 'Int',
          'Az': 'String',
          'SecurityGroupId': 'String',
          'BackupConfig': 'Object',
          'backupId': 'String',
          'backupRestoreInstanceId': 'String',
          'backupRestoreTime': 'String'
        }
      },
      'ListInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ListInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectIds': 'String',
          'InstanceStatus': 'String',
          'FuzzySearch': 'String',
          'Offset': 'Int',
          'Limit': 'Int',
          'OrderBy': 'String',
          'ProductType': 'Int'
        }
      },
      'DescribeInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
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
      'DeleteInstance': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-05-20',
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
      'RenameInstance': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'RenameInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'InstanceName': 'String'
        }
      },
      'ListRegion': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
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
            'Version': '2021-05-20',
            'Action': 'DescRegion'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'RegionCode': 'String',
          'ProductType': 'Int'
        }
      },
      'CreateSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CreateSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProductType': 'Int',
          'SecurityGroupName': 'String',
          'IpVersion': 'String',
          'Description': 'String'
        }
      },
      'ListSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ListSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'FuzzySearch': 'String',
          'Offset': 'Int',
          'Limit': 'Int',
          'OrderBy': 'String'
        }
      },
      'DescribeSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'DescribeSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'RuleFuzzySearch': 'String',
          'InstanceFuzzySearch': 'String'
        }
      },
      'DeleteSecurityGroup': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-05-20',
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
      'UpdateSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'UpdateSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
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
            'Version': '2021-05-20',
            'Action': 'CloneSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
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
            'Version': '2021-05-20',
            'Action': 'BindSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'InstanceIds': 'String'
        }
      },
      'UnbindSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'UnbindSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'InstanceIds': 'String'
        }
      },
      'RebindSecurityGroup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'RebindSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'InstanceId': 'String'
        }
      },
      'CreateSecurityRule': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CreateSecurityRule'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'Rules': 'Object'
        }
      },
      'UpdateSecurityRule': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'UpdateSecurityRule'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'RuleId': 'String',
          'Description': 'String',
          'Cidr': 'String'
        }
      },
      'DeleteSecurityRule': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'DeleteSecurityRule'
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
      'ListSecuredInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ListSecuredInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'ProjectIds': 'String',
          'FuzzySearch': 'String',
          'Offset': 'Int',
          'Limit': 'Int',
          'OrderBy': 'String'
        }
      },
      'ListUnsecuredInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ListUnsecuredInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ProjectIds': 'String',
          'FuzzySearch': 'String',
          'Offset': 'Int',
          'Limit': 'Int',
          'OrderBy': 'String'
        }
      },
      'ListBackup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ListBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'Keyword': 'String'
        }
      },
      'CreateBackup': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CreateBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'BackupName': 'String'
        }
      },
      'UpdateBackupRule': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'UpdateBackupRule'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'PreferredBackupTime': 'String',
          'EnableAutobackup': 'Boolean',
          'EnableIncremental': 'Boolean'
        }
      },
      'DeleteBackup': {
        'url': '/',
        'method': 'DELETE',
        'config': {
          'query': {
            'Version': '2021-05-20',
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
      'CreateRestore': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CreateRestore'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'BackupId': 'String'
        }
      },
      'OpenTiMonitor': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'OpenTiMonitor'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'CreateTask': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CreateTask'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'TaskName': 'String',
          'TargetId': 'String',
          'VpcId': 'String',
          'VnetId': 'String',
          'TargetType': 'String',
          'TargetMySQL': 'Object',
          'TargetKafka': 'Object'
        }
      },
      'OperationTasks': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'OperationTasks'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'TaskList': 'String',
          'Operation': 'String'
        }
      },
      'CheckTaskName': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CheckTaskName'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DescribeTask': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'DescribeTask'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'TaskName': 'String'
        }
      },
      'ListTasks': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ListTasks'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DescribeDatabases': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'DescribeDatabases'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'DescribeAccounts': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'DescribeAccounts'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String'
        }
      },
      'CreateAccount': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'CreateAccount'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'AccountName': 'String',
          'AccountPassword': 'String',
          'Describe': 'String',
          'Privileges': 'String'
        }
      },
      'DeleteAccount': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'DeleteAccount'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'AccountName': 'String'
        }
      },
      'ModifyAccountInfo': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ModifyAccountInfo'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'AccountName': 'String',
          'AccountPassword': 'String',
          'AccountType': 'String'
        }
      },
      'ModifyAccountPrivileges': {
        'url': '/',
        'method': 'POST',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ModifyAccountPrivileges'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'AccountName': 'String',
          'OldPrivileges': 'String',
          'NewPrivileges': 'String'
        }
      },
      'ConfigurationInstanceEip': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'ConfigurationInstanceEip'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'Operation': 'String',
          'EipPort': 'Int'
        }
      },
      'UpdateInstanceTrialOrder': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2021-05-20',
            'Action': 'UpdateInstanceTrialOrder'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'InstanceId': 'String',
          'OperateType': 'String',
          'BillType': 'Int',
          'Duration': 'Int'
        }
      }
    });
  }
};