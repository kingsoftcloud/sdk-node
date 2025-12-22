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
      'endpoint': 'postgresql.api.ksyun.com',
      'config': {
        'timeout': 60,
        //设置timeout
        'headers': {
          'Accept': 'application/json'
        },
        'credentials': {
          'region': 'cn-shanghai-3',
          'service': 'postgresql'
        }
      }
    });
    _defineProperty(this, "_apiList", {
      'CreateDBInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CreateDBInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Mem': 'Int',
          'Disk': 'Int',
          'DBInstanceName': 'String',
          'Engine': 'String',
          'EngineVersion': 'String',
          'MasterUserPassword': 'String',
          'MasterUserName': 'String',
          'DBInstanceType': 'String',
          'VpcId': 'String',
          'SubnetId': 'String',
          'PreferredBackupTime': 'String',
          'DBParameterGroupId': 'String',
          'SecurityGroupId': 'String',
          'Port': 'String',
          'BillType': 'String',
          'Duration': 'String',
          'DurationUnit': 'String',
          'AvailabilityZone': 'Filter',
          'ProjectId': 'String'
        }
      },
      'DescribeDBInstances': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeDBInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'DBInstanceType': 'String',
          'Keyword': 'String',
          'Marker': 'Int',
          'MaxRecords': 'Int',
          'GroupId': 'String',
          'ProjectId': 'String',
          'DBInstanceIdentifierIn': 'String',
          'DBInstanceNameIn': 'String',
          'VipIn': 'String',
          'ExpiryDateLessThan': 'Int',
          'Order': 'String'
        }
      },
      'DeleteDBInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DeleteDBInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'StatisticDBInstances': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'StatisticDBInstances'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'ExpiryDateLessThan': 'String',
          'GroupId': 'String',
          'Keyword': 'String'
        }
      },
      'ModifyDBInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyDBInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'PreferredBackupTime': 'String',
          'DBInstanceName': 'String',
          'MasterUserPassword': 'String',
          'DBParameterGroupId': 'String',
          'SecurityGroupId': 'String'
        }
      },
      'CreateSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CreateSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupName': 'String',
          'SecurityGroupDescription': 'String',
          'DBInstanceIdentifier': 'Filter',
          'SecurityGroupRule': 'Filter'
        }
      },
      'DescribeSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
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
      'DeleteSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DeleteSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String'
        }
      },
      'ModifySecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifySecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'SecurityGroupName': 'String',
          'SecurityGroupDescription': 'String'
        }
      },
      'CloneSecurityGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CloneSecurityGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'SecurityGroupName': 'String',
          'SecurityGroupDescription': 'String'
        }
      },
      'ModifySecurityGroupRule': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifySecurityGroupRule'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupId': 'String',
          'SecurityGroupRuleAction': 'String',
          'SecurityGroupRule': 'Filter'
        }
      },
      'SecurityGroupRelation': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'SecurityGroupRelation'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'RelationAction': 'String',
          'SecurityGroupId': 'String',
          'DBInstanceIdentifier': 'Filter'
        }
      },
      'ModifySecurityGroupRuleName': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifySecurityGroupRuleName'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'SecurityGroupRuleId': 'String',
          'SecurityGroupRuleName': 'String'
        }
      },
      'DescribeDBLogFiles': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeDBLogFiles'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'DBLogType': 'String',
          'StartTime': 'String',
          'EndTime': 'String',
          'MaxFileSize': 'Int',
          'Marker': 'Int',
          'MaxRecords': 'Int'
        }
      },
      'CreateDBBackup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CreateDBBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'DBBackupName': 'String',
          'Description': 'String'
        }
      },
      'DeleteDBBackup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DeleteDBBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBBackupIdentifier': 'String'
        }
      },
      'DescribeDBBackups': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeDBBackups'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'BackupType': 'String',
          'Keyword': 'String',
          'Marker': 'Int',
          'MaxRecords': 'Int'
        }
      },
      'ModifyDBBackupPolicy': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyDBBackupPolicy'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'PreferredBackupTime': 'String'
        }
      },
      'OverrideDBInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'OverrideDBInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'DBBackupIdentifier': 'String'
        }
      },
      'CreateDBParameterGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CreateDBParameterGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Engine': 'String',
          'EngineVersion': 'String',
          'DBParameterGroupName': 'String',
          'Description': 'String',
          'Parameters': 'Filter'
        }
      },
      'ModifyDBParameterGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyDBParameterGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBParameterGroupId': 'String',
          'DBParameterGroupName': 'String',
          'Description': 'String',
          'Parameters': 'Filter'
        }
      },
      'DeleteDBParameterGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DeleteDBParameterGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBParameterGroupId': 'String'
        }
      },
      'ResetDBParameterGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ResetDBParameterGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBParameterGroupId': 'String'
        }
      },
      'DescribeDBParameterGroup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeDBParameterGroup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBParameterGroupId': 'String',
          'Marker': 'Int',
          'MaxRecords': 'Int',
          'Source': 'String'
        }
      },
      'DescribeEngineDefaultParameters': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeEngineDefaultParameters'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'Engine': 'String',
          'EngineVersion': 'String'
        }
      },
      'DescribeDBInstanceParameters': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeDBInstanceParameters'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'RebootDBInstance': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'RebootDBInstance'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'DescribeDBEngineVersions': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeDBEngineVersions'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {}
      },
      'AllocateDBInstanceEip': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'AllocateDBInstanceEip'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'Port': 'Int'
        }
      },
      'ReleaseDBInstanceEip': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ReleaseDBInstanceEip'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'ModifyDBInstanceSpec': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyDBInstanceSpec'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'Mem': 'Int',
          'Disk': 'Int'
        }
      },
      'RestoreDBInstanceFromDBBackup': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'RestoreDBInstanceFromDBBackup'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBBackupIdentifier': 'String',
          'DBInstanceType': 'String',
          'DBInstanceName': 'String',
          'BillType': 'String',
          'Duration': 'Int',
          'DurationUnit': 'String',
          'AvailabilityZone': 'Filter',
          'VpcId': 'String',
          'SubnetId': 'String'
        }
      },
      'SwitchDBInstanceHA': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'SwitchDBInstanceHA'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'CreateDBInstanceReadReplica': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CreateDBInstanceReadReplica'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'DBInstanceName': 'String',
          'AttachedVipId': 'String',
          'BillType': 'String',
          'Duration': 'String',
          'DurationUnit': 'String',
          'AvailabilityZone': 'Filter',
          'Vip': 'String',
          'Mem': 'Int',
          'Disk': 'Int'
        }
      },
      'ModifyInstanceAccountInfo': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyInstanceAccountInfo'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'AccountName': 'String',
          'AccountPassword': 'String',
          'AccountDescription': 'String'
        }
      },
      'DescribeInstanceDatabases': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeInstanceDatabases'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'DescribeDBInstanceExtensions': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeDBInstanceExtensions'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'KeyWord': 'String'
        }
      },
      'ModifyDBInstanceExtension': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyDBInstanceExtension'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'InstanceDatabaseName': 'String',
          'Operation': 'String',
          'Extension': 'Filter'
        }
      },
      'DescribeCollations': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeCollations'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'ModifyInstanceDatabaseOwner': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyInstanceDatabaseOwner'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'InstanceDatabaseName': 'String',
          'Owner': 'String'
        }
      },
      'DeleteInstanceDatabase': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DeleteInstanceDatabase'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'InstanceDatabaseName': 'String'
        }
      },
      'CreateInstanceDatabase': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CreateInstanceDatabase'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'InstanceDatabaseName': 'String',
          'InstanceDatabaseCollation': 'String',
          'InstanceDatabaseCharacterSet': 'String',
          'InstanceDatabaseCharacterSetType': 'String',
          'Description': 'String',
          'InstanceDatabaseOwner': 'String'
        }
      },
      'DescribeInstanceAccounts': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DescribeInstanceAccounts'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String'
        }
      },
      'CreateInstanceAccount': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'CreateInstanceAccount'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'AccountName': 'String',
          'AccountPassword': 'String',
          'AccountDescription': 'String'
        }
      },
      'DeleteInstanceAccount': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'DeleteInstanceAccount'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'AccountName': 'String'
        }
      },
      'ModifyDBNetwork': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyDBNetwork'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'SubnetId': 'String',
          'VpcId': 'String'
        }
      },
      'UpdateDBInstanceVersion': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'UpdateDBInstanceVersion'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'Engine': 'String',
          'EngineVersion': 'String'
        }
      },
      'ModifyDBInstanceAvailabilityZone': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'ModifyDBInstanceAvailabilityZone'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'AvailabilityZone.1': 'String',
          'AvailabilityZone.2': 'String'
        }
      },
      'UpdateDBInstanceOrder': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'UpdateDBInstanceOrder'
          },
          'headers': {
            'Content-Type': 'application/json'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'UpdateUse': 'String',
          'Duration': 'Int',
          'BillType': 'String'
        }
      },
      'UpdateResourceProtection': {
        'url': '/',
        'method': 'GET',
        'config': {
          'query': {
            'Version': '2018-12-25',
            'Action': 'UpdateResourceProtection'
          },
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        },
        'paramsType': {
          'DBInstanceIdentifier': 'String',
          'ProtectionSwitch': 'String',
          'ProtectionReason': 'String'
        }
      }
    });
  }
};