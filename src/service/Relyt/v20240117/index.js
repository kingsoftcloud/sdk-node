const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'relyt.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'relyt',
            },
        },
    }
    _apiList = {
        'GetDwsuMetric': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2024-01-17',
                    'Action': 'GetDwsuMetric',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'DwsuId': 'String',
                'Timestamp': 'Int',
            }
        },
    }
}