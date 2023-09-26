const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'tidb.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'tidb',
            },
        },
    }
    _apiList = {
        'CreateInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'CreateInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceName': 'String',
                'EnableModules': 'String',
                'ModuleConfigs': 'Array',
                'AdminUser': 'String',
                'AdminPassword': 'String',
                'VpcId': 'String',
                'SubnetId': 'String',
                'BillType': 'Int',
                'Duration': 'String',
                'ProductType': 'Int',
                'ProjectId': 'String',
                'BackupConfig.MaxBackups': 'Int',
                'BackupConfig.MaxReservedHours': 'Int',
                'BackupConfig.PreferredBackupTime': 'String',
                'EnableAutoBackup': 'Boolean',
                'Engine': 'String',
                'EngineVersion': 'String',
                'ClientPort': 'Int',
                'Az': 'String',
                'SecurityGroupId': 'String',
            }
        },
        'ListInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'ListInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ProjectIds': 'String',
                'InstanceStatus': 'String',
                'FuzzySearch': 'String',
                'Offset': 'Int',
                'Limit': 'Int',
                'OrderBy': 'String',
            }
        },
        'DescribeInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'DescribeInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
            }
        },
        'RenameInstance': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'RenameInstance',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'InstanceName': 'String',
            }
        },
        'ListRegion': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'ListRegion',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ProductType': 'Int',
            }
        },
        'DescRegion': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'DescRegion',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'RegionCode': 'String',
                'ProductType': 'Int',
            }
        },
        'CreateSecurityGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'CreateSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProductType': 'Int',
                'SecurityGroupName': 'String',
                'IpVersion': 'String',
                'Description': 'String',
            }
        },
        'ListSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'ListSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'FuzzySearch': 'String',
                'Offset': 'Int',
                'Limit': 'Int',
                'OrderBy': 'String',
            }
        },
        'DescribeSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
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
        'UpdateSecurityGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'UpdateSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'SecurityGroupName': 'String',
                'Description': 'String',
            }
        },
        'CloneSecurityGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'CloneSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SrcSecurityGroupId': 'String',
                'SecurityGroupName': 'String',
                'Description': 'String',
            }
        },
        'BindSecurityGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'BindSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'InstanceIds': 'String',
            }
        },
        'UnbindSecurityGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'UnbindSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'InstanceIds': 'String',
            }
        },
        'RebindSecurityGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'RebindSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'InstanceId': 'String',
            }
        },
        'CreateSecurityRule': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'CreateSecurityRule',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Rules': 'Array',
                'SecurityGroupId': 'String',
            }
        },
        'UpdateSecurityRule': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'UpdateSecurityRule',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RuleId': 'String',
                'Description': 'String',
                'Cidr': 'String',
            }
        },
        'ListUnsecuredInstance': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'ListUnsecuredInstance',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ProjectIds': 'String',
                'FuzzySearch': 'String',
                'Offset': 'Int',
                'Limit': 'Int',
                'OrderBy': 'String',
            }
        },
        'ListBackup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2021-05-20',
                    'Action': 'ListBackup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'InstanceId': 'String',
                'Keyword': 'String',
            }
        },
    }
}