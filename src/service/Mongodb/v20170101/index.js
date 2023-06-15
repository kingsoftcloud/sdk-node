const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'mongodb.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'mongodb',
            },
        },
    }
    _apiList = {
        'CreateMongoDBInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'CreateMongoDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PayType': 'String',
                'AvailabilityZone': 'Filter',
                'Name': 'String',
                'DbVersion': 'String',
                'NodeNum': 'Int',
                'Storage': 'Int',
                'Duration': 'Int',
                'IamProjectId': 'String',
                'VpcId': 'String',
                'VnetId': 'String',
                'InstancePassword': 'String',
                'InstanceClass': 'String',
            }
        },
        'DeleteMongoDBInstance': {
            'url': '/',
            'method': 'DELETE',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DeleteMongoDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DescribeMongoDBInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeMongoDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DescribeMongoDBInstances': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeMongoDBInstances',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Area': 'String',
                'Vip': 'String',
                'VpcId': 'String',
                'VnetId': 'String',
                'IamProjectId': 'String',
                'InstanceId': 'String',
                'Name': 'String',
                'Mode': 'String',
                'DbVersion': 'String',
                'Status': 'String',
                'FuzzySearch': 'String',
                'TagKey': 'String',
                'TagValue': 'String',
                'Offset': 'Int',
                'Limit': 'Int',
                'OrderBy': 'String',
            }
        },
        'DescribeMongoDBInstanceNode': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeMongoDBInstanceNode',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'RenameMongoDBInstance': {
            'url': '/',
            'method': 'PUT',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'RenameMongoDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'Name': 'String',
            }
        },
        'ResetPasswordMongoDBInstance': {
            'url': '/',
            'method': 'PUT',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ResetPasswordMongoDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'InstancePassword': 'String',
            }
        },
        'RestartMongoDBInstance': {
            'url': '/',
            'method': 'PUT',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'RestartMongoDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'CreateMongoDBSnapshot': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'CreateMongoDBSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'Name': 'String',
                'BackupMode': 'String',
            }
        },
        'SetMongoDBTimingSnapshot': {
            'url': '/',
            'method': 'PUT',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'SetMongoDBTimingSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'TimingSwitch': 'String',
                'Timezone': 'String',
                'TimeCycle': 'String',
            }
        },
        'DescribeMongoDBSnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeMongoDBSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DeleteMongoDBSnapshot': {
            'url': '/',
            'method': 'DELETE',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DeleteMongoDBSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'SnapshotId': 'String',
            }
        },
        'RenameMongoDBSnapshot': {
            'url': '/',
            'method': 'PUT',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'RenameMongoDBSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'SnapshotId': 'String',
                'Name': 'String',
            }
        },
        'AddSecurityGroupRule': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'AddSecurityGroupRule',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'Cidrs': 'String',
                'Type': 'String',
            }
        },
        'ListSecurityGroupRules': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'ListSecurityGroupRules',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'UpdateMongoDBInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'UpdateMongoDBInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'InstanceClass': 'String',
                'Storage': 'Int',
            }
        },
        'AddSecondaryInstance': {
            'url': '/',
            'method': 'PUT',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'AddSecondaryInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NodeNum': 'String',
            }
        },
        'DescribeMongoDBShardNode': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeMongoDBShardNode',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DescribeValidRegion': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeValidRegion',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Action': 'String',
            }
        },
        'AllocateEip': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'AllocateEip',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'Type': 'String',
            }
        },
        'DeallocateEip': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DeallocateEip',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DescribeRegions': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeRegions',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Action': 'String',
            }
        },
        'CreateMongoDBShardInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'CreateMongoDBShardInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PayType': 'String',
                'AvailabilityZone': 'Filter',
                'Name': 'String',
                'DbVersion': 'String',
                'Storage': 'String',
                'Duration': 'Int',
                'IamProjectId': 'String',
                'VpcId': 'String',
                'VnetId': 'String',
                'InstancePassword': 'String',
                'ShardClass': 'String',
                'ShardNum': 'Int',
                'MongosNum': 'Int',
                'MongosClass': 'String',
            }
        },
        'DownloadSnapshot': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DownloadSnapshot',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SnapshotId': 'String',
            }
        },
        'CloneInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'CloneInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'PayType': 'String',
                'AvailabilityZone': 'String',
                'Name': 'String',
                'Duration': 'Int',
                'IamProjectId': 'String',
                'VpcId': 'String',
                'VnetId': 'String',
                'InstancePassword': 'String',
                'SnapshotId': 'String',
                'InstanceId': 'String',
            }
        },
        'DescribeShardNode': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeShardNode',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'DescribeInstanceStatistic': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeInstanceStatistic',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Action': 'String',
            }
        },
        'AddClusterNode': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'AddClusterNode',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NodeType': 'String',
                'NodeClass': 'String',
                'NodeStorage': 'Int',
            }
        },
        'DeleteClusterNode': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DeleteClusterNode',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NodeId': 'String',
            }
        },
        'DescribeSlowLogDetail': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeSlowLogDetail',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NodeId': 'String',
                'InstanceType': 'String',
                'Database': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'DescribeSlowLogStatistics': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeSlowLogStatistics',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NodeId': 'String',
                'InstanceType': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
                'Marker': 'Int',
                'MaxRecords': 'Int',
            }
        },
        'DescribeSlowLogDatabase': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeSlowLogDatabase',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NodeId': 'String',
                'InstanceType': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'DescribeSlowLogLineChart': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'DescribeSlowLogLineChart',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'NodeId': 'String',
                'InstanceType': 'String',
                'StartTime': 'String',
                'EndTime': 'String',
            }
        },
        'UpdateMongoDBInstanceCluster': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2017-01-01',
                    'Action': 'UpdateMongoDBInstanceCluster',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'InstanceClass': 'String',
                'NodeType': 'String',
                'NodeId': 'String',
                'Storage': 'Int',
            }
        },
    }
}