const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'eip.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'eip',
            },
        },
    }
    _apiList = {
        'GetLines': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'GetLines',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'Uuid': 'String',
                'Name': 'String',
                'IpVersion': 'String',
                'Type': 'String',
            }
        },
        'DescribeAddresses': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeAddresses',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'ProjectId': 'Filter',
                'AllocationId': 'Filter',
                'Filter': 'Filter',
                'IsContainTag': 'Boolean',
                'TagKey': 'Filter',
                'TagKV': 'Filter',
                'MaxResults': 'Int',
                'NextToken': 'String',
                'State': 'String',
                'IpVersion': 'String',
            }
        },
        'AllocateAddress': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AllocateAddress',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'LineId': 'String',
                'BandWidth': 'Int',
                'ProjectId': 'String',
                'ChargeType': 'String',
                'PurchaseTime': 'Int',
            }
        },
        'ReleaseAddress': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ReleaseAddress',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AllocationId': 'String',
            }
        },
        'AssociateAddress': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'AssociateAddress',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AllocationId': 'String',
                'InstanceType': 'String',
                'InstanceId': 'String',
                'NetworkInterfaceId': 'String',
                'Mode': 'String',
                'PrivateIpAddress': 'String',
            }
        },
        'DisassociateAddress': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DisassociateAddress',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AllocationId': 'String',
            }
        },
        'ModifyAddress': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyAddress',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'AllocationId': 'String',
                'BandWidth': 'Int',
            }
        },
        'CreateEipPool': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'CreateEipPool',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'DeleteEipPool': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DeleteEipPool',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'ModifyEipPool': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'ModifyEipPool',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'DescribeEipPools': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeEipPools',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
        'DescribeIpExistEipPoolUse': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-03-04',
                    'Action': 'DescribeIpExistEipPoolUse',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
            }
        },
    }
}