const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'https://',
        'endpoint': 'sts.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'sts',
            },
        },
    }
    _apiList = {
        'AssumeRole': {
            'url': '/',
            'method': 'POST',
            'config': {
                'query': {
                    'Version': '2015-11-01',
                    'Action': 'AssumeRole',
                },
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            },
            'paramsType': {
                'RoleKrn': 'String',
                'RoleSessionName': 'String',
                'DurationSeconds': 'String',
                'Policy': 'String',
            }
        },
    }
}