const BaseClient = require("../../../base/BaseClient.js");

module.exports = class Client extends BaseClient {
    _baseConfig = {
        'protocol': 'http://',
        'endpoint': 'iam.api.ksyun.com',
        'config': {
            'timeout': 60,  //设置timeout
            'headers': {
                'Accept': 'application/json'
            },
            'credentials': {
                'region': 'cn-shanghai-3',
                'service': 'iam',
            },
        },
    }
    _apiList = {
        'GetProjectInstanceListNew': {
            'url': '/',
            'method': 'GET',
            'config': {
                'query': {
                    'Version': '2024-05-13',
                    'Action': 'GetProjectInstanceListNew',
                },
                'headers': {
                    'Content-Type': 'application/json'
                },
            },
            'paramsType': {
                'ProjectId': 'Int',
                'ProductLine': 'String',
                'Ps': 'Int',
                'Pn': 'Int',
            }
        },
    }
}