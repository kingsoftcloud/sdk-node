const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'trade.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'trade',
            },
        },
    }
    _apiList = {
        'DescribeInstances': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2020-01-14',
                    'Action': 'DescribeInstances',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'InstanceIds': 'String',
            }
        },
    }
}