const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'krds.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'krds',
            },
        },
    }
    _apiList = {
        'RebootDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
        'ModifyDBParameterGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ModifyDBParameterGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBParameterGroupId': 'String',
                'Parameters': 'Filter',
                'DBParameterGroupName': 'String',
                'Description': 'String',
            }
        },
        'ResetDBParameterGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ResetDBParameterGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBParameterGroupId': 'String',
            }
        },
        'DescribeDBParameterGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBParameterGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBParameterGroupId': 'String',
                'Keyword': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
                'Source': 'String',
            }
        },
        'DescribeEngineDefaultParameters': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeEngineDefaultParameters',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Engine': 'String',
                'EngineVersion': 'String',
            }
        },
        'CreateDBParameterGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'CreateDBParameterGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBParameterGroupName': 'String',
                'Engine': 'String',
                'EngineVersion': 'String',
                'Parameters.Name': 'Filter',
                'Parameters.Value': 'Filter',
                'Description': 'String',
            }
        },
        'DeleteDBParameterGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DeleteDBParameterGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBParameterGroupId': 'String',
            }
        },
        'CreateDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
                'ProjectId': 'Int',
                'TableNamesAreCaseSensitive': 'Int',
            }
        },
        'RestoreDBInstanceFromDBBackup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
            }
        },
        'DeleteDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
        'CreateDBInstanceReadReplica': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'CreateDBInstanceReadReplica',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBInstanceName': 'String',
                'AttachedVipId': 'String',
                'BillType': 'String',
                'Duration': 'String',
                'DurationUnit': 'String',
                'AvailabilityZone.1': 'String',
                'ProjectId': 'Int',
                'Vip': 'String',
                'Mem': 'Int',
                'Disk': 'Int',
            }
        },
        'RestoreDBInstanceToPointInTime': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'RestoreDBInstanceToPointInTime',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'RestorableTime': 'String',
            }
        },
        'DescribeDBInstanceRestorableTime': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
        'ModifyDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ModifyDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'PreferredBackupTime': 'String',
                'DBInstanceName': 'String',
                'DBParameterGroupId': 'String',
            }
        },
        'DescribeDBLogFiles': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBLogFiles',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBLogType': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'DescribeDBBackups': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBBackups',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'BackupType': 'String',
                'Keyword': 'String',
                'Marker': 'String',
                'MaxRecords': 'Int',
            }
        },
        'ModifyDBInstanceSpec': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
        'DescribeDBInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBInstances',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBInstanceType': 'String',
                'DBInstanceStatus': 'String',
                'Keyword': 'String',
                'Order': 'String',
                'ProjectId': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
                'DBInstanceIdentifierIn': 'Filter',
                'DBInstanceNameIn': 'Filter',
                'VipIn': 'Filter',
                'EIPIn': 'String',
                'ExpiryDateLessThan': 'Int',
            }
        },
        'OverrideDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
        'DescribeDBEngineVersions': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBEngineVersions',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
        'UpgradeDBInstanceEngineVersion': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'UpgradeDBInstanceEngineVersion',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Engine': 'String',
                'EngineVersion': 'String',
            }
        },
        'ModifyDBInstanceType': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ModifyDBInstanceType',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBInstanceType': 'String',
                'BillType': 'String',
                'Duration': 'Int',
                'DurationUnit': 'String',
                'AvailabilityZone': 'String',
            }
        },
        'DescribeDBInstanceParameters': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBInstanceParameters',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'DeleteDBBackup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DeleteDBBackup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBBackupIdentifier': 'String',
            }
        },
        'CreateDBBackup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
        'RenewDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'RenewDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Duration': 'Int',
                'DurationUnit': 'String',
                'BillType': 'String',
                'EndTime': 'String',
            }
        },
        'SwitchDBInstanceHA': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'SwitchDBInstanceHA',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'GenerateDBAdminURL': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'GenerateDBAdminURL',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'StatisticDBInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'StatisticDBInstances',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ExpiryDateLessThan': 'Int',
            }
        },
        'AllocateDBInstanceEip': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
                    'Version': '2016-07-01',
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
        'ModifyDBInstanceAvailabilityZone': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ModifyDBInstanceAvailabilityZone',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'AvailabilityZone.1': 'String',
                'AvailabilityZone.2': 'String',
            }
        },
        'DescribeDBInstanceRegions': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBInstanceRegions',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
        'DescribeDBInstancePackages': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeDBInstancePackages',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'RegionCode': 'String',
            }
        },
        'DescribeLastLog': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeLastLog',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBLogType': 'String',
            }
        },
        'StartAudit': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'StartAudit',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'StopAudit': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'StopAudit',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
            }
        },
        'ListAudit': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ListAudit',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'AccessSqlStatement': 'String',
                'AccessSqlLanguage': 'String',
                'AccessDBName': 'String',
                'SourceIp': 'String',
                'AccessUsername': 'String',
                'AuditBeginTime': 'String',
                'AuditEndTime': 'String',
                'RunResult': 'String',
                'KeyWord': 'String',
                'SortBy': 'String',
                'SortWay': 'String',
                'Marker': 'String',
                'MaxRecords': 'String',
            }
        },
        'AuditStatistic': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'AuditStatistic',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'AuditStatisticBeginTime': 'String',
                'AuditStatisticEndTime': 'String',
            }
        },
        'GetTableRestorableTime': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'GetTableRestorableTime',
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
                    'Version': '2016-07-01',
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
        'OverrideDBInstanceByPointInTime': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'OverrideDBInstanceByPointInTime',
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
                    'Version': '2016-07-01',
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
                'SrcDatabases': 'Array',
                'DstDatabases': 'Array',
            }
        },
        'RestoreToSgInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'RestoreToSgInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'DBBackupIdentifier': 'String',
                'RestorableTime': 'String',
                'SrcDatabases': 'Array',
                'DstDatabases': 'Array',
            }
        },
        'DescribeAuditHotCount': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeAuditHotCount',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'TimeRange': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'DescribeAuditHotDuration': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeAuditHotDuration',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'TimeRange': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'SqlAuditReport': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'SqlAuditReport',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'TimeRange': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'DbName': 'String',
                'SortBy': 'String',
                'SortWay': 'Int',
                'Page': 'Int',
                'Size': 'Int',
            }
        },
        'SqlAuditLineChart': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'SqlAuditLineChart',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'TimeRange': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'SlowLogReport': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'SlowLogReport',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'SortBy': 'String',
                'SortWay': 'String',
                'HeadKey': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'SlowLogLineChart': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'SlowLogLineChart',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'SlowLogDetail': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'SlowLogDetail',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'SortBy': 'String',
                'SortWay': 'String',
                'HeadKey': 'String',
                'FingerPrint': 'String',
                'checksum': 'String',
            }
        },
        'StartAuditDetailExportTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'StartAuditDetailExportTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'ExportFileds': 'String',
                'AuditBeginTime': 'String',
                'AuditEndTime': 'String',
            }
        },
        'ListAuditDetailExportTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ListAuditDetailExportTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Marker': 'String',
                'MaxRecords': 'String',
            }
        },
        'DescribeInstanceAccounts': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
                    'Version': '2016-07-01',
                    'Action': 'ModifyInstanceAccountInfo',
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
            }
        },
        'DescribeCollations': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
                    'Version': '2016-07-01',
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
            }
        },
        'ModifyInstanceDatabasePrivileges': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
                    'Version': '2016-07-01',
                    'Action': 'DescribeInstanceDatabases',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceDatabaseName': 'String',
                'Keyword': 'String',
            }
        },
        'ModifyInstanceDatabaseInfo': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
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
        'StartSlowLogDetailExportTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'StartSlowLogDetailExportTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'AuditBeginTime': 'String',
                'AuditEndTime': 'String',
                'AccessSqlStatement': 'String',
            }
        },
        'ListSlowLogDetailExportTask': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ListSlowLogDetailExportTask',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'Marker': 'String',
                'MaxRecords': 'String',
            }
        },
        'CreateInstanceAccountAction': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'CreateInstanceAccountAction',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceAccountName': 'String',
                'InstanceAccountPassword': 'String',
                'InstanceAccountDescription': 'String',
                'InstanceAccountPrivileges': 'Array',
            }
        },
        'ModifyInstanceAccountPrivilegesAction': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ModifyInstanceAccountPrivilegesAction',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceAccountName': 'String',
                'InstanceAccountPrivileges': 'Array',
            }
        },
        'DeleteInstanceAccountAction': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DeleteInstanceAccountAction',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceAccountName': 'String',
            }
        },
        'DeleteInstanceDatabaseAction': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DeleteInstanceDatabaseAction',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'InstanceDatabaseName': 'String',
            }
        },
        'ModifyDBNetwork': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'ModifyDBNetwork',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'DBInstanceIdentifier': 'String',
                'VpcId': 'String',
                'SubnetId': 'String',
                'Vip': 'String',
                'Port': 'String',
            }
        },
        'DescribeEngineParametersModifyHistory': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-07-01',
                    'Action': 'DescribeEngineParametersModifyHistory',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBParameterGroupId': 'String',
                'Name': 'String',
                'MaxRecords': 'Int',
                'Marker': 'Int',
            }
        },
    }
}