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
        'CreateSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-08-25',
                    'Action': 'CreateSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SecurityGroupName': 'String',
                'SecurityGroupDescription': 'String',
                'SecurityGroupType': 'String',
                'DBInstanceIdentifier': 'Filter',
                'SecurityGroupRule.SecurityGroupRuleName.N': 'String',
                'SecurityGroupRule.SecurityGroupRuleCidr.N': 'String',
            }
        },
        'DescribeSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-08-25',
                    'Action': 'DescribeSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'Filter',
                'SecurityGroupType': 'String',
            }
        },
        'DeleteSecurityGroup': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-08-25',
                    'Action': 'DeleteSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
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
                    'Version': '2020-08-25',
                    'Action': 'ModifySecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
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
                    'Version': '2020-08-25',
                    'Action': 'CloneSecurityGroup',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
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
                    'Version': '2020-08-25',
                    'Action': 'ModifySecurityGroupRule',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SecurityGroupRuleAction': 'String',
                'SecurityGroupId': 'String',
                'SecurityGroupRule.SecurityGroupRuleId': 'Filter',
                'SecurityGroupRule.SecurityGroupRuleName': 'Filter',
                'SecurityGroupRule.SecurityGroupRuleCidr': 'Filter',
            }
        },
        'SecurityGroupRelation': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-08-25',
                    'Action': 'SecurityGroupRelation',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RelationAction': 'String',
                'SecurityGroupId': 'String',
                'SecurityGroupIds': 'String',
                'DBInstanceIdentifier': 'String',
            }
        },
        'ModifySecurityGroupRuleName': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-08-25',
                    'Action': 'ModifySecurityGroupRuleName',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'SecurityGroupId': 'String',
                'SecurityGroupRuleId': 'String',
                'SecurityGroupRuleName': 'String',
            }
        },
        'CreateDBParameterGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-08-25',
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
                'Description': 'String',
                'Parameters': 'Object',
            }
        },
        'ModifyDBParameterGroup': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-08-25',
                    'Action': 'ModifyDBParameterGroup',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DBParameterGroupId': 'String',
                'DBParameterGroupName': 'String',
                'Description': 'String',
                'Parameters': 'Object',
            }
        },
    }
}