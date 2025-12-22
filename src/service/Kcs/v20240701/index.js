const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'kcs.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'kcs',
            },
        },
    }
    _apiList = {
        'DescribeCacheByRole': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2024-07-01',
                    'Action': 'DescribeCacheByRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'CacheId': 'String',
                'Role': 'String',
            }
        },
    }
}