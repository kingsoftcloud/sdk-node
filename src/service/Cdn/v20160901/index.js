const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'cdn.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'cdn',
            },
        },
    }
    _apiList = {
        'GetDomainPidDimensionUsageData': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2016-09-01',
                    'Action': 'GetDomainPidDimensionUsageData',
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