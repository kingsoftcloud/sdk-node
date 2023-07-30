const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'monitor.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'monitor',
            },
        },
    }
    _apiList = {
        'GetMetricStatisticsBatch': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2018-11-14',
                    'Action': 'GetMetricStatisticsBatch',
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