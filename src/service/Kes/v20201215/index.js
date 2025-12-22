const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kes.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kes',
            },
        },
    }
    _apiList = {
        'DescribeCluster': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'DescribeCluster',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ClusterId': 'String',
            }
        },
        'ListClusters': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'ListClusters',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Marker': 'String',
            }
        },
        'ModifyClusterName': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'ModifyClusterName',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ClusterId': 'String',
                'ClusterName': 'String',
            }
        },
        'LaunchCluster': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'LaunchCluster',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ClusterName': 'String',
                'MainVersion': 'String',
                'Scenario': 'String',
                'AvailabilityZone': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
                'ProjectId': 'Int',
                'VpcDomainId': 'String',
                'VpcSubnetId': 'String',
                'VpcEpcSubnetId': 'String',
                'SecurityGroupId': 'String',
                'InstanceGroups': 'Array',
            }
        },
        'ListInstanceGroups': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'ListInstanceGroups',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ClusterId': 'String',
            }
        },
        'ServiceControl': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'ServiceControl',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ClusterId': 'String',
                'ControlType': 'String',
                'Rolling': 'String',
            }
        },
        'ClusterHealthStatistic': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'ClusterHealthStatistic',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ClusterId': 'String',
            }
        },
        'CheckClusterHealth': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-12-15',
                    'Action': 'CheckClusterHealth',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'cluster_id': 'String',
                'check_list': 'Array',
            }
        },
    }
}