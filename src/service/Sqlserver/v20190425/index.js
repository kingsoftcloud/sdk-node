const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'sqlserver.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'sqlserver',
            },
        },
    }
    _apiList = {
        'CreateDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'CreateDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Mem': 'Int',
                'Disk': 'Int',
                'DBInstanceName': 'String',
                'Engine': 'String',
                'EngineVersion': 'String',
                'DBInstanceType': 'String',
                'MasterUserPassword': 'String',
                'MasterUserName': 'String',
                'VpcId': 'String',
                'SubnetId': 'String',
                'Port': 'String',
                'PreferredBackupTime': 'String',
                'DBParameterGroupId': 'String',
                'SecurityGroupId': 'String',
                'BillType': 'String',
                'Duration': 'String',
                'DurationUnit': 'String',
                'AvailabilityZone': 'Filter',
                'ProjectId': 'Int',
            }
        },
        'DescribeDBInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeDBInstances',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Keyword': 'String',
                'DBInstanceType': 'String',
                'DBInstanceStatus': 'String',
                'ExpiryDateLessThan': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'DeleteDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DeleteDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'ModifyDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBInstanceName': 'String',
            }
        },
        'CreateSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'CreateSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupName': 'String',
                'SecurityGroupDescription': 'String',
                'DBInstanceIdentifier': 'String',
                'SecurityGroupRule': 'Filter',
            }
        },
        'DescribeSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
            }
        },
        'DeleteSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DeleteSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupIds': 'String',
            }
        },
        'ModifySecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifySecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'SecurityGroupName': 'String',
                'SecurityGroupDescription': 'String',
            }
        },
        'CloneSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'CloneSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'SecurityGroupName': 'String',
                'SecurityGroupDescription': 'String',
            }
        },
        'ModifySecurityGroupRule': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifySecurityGroupRule',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupRuleAction': 'String',
                'SecurityGroupId': 'String',
                'SecurityGroupRule': 'Filter',
            }
        },
        'SecurityGroupRelation': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'SecurityGroupRelation',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'RelationAction': 'String',
                'SecurityGroupId': 'String',
                'DBInstanceIdentifier': 'Filter',
            }
        },
        'ModifySecurityGroupRuleName': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifySecurityGroupRuleName',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'SecurityGroupRuleId': 'String',
                'SecurityGroupRuleName': 'String',
            }
        },
        'DescribeCollations': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeCollations',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'CreateInstanceDatabase': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'CreateInstanceDatabase',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceDatabaseName': 'String',
                'InstanceDatabaseCollation': 'String',
                'InstanceDatabaseDescription': 'String',
                'InstanceDatabasePrivileges': 'Filter',
            }
        },
        'ModifyInstanceDatabasePrivileges': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyInstanceDatabasePrivileges',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceDatabaseName': 'String',
                'InstanceDatabasePrivileges': 'Filter',
            }
        },
        'DescribeInstanceDatabases': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeInstanceDatabases',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Keyword': 'String',
            }
        },
        'CreateInstanceAccount': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'CreateInstanceAccount',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceAccountName': 'String',
                'InstanceAccountPassword': 'String',
                'InstanceAccountDescription': 'String',
                'InstanceAccountPrivileges': 'Filter',
            }
        },
        'DescribeInstanceAccounts': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeInstanceAccounts',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Keyword': 'String',
            }
        },
        'ModifyInstanceAccountInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyInstanceAccountInfo',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceAccountName': 'String',
                'InstanceAccountDescription': 'String',
                'InstanceAccountPassword': 'String',
            }
        },
        'ModifyInstanceAccountPrivileges': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyInstanceAccountPrivileges',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceAccountName': 'String',
                'InstanceAccountPrivileges': 'Filter',
            }
        },
        'DeleteInstanceAccount': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DeleteInstanceAccount',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceAccountName': 'String',
            }
        },
        'DeleteInstanceDatabase': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DeleteInstanceDatabase',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceDatabaseName': 'String',
            }
        },
        'ModifyInstanceDatabaseInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyInstanceDatabaseInfo',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceDatabaseName': 'String',
                'InstanceDatabaseDescription': 'String',
            }
        },
        'OverrideDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'OverrideDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBBackupIdentifier': 'String',
            }
        },
        'RestoreDBInstanceFromDBBackup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'RestoreDBInstanceFromDBBackup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceName': 'String',
                'DBBackupIdentifier': 'String',
                'DBInstanceType': 'String',
                'ProjectId': 'String',
                'AvailabilityZone': 'String',
                'Duration': 'Int',
                'DurationUnit': 'String',
                'Port': 'Int',
                'BillType': 'String',
            }
        },
        'CreateDBBackup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'CreateDBBackup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBBackupName': 'String',
                'Description': 'String',
            }
        },
        'DeleteDBBackup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DeleteDBBackup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBBackupIdentifier': 'String',
            }
        },
        'DescribeDBBackups': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeDBBackups',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Keyword': 'String',
                'BackupType': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'ModifyDBBackupPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyDBBackupPolicy',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'PreferredBackupTime': 'String',
                'IncrementalBackupCycle': 'String',
            }
        },
        'AllocateDBInstanceEip': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'AllocateDBInstanceEip',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Port': 'String',
            }
        },
        'ReleaseDBInstanceEip': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ReleaseDBInstanceEip',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'ListSlowLogs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ListSlowLogs',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Time': 'String',
                'OrderBy': 'String',
            }
        },
        'ListErrorLogs': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ListErrorLogs',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'ModifyDBInstanceSpec': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyDBInstanceSpec',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Mem': 'Int',
                'Disk': 'Int',
            }
        },
        'DescribeImportTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeImportTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Keyword': 'String',
            }
        },
        'DescribeImportFile': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeImportFile',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'ImportTaskId': 'String',
            }
        },
        'CreateImportTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'CreateImportTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'KS3Region': 'String',
                'KS3Bucket': 'String',
                'KS3Key': 'String',
                'KS3FileSize': 'String',
                'ImportTaskId': 'String',
                'DBName': 'String',
            }
        },
        'FinishImportTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'FinishImportTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'ImportTaskId': 'String',
            }
        },
        'DescribeDBInstanceRestorableTime': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeDBInstanceRestorableTime',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'GetHistoryDatabaseInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'GetHistoryDatabaseInfo',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBBackupIdentifier': 'String',
                'RestorableTime': 'String',
            }
        },
        'RestoreToCurInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'RestoreToCurInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBBackupIdentifier': 'String',
                'RestorableTime': 'String',
                'SrcDatabases': 'Filter',
                'DstDatabases': 'Filter',
            }
        },
        'ModifyInstanceDatabaseName': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'ModifyInstanceDatabaseName',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceDatabaseName': 'String',
                'InstanceDatabaseNameNew': 'String',
            }
        },
        'RebootDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'RebootDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'DescribeDBBackupPolicy': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'DescribeDBBackupPolicy',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'UpdateDBInstanceOrder': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'UpdateDBInstanceOrder',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'UpdateUse': 'String',
                'Duration': 'Int',
                'BillType': 'String',
            }
        },
        'UpdateResourceProtection': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2019-04-25',
                    'Action': 'UpdateResourceProtection',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'ProtectionSwitch': 'String',
                'ProtectionReason': 'String',
            }
        },
    }
}