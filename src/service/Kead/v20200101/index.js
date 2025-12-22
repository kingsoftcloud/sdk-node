const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kead.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kead',
            },
        },
    }
    _apiList = {
        'DescribeKead': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-01-01',
                    'Action': 'DescribeKead',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'KeadId': 'Filter',
                'ProjectId': 'Filter',
            }
        },
        'DescribeKeadIp': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-01-01',
                    'Action': 'DescribeKeadIp',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'Ip': 'String',
                'ProjectId': 'Filter',
                'PageSize': 'Int',
                'OffSet': 'Int',
            }
        },
        'DescribeBlockIp': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2020-01-01',
                    'Action': 'DescribeBlockIp',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
            }
        },
    }
}